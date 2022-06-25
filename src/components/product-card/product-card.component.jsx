import Button from '../button/button.component'
import './product-card.scss'

const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product
    return(
        <div className='product-card-container'>
            <img src={`${imageUrl}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType="invert">Add to Card</Button>
        </div>
    )
}

export default ProductCard;