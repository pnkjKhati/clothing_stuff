import { createSelector } from "reselect";

const selectCategoryReducer = state => state.category;

const selectCategories = createSelector(
  [selectCategoryReducer],
  categoriesSlice => categoriesSlice.categoriesArray
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  categories =>
    categories?.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
);
