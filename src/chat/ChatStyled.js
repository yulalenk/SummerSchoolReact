import styled from "styled-components";

const ChatWrapper = styled.div`
position: absolute;
right:20px;
font-family: "Helvetica Neue", Helvetica, sans-serif;
font-size: 15px;
font-weight: normal;
height:550px;
width: 300px;
margin: 0 auto;
display: flex;
flex-direction: column;
border: 2px solid #08294a;
border-radius: 4px 4px 20px 20px;
background-color:#f2f6fb;
justify-content: center;
`

const Header = styled.div`
position:absolute;
top:0px;
font-size:20px;
font-width:bold;
width:300px;
height:20px;
background-color:#08294a;
font-color:white;
display: flex;
justify-content: center;
`
const Footer = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color:#f2f6fb;
`

const Chat = styled.div`
padding:auto;
background-color:#f2f6fb;
height:480px;
border-bottom: 2px solid #08294a;

`
const Message = styled.p`
color:#08294a;
top:15px;
max-width: 210px;
word-wrap: break-word;
margin-bottom: 12px;
line-height: 24px;
position:relative;
padding:10px 20px;
border-radius:25px;
background-color: ${props => props.you ? "#ccdeef" : "#cdd4db"};
left:${props => props.you ? "50px" : "0px"};
`

const Sender = styled.h5`
position:relative;
margin-top: 3px;
z-index:1;
    float: left;
    color: ${props => props.you ? "#08294a" : "#08294a"};
    left: ${props => props.you ? "270px" : "10px"};
`
export { ChatWrapper, Header, Chat, Message, Sender, Footer }