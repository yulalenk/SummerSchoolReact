import axios from 'axios';
import Cookies from 'js-cookie';
import { CHANGE_RESULT_REQUEST } from "../constants/api";
import res from "../users.json";
export const CHANGE_RESULT_SUCCESS = "change_result_success";
export const CHANE_RESULT_FAIL = "change_result_fail";


export const send = (result) => async dispatch => {
    var token = "Basic "+Cookies.get('token');
    var headers = {
        'Authorization':token
    }
    console.log(headers);

    try {
        const res = await axios.post(CHANGE_RESULT_REQUEST, 
            {"result":result},
            {"headers": headers}
        );
        console.log(res);

        if (res.status !== 200) {
            throw Error(res.data.message);
        }
        dispatch({
            type: CHANGE_RESULT_SUCCESS,
            payload: res.data.user
        });
    } catch (error) {
        dispatch({
            type: CHANE_RESULT_FAIL,
            error
        });
    }
};

// export const send = (result) => async dispatch => {

//     const authToken = Cookies.get('token');

//     res.forEach(element => {
//         let token = (element.user.token).trim();
//         console.log(token);
//         if (token === authToken) {
//             let data = {
//                 "token":authToken,
//                 "role":"user",
//                 "result":result   
//         };
//             dispatch({
//                 type: CHANGE_RESULT_SUCCESS,
//                 payload: data
//             });
//         } else console.log("Не тот токен");
//     });
// };


