import { USER_AUTHENTICATION } from "./user.types";

const initialState = {
  currentUser: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action?.type) {
    case USER_AUTHENTICATION.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
