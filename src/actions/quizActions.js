import axios from 'axios';
import Cookies from 'js-cookie';
//import { CHANGE_RESULT_REQUEST } from "../constants/api";
import res from "../users.json";
export const CHANGE_RESULT_SUCCESS = "change_result_success";
export const CHANE_RESULT_FAIL = "change_result_fail";


// export const send = (result) => async dispatch => {

//     const authToken = Cookies.get('token');

//     try {
//         const res = await axios.post(CHANGE_RESULT_REQUEST, {
//             authToken,
//             result
//         });

//         if (res.data.code !== 200) {
//             throw Error(res.data.message);
//         }
//         dispatch({
//             type: CHANGE_RESULT_SUCCESS,
//             payload: res.data.message
//         });
//     } catch (error) {
//         dispatch({
//             type: CHANE_RESULT_FAIL,
//             error
//         });
//     }
// };

export const send = (result) => async dispatch => {

    const authToken = Cookies.get('token');

    res.forEach(element => {
        let token = (element.data.message.token).trim();
        console.log(token);
        if (token === authToken) {
            let data = {
                "token":authToken,
                "roleId":2,
                "result":result   
        };
            dispatch({
                type: CHANGE_RESULT_SUCCESS,
                payload: data
            });
        } else console.log("Не тот токен");
    });
};


