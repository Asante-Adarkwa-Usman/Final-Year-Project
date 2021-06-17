import {combineReducers} from 'redux';
import loginReducer from './auth/login';
import signupReducer from './auth/signup';
import verifyEmailReducer from './main/verifyEmail';

const rootReducer = combineReducers({
  userLogin: loginReducer,
  userSignup: signupReducer,
  verifyEmail: verifyEmailReducer,
});

export default rootReducer;
