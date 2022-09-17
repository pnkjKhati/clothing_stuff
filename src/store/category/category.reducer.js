import { CATEGORIES_ACTION_TYPES } from "./category.types";

const CATEGORY_INITIAL_STATE = {
  categoriesArray: [],
  isLoading: false,
  error: null
};

export const categoryReducer = (state = CATEGORY_INITIAL_STATE, action) => {
  const { type, payload } = action;
  console.log("start::", action);
  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return { ...state, categoriesArray: payload, isLoading: false };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, error: payload, isLoading: false };
    default:
      return state;
  }
};
