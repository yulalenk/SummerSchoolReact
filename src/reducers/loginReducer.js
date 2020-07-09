import {
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  LOGIN_FAIL,
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS
} from '../actions/loginActions';

import {
  USER_DELETE, SHOW_LIST, CHANGE_ERROR, CHANGE_MESSAGE,SHOW_QUESTIONS, SEND_MESSAGE
} from '../actions/userActions';

import { CHANGE_RESULT_SUCCESS } from '../actions/quizActions';

export const initialState = {
  user: null,
  type: null,
  isLoading: false,
  error: null,
  message: null,
  list: null,
  questions: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_LOADING:
    case REGISTER_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case LOGIN_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case REGISTER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        type: action.type,
        user: action.payload,
        questions: action.payload2
      }
    case REGISTER_SUCCESS:
      return {
        ...state,
        type: action.type,
        isLoading: false,
        message: action.payload
      };

    case USER_DELETE:
      return {
        ...state,
        user: null,
        type: action.type,
        message: null,
        list: null,
        error: null
      };

    case SHOW_LIST:
      return {
        ...state,
        type: action.type,
        list: action.payload
      };

      case SEND_MESSAGE:
      return {
        ...state,
        type: action.type,
        message: action.payload
      };

    case SHOW_QUESTIONS:
      return {
        ...state,
        type: action.type,
        questions: action.payload
      };

    case CHANGE_RESULT_SUCCESS:
      return {
        ...state,
        user: action.payload

      };

    case CHANGE_ERROR:
      return {
        ...state,
        error: null
      };

    case CHANGE_MESSAGE:
      return {
        ...state,
        message: null
      };

    default:
      return state;
  }
};
