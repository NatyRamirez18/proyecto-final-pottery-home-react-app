import ButtonAll from '../ButtonAll/ButtonAll.jsx';
import './Item.css';
import {Link} from 'react-router-dom';


function Item({title,imgurl,price,id, stock, discount}) {

	const urlDetail = `/detail/${id}`;

	return (
		<div className=' container-fluid my-5 card  w-50'>
			<div className='d-flex flex-column'>		
			<div>
				<h3>{title}</h3>
			</div>
			<div >
				<img className="w-75 rounded" src={imgurl} alt={title} />
			</div>
			<div>
				<p style={{color:'grey'}}>${price}</p>
				{discount? <small style={{color:'grey'}}>Discout {discount}</small>: <> </>}
				{stock <= 0 && <span style={{color:'red'}}>Not available</span>}

			</div>
			</div>

				
			<Link to={urlDetail}>
			{stock!==0 &&<ButtonAll type="submit" touchButton={()=> console.log("click")}>
				GoFurther
			</ButtonAll>}
			
			</Link>
			
			


		</div> 
		
	);
}

export default Item; 