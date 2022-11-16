import { useState, useEffect } from 'react';


import Item from './Item';
import "./Item.css";
import products from '../../data/data';
import getItems from '../../services/mockService';

import {useParams} from 'react-router-dom';

function ItemListContainer() {
	const [products, setProducts] = useState([]);
	const {id2}= useParams();

	async function getItemsAsync(){
		let respuesta= await getItems(id2);
		setProducts(respuesta);
	}

	useEffect(()=>{
		getItemsAsync(); 
			
		}, [id2]);

	return (
		<div className=" card py-5">
			{
			products.map((product)=>{
				return(
					<Item
					key={product.id} 

					id={product.id}
					title={product.title}
					imgurl={product.thumbnail}
					price={product.price}
					category={product.category}
					stock={product.stock}
					/>


				);
			})}
		</div>
	);
}

export default ItemListContainer;