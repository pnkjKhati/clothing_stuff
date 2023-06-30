import { USER_AUTHENTICATION } from "./user.types";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action?.type) {
    case USER_AUTHENTICATION.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action?.payload,
      };
    case USER_AUTHENTICATION.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null}
    case USER_AUTHENTICATION.SIGN_OUT_FAILED:
    case USER_AUTHENTICATION.SIGN_UP_FAILED:
    case USER_AUTHENTICATION.SIGN_IN_FAILED:
      return {...state, error:action?.payload}
    default:
      return state;
  }
};
