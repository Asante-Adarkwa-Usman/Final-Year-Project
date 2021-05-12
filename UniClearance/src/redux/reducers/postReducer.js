import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from '../action_creators/post_action_creators';

const INITIAL_STATE = {
  loading: false,
  data: [],
  errorMessage: '',
  failed: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {...state, loading: true};
    case FETCH_POST_SUCCESS:
      return {...state, loading: false, data: action.payload};
    case FETCH_POST_FAILURE:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
        failed: true,
      };
    default:
      return state;
  }
};
