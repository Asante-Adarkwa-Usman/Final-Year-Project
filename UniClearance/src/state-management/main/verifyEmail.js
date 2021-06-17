// Action Creators
export const POST_EMAIL_SUCCESS = 'POST_EMAIL_SUCCESS';

//Action
export const verifyEmailSuccess = email => {
  return {
    type: POST_EMAIL_SUCCESS,
    payload: email,
  };
};

//Reducer
const INITIAL_STATE = {
  loading: false,
  email: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_EMAIL_SUCCESS:
      return {...state, loading: false, email: action.payload};
    default:
      return state;
  }
};
