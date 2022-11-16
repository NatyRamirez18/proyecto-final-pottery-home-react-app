import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";



function CartWidget() {
	return (
		<div className='d-flex justify-content-end'>
			<li>
			 
			 	<div>
			 	<FontAwesomeIcon icon={ faCartShopping } /> 

			 	</div>
			
			</li>
		</div>
	);
}

export default CartWidget;



