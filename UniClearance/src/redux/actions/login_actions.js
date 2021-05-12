import axios from 'axios';
import {loginURL} from '../../network/loginURL';
import {POST_LOGIN_SUCCESS} from '../action_creators/login_action_creators';

//sending login data to the store
export const fetchPostSuccess = userData => {
  return {
    type: POST_LOGIN_SUCCESS,
    payload: userData,
  };
};
