import {POST_LOGIN_SUCCESS} from '../action_creators/login_action_creators';

const INITIAL_STATE = {
  loading: false,
  userDetails: {},
  errorMessage: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_LOGIN_SUCCESS:
      return {...state, loading: false, userDetails: action.payload};
    default:
      return state;
  }
};
