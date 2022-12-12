import { useState, useEffect } from 'react';
import "./Item.css";
import  {getItemsByCategory, orderedGetItems} from '../../services/firestore';
import {useParams} from 'react-router-dom';
import ItemList from './ItemList';
import Loader from '../loader/Loader';



function ItemListContainer() {
	const [products, setProducts] = useState(null);
	const {idCategory}= useParams();

	

	async function getItemsAsync(){
		if(!idCategory){
			let response= await orderedGetItems();
			setProducts(response);
		}
		else{
			let response= await getItemsByCategory(idCategory);
			setProducts(response);
		}
		
	}

	useEffect(()=>{
		getItemsAsync(); 
	 }, [idCategory]);

	 return (
		

		<div className='card text-center w-50 '>
		  {products ? <ItemList className='mt-5' products={products} /> : <Loader  />}

		</div>
	  );
	
			
			
	}



export default ItemListContainer;