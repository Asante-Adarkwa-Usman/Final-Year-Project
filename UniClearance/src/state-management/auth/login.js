// Action Creators
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS';

//Action
export const fetchPostSuccess = userDetails => {
  return {
    type: POST_LOGIN_SUCCESS,
    userDetails: {
      username: userDetails.username,
      fullname: userDetails.fullname,
    },
  };
};

//Reducer
const INITIAL_STATE = {
  userDetails: {
    username: '',
    fullname: '',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_LOGIN_SUCCESS:
      return {...state, userDetails: action.userDetails};
    default:
      return state;
  }
};
