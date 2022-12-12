
import ItemCount from '../ItemCount/ItemCount.jsx';
import './ItemDetail.css';
import { useContext, useState } from "react";
import { cartContext } from '../../context/cartContext.jsx';
import { Link } from "react-router-dom";
import ButtonAll from '../ButtonAll/ButtonAll.jsx';


function ItemDetail({ product }) {
	const [isInCart, setIsInCart]=useState(false)
	const { addToCart } = useContext(cartContext)


	function onAddToCart(count){
		setIsInCart (count);
		addToCart(product, count);


	}

	return (
		
		<div className='card my-3'>
			<div>
            <div className='my-3 w-100'>
			<img className="w-75 rounded my-5 text-center" src={product.thumbnail} alt={product.title}/>
			</div>
            <h3>{product.title}</h3>
			<p>Line {product.category} Beautiful piece of</p>
			</div>
			
			<div>
			<p>${product.price}</p>
			</div>
			{
				isInCart?
				(<Link to="/cart"><ButtonAll>Go to Cart</ButtonAll></Link> )
				:
			(<ItemCount onAddToCart={onAddToCart} stock={product.stock} />)
			}
		</div>
		
	);
}

export default ItemDetail; 