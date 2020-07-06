import axios from 'axios';
import Cookies from 'js-cookie';
import { LOGIN_REQUEST, REGISTER_REQUEST } from '../constants/api';
import res from '../users.json';

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

  console.log("От авторизации");
  console.log(res);

  try {

    var sign = false;
    res.forEach(element => {
      let email = (element.data.message.email).trim();
      let code = (element.data.message.password).trim();
      if ((email === login) && (code === password)) {
        sign = true;
        Cookies.set('token', element.data.message.token);
        dispatch({
          type: LOGIN_SUCCESS
        });
      }
    });

    if (!sign)
      throw Error(res.data.message);
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
      error
    });
  }
};

export const registerUser = (login, password) => async dispatch => {
  dispatch({
    type: REGISTER_LOADING
  });

  console.log("От регистрации");
  console.log(res);


  try {
    var sign = false;
    res.forEach(element => {
      let email = (element.data.message.email).trim();
      if (email === login) {
        sign = true;
        throw Error(res.data.message);
      }
    });

    if (!sign) {
      var token = Math.random().toString(12);
      var data = {
        "data": {
          "message": {
            "token": token,
            "email": login,
            "password": password,
            "roleId": 2,
            "roleName": "Пользователь"
          }
        }
      }

      res.push(data);
      Cookies.set('token', token);
      dispatch({
        type: REGISTER_SUCCESS
      });
    }
  } catch (error) {
    dispatch({
      type: REGISTER_FAIL,
      error
    });
  }
};

//ВСЕ ОСТАЛЬНОЕ ДЛЯ НОРМАЛЬНОГО ОБРАЩЕНИЯ К СЕРВЕРУ, А НЕ ФАЙЛИКУ

// export const loginUser = (login, password) => async dispatch => {
//   dispatch({
//     type: LOGIN_LOADING
//   });

//   try {
//     const res = await axios.post(LOGIN_REQUEST, {
//       login,
//       password
//     });

//     console.log("От логинки")
//     console.log(res);

//     if (res.data.code !== 200) {
//       throw Error(res.data.message);
//     }
//     Cookies.set('token', res.data.message.token);
//     dispatch({
//       type: LOGIN_SUCCESS
//     });
//   } catch (error) {
//     dispatch({
//       type: LOGIN_FAIL,
//       error
//     });
//   }
// };

// const data = res.map(d => {
//   return {
//     login: d.data.message.email,
//     passwords: d.data.message.password
//   }

// }
// );

// console.log(data);




// export const registerUser = (login, password) => async dispatch => {
//   dispatch({
//     type: REGISTER_LOADING
//   });

//   try {
//     const res = await axios.post(REGISTER_REQUEST, {
//       login,
//       password
//     });

//     if (res.data.code !== 200) {
//       throw Error(res.data.message);
//     }
//     Cookies.set('token', res.data.message.token);
//     dispatch({
//       type: REGISTER_SUCCESS
//     });
//   } catch (error) {
//     dispatch({
//       type: REGISTER_FAIL,
//       error
//     });
//   }
// };


