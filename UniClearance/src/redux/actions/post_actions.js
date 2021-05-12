// returns action creators and a payload
import axios from 'axios';
import {postURL} from '../../network/post_url';
import {
  FETCH_POST_REQUEST,
  FETCH_POST_FAILURE,
  FETCH_POST_SUCCESS,
} from '../action_creators/post_action_creators';

const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST,
  };
};

//when sending post data to the store
const fetchPostSuccess = post => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: post,
  };
};

const fetchPostFailure = error => {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
};

//fetching the actual data using axios
export const getPostData = () => dispatch => {
  dispatch(fetchPostRequest());
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  };
  axios
    .get(postURL, config)
    .then(res => {
      //success
      dispatch(fetchPostSuccess(res.data));
    })
    .catch(res => {
      if (error.response) {
        //failure from server
        console.log(error.response);
        dispatch(fetchPostFailure(error.response.data));
      } else if (error.request) {
        //failure from frontend
        console.log(res.error);
        dispatch(fetchPostFailure('Check internet connectivity'));
      }
    });
};
