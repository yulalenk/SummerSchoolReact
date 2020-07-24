import axios from 'axios';
import Cookies from 'js-cookie';
import { LOGIN_REQUEST, REGISTER_REQUEST } from '../constants/api';

export const LOGIN_LOADING = 'login_loading';
export const LOGIN_SUCCESS = 'login_success';
export const LOGIN_FAIL = 'login_fail';

export const REGISTER_LOADING = 'REGISTER_LOADING';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAIL = 'REGISTER_FAIL';


export const loginUser = (login, password) => async dispatch => {
  dispatch({
    type: LOGIN_LOADING
  });

  try {
    const res = await axios.post(LOGIN_REQUEST, {
      "username": login,
      "password": password
    });
    Cookies.set('token', res.data.message, { sameSite: "lax" });
    console.log(res.data.user);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data.user,
      payload2: res.data.questions
    });
  } catch (error) {
    if (error.response.status == 401) {
      dispatch({
        type: LOGIN_FAIL,
        payload: "Wrong user or password"
      });
    }
  };
}

export const registerUser = (login, password) => async dispatch => {
  dispatch({
    type: REGISTER_LOADING
  });
  try {
    const response = await axios.post(REGISTER_REQUEST, {
      "username": login,
      "password": password
    });
    console.log("От реги" + response);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: response.data.message
    });
  } catch (error) {
    if (error.response.status == 409) {
      dispatch({
        type: REGISTER_FAIL,
        payload: "User with this email have already exist"
      });
    }
  }
};


