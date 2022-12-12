import React from 'react'
import { useParams } from "react-router-dom";

function ThankYou() {
    const idOrder= useParams().idOrder;
  return (
    <div>
    <h1>Thank you for your purchase!</h1>
    <h2>Your Order ID is {idOrder}</h2>
    </div>
  )
}

export default ThankYou;