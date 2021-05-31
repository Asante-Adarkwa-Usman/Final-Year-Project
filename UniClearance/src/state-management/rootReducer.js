import {combineReducers} from 'redux';
import loginReducer from './auth/login';
import signupReducer from './auth/signup';

const rootReducer = combineReducers({
  userLogin: loginReducer,
  userSignup: signupReducer,
});

export default rootReducer;
