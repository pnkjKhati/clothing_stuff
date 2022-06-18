import CategoryItem from "../category-item/category-item.component"
import './directry.style.scss'

const Directry = ({categories}) => {
    return(
    <div className="directry-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
      ))}
    </div>
    )
}

export default Directry;