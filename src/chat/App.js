import React, { Component, useState } from 'react';
import SockJsClient from 'react-stomp';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import MailIcon from '@material-ui/icons/Mail';
import Paper from '@material-ui/core/Paper';
import { ChatWrapper, Header, Chat, Message, Sender, Footer } from './ChatStyled'


function randomString(i) {
    var rnd = '';
    while (rnd.length < i)
        rnd += Math.random().toString(36).substring(2);
    return rnd.substring(0, i);
};

const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#08294a',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#08294a',
        },
    }
})(TextField);

class App extends Component {


    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            typedMessage: "",
            name: props.name
        }
    }

    setName = (name) => {
        console.log(name);
        this.setState({ name: name });
    };

    sendMessage = () => {
        this.clientRef.sendMessage('/app/user-all', JSON.stringify({
            name: this.state.name,
            message: this.state.typedMessage
        }));
        document.getElementById("input").value = '';
    };

    displayMessages = () => {
        var current;
        if (this.state.messages.length > 5)
            current = this.state.messages.slice(this.state.messages.length - 5, this.state.messages.length)
        else
            current = this.state.messages;

        return (
            <div>
                {current.map(msg => {
                    return (
                        <div>
                            {this.state.name == msg.name ?
                                <div>
                                    <Sender you={true}>you </Sender>
                                    <Message you={true}>{msg.message}</Message>
                                </div> :
                                <div>
                                    <Sender className="title2">{msg.name} </Sender>
                                    <Message>{msg.message}</Message>
                                </div>
                            }
                        </div>)
                })}
            </div>
        );
    };

    render() {
        return (
            <Paper elevation={3}>
                <ChatWrapper>
                    <Header>
                        <MailIcon style={{ color: "#f2602c" }} />
                    </Header>
                    <Chat>
                        {this.displayMessages()}
                    </Chat>
                    <br />
                    <div>
                        <Footer>
                            <CssTextField id="input" style={{ color: "#08294a" }} label="Enter Message to Send"
                                onChange={(event) => {
                                    this.setState({ typedMessage: event.target.value });
                                }} />

                            <Button id="button" style={{ backgroundColor: "#f2602c", color: "#08294a" }} variant="contained" size="small"
                                onClick={this.sendMessage}>Send</Button>
                        </Footer>
                    </div>
                    <br /><br />
                    <SockJsClient url='http://localhost:8080/websocket-chat/'
                        topics={['/topic/user']}
                        onConnect={() => {
                            console.log("connected");
                        }}
                        onDisconnect={() => {
                            console.log("Disconnected");
                        }}
                        onMessage={(msg) => {
                            var jobs = this.state.messages;
                            jobs.push(msg);
                            this.setState({ messages: jobs });
                            console.log(this.state);
                        }}
                        ref={(client) => {
                            this.clientRef = client
                        }} />
                </ChatWrapper>
            </Paper>
        )
    }
}

export default App;