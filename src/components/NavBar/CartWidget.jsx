import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import { cartContext } from "../../context/cartContext";



function CartWidget() {
	const miContext = useContext (cartContext)
	const eraseMark= miContext.itemsInCart()


	return (
		<div className='d-flex justify-content-end'>
			<li>
			 
			 	<div>
				<> 
			 	<FontAwesomeIcon icon={ faCartShopping } /> 
				 { cartContext <=0 && {display: "none"}}
				
				{eraseMark!==0 &&<span >{eraseMark}</span> }

				</>

			 	</div>
			
			</li>
		</div>
	);
}

export default CartWidget;



