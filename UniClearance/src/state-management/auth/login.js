// Action Creators
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';

//Action
export const fetchPostSuccess = userData => {
  return {
    type: POST_LOGIN_SUCCESS,
    payload: userData,
  };
};

//Reducer
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
