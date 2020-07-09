import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {sendMessage} from '../actions/userActions';


function Table(props){
    let message = useSelector(state => state.login.message);
    const dispatch = useDispatch();

    var emails = [];

    const setList = (value, checked) => {

        if(checked){
        console.log(value);
        emails.push(value);
        console.log(emails);
        }else {
        emails.pop(value);
        console.log(emails);
        }
    }

    const sendMessages = () => {
        dispatch(sendMessage(emails))

    }

    const list = props.list.map((user) => 
    <div>
    <table>
        <tr>
            <td>{user.username}</td>
            <td>{user.result}</td>
            <td><input type="checkbox" value={user.username} onClick={e => setList(e.target.value, e.target.checked)}></input></td>
        </tr>
    </table>
    </div>
    )

    return(
        <div>
        <div>{list}</div>
        <button onClick={sendMessages}>Send message about an interview to chosen people</button>
        <h1>{message}</h1>
        </div>
    );
} 

export default Table;