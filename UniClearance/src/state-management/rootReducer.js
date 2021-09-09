import {combineReducers} from 'redux';
import {userDataReducer} from './main/userData';

const rootReducer = combineReducers({
  userDetails: userDataReducer,
});

export default rootReducer;
