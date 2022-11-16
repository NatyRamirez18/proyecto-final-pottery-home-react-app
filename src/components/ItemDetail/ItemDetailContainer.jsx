import { useState, useEffect } from 'react';
import {getOneItem} from '../../services/mockService';
import ItemDetail from './ItemDetail';

import {useParams} from 'react-router-dom';

function ItemDetailContainer() {
	const [product, setProduct] = useState([]);
	
	const {id} = useParams();

async function getItemsAsync(){
	let response= await getOneItem(id);
	setProduct (response); 
}

	useEffect(()=>{
		getItemsAsync();
	},[]);


	return (
		<div className=" card py-5">
			<ItemDetail product={product} />;
		</div>
	);
}

export default ItemDetailContainer;