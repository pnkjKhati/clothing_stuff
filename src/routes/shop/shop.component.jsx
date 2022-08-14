import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {Routes , Route} from "react-router-dom"
import { setCategories } from "../../store/category/category.actions";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

const Shop = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const getCategoryMap = async () => {
      const categoryArray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoryArray));
    };
    getCategoryMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=":category" element={<Category/>}/>
    </Routes>
  );
};

export default Shop;
