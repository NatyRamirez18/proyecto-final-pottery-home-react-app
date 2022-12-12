import { useState, useEffect } from 'react';
import {getOneItem} from '../../services/firestore';
import ItemDetail from './ItemDetail';
import {useParams} from 'react-router-dom';
import Loader from '../loader/Loader';
import './ItemDetail.css';

function ItemDetailContainer() {
	const [product, setProduct] = useState([]);
	const [isLoading, setIsLoading]= useState (true);
	
	const {id} = useParams();

async function getItemsAsync(){
	getOneItem(id).then(response=>{
		setProduct(response);
		setIsLoading(false)
	})	
}

	useEffect(()=>{
		getItemsAsync();
	},[]);

	if (isLoading)
	return(
		<Loader/>
	)


	return (
		<div className=" card-detail  w-25">
			<ItemDetail product={product} />
		</div>
	);
}

export default ItemDetailContainer;