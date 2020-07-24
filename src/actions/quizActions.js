import axios from 'axios';
import Cookies from 'js-cookie';
import { CHANGE_RESULT_REQUEST } from "../constants/api";
export const CHANGE_RESULT_SUCCESS = "change_result_success";
export const CHANE_RESULT_FAIL = "change_result_fail";


export const send = (result, quizData) => async dispatch => {
    var token = "Basic " + Cookies.get('token');
    var headers = {
        'Authorization': token
    }
    var quiz = {
        "answer1": quizData[0],
        "answer2": quizData[1],
        "answer3": quizData[2],
        "answer4": quizData[3]
    }

    try {
        const res = await axios.post(CHANGE_RESULT_REQUEST,
            { "result": result, "quizData": quiz },
            { "headers": headers }
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


