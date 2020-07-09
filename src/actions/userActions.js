import axios from 'axios';
import Cookies from 'js-cookie';
import { LOGOUT_REQUEST,SHOW_LIST_REQUEST, SHOW_QUESTIONS_REQUEST, EMAILS_REQUEST } from "../constants/api";

export const USER_DELETE = "user_delete";
export const SHOW_LIST = "show_list";
export const CHANGE_ERROR = "change_error";
export const CHANGE_MESSAGE = "change_message";
export const SHOW_QUESTIONS = "show_questions";
export const SEND_MESSAGE = "send_message";

export const changeError = () =>{
  return {
    type: CHANGE_ERROR
  };
};

export const changeMessage = () =>{
  return {
    type: CHANGE_MESSAGE
  };
};

export const sendMessage = (list) => async dispatch => {
  var token = "Basic " + Cookies.get('token');
  console.log(token);
  var headers = {
    'Authorization': token
  }

  try {
    const res = await axios.post(EMAILS_REQUEST, {"emails":list},
      { "headers": headers }
    );
    console.log(res);
    dispatch({
      type: SEND_MESSAGE,
      payload:res.data.message
    });
  } catch (error) {
    console.log(error);
  }
};

export const del = () => async dispatch => {
  var token = "Basic " + Cookies.get('token');
  var headers = {
    'Authorization': token
  }

  try {
    const res = await axios.post(LOGOUT_REQUEST, {},
      { "headers": headers }
    );
    console.log(res);

    if (res.status !== 200) {
      throw Error(res.data.message);
    }
    dispatch({
      type: USER_DELETE
    });
  } catch (error) {
    console.log(error);
  }
};

export const show = () => async dispatch => {
  var token = "Basic " + Cookies.get('token');
  console.log(token);
  var headers = {
    'Authorization': token
  }

  try {
    const res = await axios.get(SHOW_LIST_REQUEST, 
      { "headers": headers }
    );
    console.log(res);

    if (res.status !== 200) {
      throw Error(res.data.message);
    }
    dispatch({
      type: SHOW_LIST,
      payload: res.data.participants
    });
  } catch (error) {
    console.log(error);
  }
};