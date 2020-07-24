import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendMessage } from '../actions/userActions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import './table.css';


function Result(props) {
    let message = useSelector(state => state.login.message);
    const dispatch = useDispatch();

    var emails = [];

    const setList = (value, checked) => {

        if (checked) {
            emails.push(value);
        } else {
            emails.pop(value);
        }
    }

    const sendMessages = () => {
        dispatch(sendMessage(emails))

    }

    const list = props.list.map((user) =>
            <TableRow className="row">
                <TableCell component="th" scope="row">{user.username}</TableCell>
                <TableCell size="small">{user.quiz ? user.quiz.answer1 : null}</TableCell>
                <TableCell size="small">{user.quiz ? user.quiz.answer2 : null}</TableCell>
                <TableCell size="small">{user.quiz ? user.quiz.answer3 : null}</TableCell>
                <TableCell size="small">{user.quiz ? user.quiz.answer4 : null}</TableCell>
                <TableCell size="small"><input type="checkbox" value={user.username} onClick={e => setList(e.target.value, e.target.checked)}></input></TableCell>
            </TableRow>
    )

    return (
        <div>
            <Table className="table">
                <TableHead className="header">
                    <TableRow>
                        <TableCell>Email</TableCell>
                        <TableCell>Answer1</TableCell>
                        <TableCell>Answer2</TableCell>
                        <TableCell>Answer3</TableCell>
                        <TableCell>Answer4</TableCell>
                        <TableCell>Send Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list}
                </TableBody>
            </Table >
            <br/>
            <Button 
            color="default"
            style={{ backgroundColor: "#f2602c", color:"#08294a",height: "30px"}}
            variant="contained"
            onClick={sendMessages}>Invite</Button>
            <h1>{message}</h1>
        </div>
    );
}

export default Result;