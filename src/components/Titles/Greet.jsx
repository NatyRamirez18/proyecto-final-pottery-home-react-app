import React from 'react';
import Greeting from './Greeting.jsx';
import "./titles.css";



function Greet(props) {
	return (
		<div>
			 <h1>{props.saludo}</h1> 
		</div>
	);
}

export default Greet;


