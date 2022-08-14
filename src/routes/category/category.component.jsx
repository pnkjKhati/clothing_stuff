
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ProductCard from "../../components/product-card/product-card.component";
import { CategoryContainer, CategoryTitle } from "./category.style";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/category/category.selector";

const Category = () => {
    const { category } = useParams()
    const categoriesMap = useSelector(selectCategoriesMap)
    const [products, setProducts] = useState([])

    useEffect(( ) => {
        setProducts(categoriesMap[category])
    },[category, categoriesMap])

    return(
        <>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
        <CategoryContainer>
            {
                products?.map( (product) => <ProductCard key={product.id} product={product}/>)
            }
        </CategoryContainer>
        </>
    )
}

export default Category;