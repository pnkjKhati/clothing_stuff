import { createAction } from "../../utils/reducer/reducer.utils";
import { USER_AUTHENTICATION } from "./user.types";

export const setCurrentUser = user => {
  return createAction(USER_AUTHENTICATION.SET_CURRENT_USER, user);
};
