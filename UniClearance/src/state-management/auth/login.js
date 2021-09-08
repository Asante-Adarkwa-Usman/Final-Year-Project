// Action Creators
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';

//Action
export const fetchUserDataSuccess = userDetails => {
  return {
    type: POST_LOGIN_SUCCESS,
    payload: userDetails,
  };
};

//Reducer
const INITIAL_STATE = {
  userDetails: {},
};

export const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_LOGIN_SUCCESS:
      return {...state, userDetails: action.payload};
    default:
      return state;
  }
};
