import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch(({ type: LOGIN_USER }));

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(error => loginUserFail(dispatch, error));
  };
};

export const signupUser = ({ email, password }) => {
  return (dispatch) => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(error => loginUserFail(dispatch, error));
  };
};

const loginUserFail = (dispatch, error) => {
  let errorMessage;

  switch (error.code) {
    case 'auth/invalid-email':
      errorMessage = 'Please enter a valid email';
      break;
    case 'auth/email-already-in-use':
      errorMessage = 'Email is already in Use';
      break;
    case 'auth/weak-password':
      errorMessage = 'Password should be at least 6 characters long';
      break;
    default:
      errorMessage = 'Invalid username or password';
      break;
  }

  dispatch({
    type: LOGIN_USER_FAIL,
    payload: errorMessage
  });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

  Actions.main();
};
