// Action Creators
export const GET_USERDATA_SUCCESS = 'GET_USERDATA_SUCCESS';

//Action
export const getUserDataSuccess = userDetails => {
  return {
    type: GET_USERDATA_SUCCESS,
    payload: userDetails,
  };
};

//Reducer
const INITIAL_STATE = {
  userDetails: [],
};

export const userDataReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERDATA_SUCCESS:
      return {...state, userDetails: action.payload};
    default:
      return state;
  }
};
