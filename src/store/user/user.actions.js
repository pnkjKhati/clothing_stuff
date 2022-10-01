import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_AUTHENTICATION } from "./user.types";

export const setCurrentUser = user => {
  return createAction(USER_AUTHENTICATION.SET_CURRENT_USER, user);
};

export const checkUserSession = () =>
  createAction(USER_AUTHENTICATION.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  createAction(USER_AUTHENTICATION.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  createAction(USER_AUTHENTICATION.EMAIL_SIGN_IN_START, { email, password });

export const signInSuccess = user =>
  createAction(USER_AUTHENTICATION.SIGN_IN_SUCCESS, user);

export const signInFailed = error =>
  createAction(USER_AUTHENTICATION.SIGN_IN_FAILED, error);

export const signUpStart = (email, password, displayName) =>
  createAction(USER_AUTHENTICATION.SIGN_UP_START, {
    email,
    password,
    displayName
  });

export const signUpSuccess = (user, additionalDetails) =>
  createAction(USER_AUTHENTICATION.SIGN_UP_SUCCESS, {
    user,
    additionalDetails
  });

export const signUpFailed = error =>
  createAction(USER_AUTHENTICATION.SIGN_UP_FAILED, error);

export const signOutStart = () =>
  createAction(USER_AUTHENTICATION.SIGN_OUT_START);

export const signOutSuccess = () =>
  createAction(USER_AUTHENTICATION.SIGN_OUT_SUCCESS);

export const signOutFailed = error =>
  createAction(USER_AUTHENTICATION.SIGN_OUT_FAILED, error);
