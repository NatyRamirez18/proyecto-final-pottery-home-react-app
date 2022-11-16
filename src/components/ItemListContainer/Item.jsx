import MyButton from '../MyButton/MyButton.jsx';
import './Item.css';
import {Link} from 'react-router-dom';


function Item({title,imgurl,price,id, stock}) {

	const urlDetail = `/detail/${id}`;

	return (
		<div className='card'>
			<div>
				<h3>{title}</h3>
			</div>
			<div className='card-img'>
				<img className="w-75 rounded" src={imgurl} alt={title} />
			</div>
			<div>
				<p>${price}</p>
				<Link to={urlDetail}><MyButton /></Link>
			</div>
			


		</div> 
		
	);
}

export default Item; 