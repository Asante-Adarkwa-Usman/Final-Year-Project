// Action Creators
const GET_USERDATA_SUCCESS = 'GET_USERDATA_SUCCESS';

const RESET_STATE = 'RESET_STATE';
//Action
export const getUserDataSuccess = userDetails => {
  return {
    type: GET_USERDATA_SUCCESS,
    payload: userDetails,
  };
};

export const resetReduxStore = () => {
  return {
    type: RESET_STATE,
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
    case RESET_STATE:
      return {...state, userDetails: []};
    default:
      return state;
  }
};
