import {
  USER_ADD,
  USER_DELETE
} from '../actions/userActions';
import {
  CHANGE_RESULT_SUCCESS
} from '../actions/quizActions';

export const initialState = {
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_ADD:
      return {
        ...state,
        user: action.payload
      };

    case USER_DELETE:
      return {
        ...state,
        user: null
      };

    case CHANGE_RESULT_SUCCESS:
      return {
        ...state,
        user: action.payload

      };



    default:
  return state;
}
};
