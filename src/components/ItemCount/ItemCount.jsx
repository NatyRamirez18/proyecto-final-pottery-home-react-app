import React from 'react';
import "../MyButton/MyButton.css";
import products from '../../data/data';

function ItemCount(props) {
    let[ count, setCount] = React.useState(1)
function handleAdd(){
    if (count < products.stock)
    setCount(count+1);
}
function handleMinus(){
    if (count > 1)
    setCount(count-1);
}
  return (
    <div>
    <button onClick={handleMinus} className='button rounded'>-</button>
    <span>{count}</span>
    <button onClick={handleAdd} className='button rounded'>+</button>
    <br />
    <button className='button rounded'>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount