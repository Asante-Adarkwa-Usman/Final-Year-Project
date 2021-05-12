import {combineReducers} from 'redux';
import postReducer from './reducers/postReducer';
import loginReducer from './reducers/loginReducer';

const rootReducer = combineReducers({
  posts: postReducer,
  userLogin: loginReducer,
});

export default rootReducer;
