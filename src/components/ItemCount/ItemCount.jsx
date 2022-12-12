import React, { useState } from "react";
import ButtonAll from "../ButtonAll/ButtonAll";

function ItemCount({ stock, onAddToCart }) {
  const [count, setCount] = useState(1);

  function handleAdd() {
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract() {
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
      <div className="itemcount_control">
        <ButtonAll colorBtn="red" onTouchButton={handleSubstract}>
          -
        </ButtonAll>
        <span>{count}</span>
        <ButtonAll colorBtn="green" onTouchButton={handleAdd}>
          +
        </ButtonAll>
      </div>
      <div className="itemcount_btns">
        <ButtonAll onTouchButton={() => onAddToCart(count)}>
          Add to cart
        </ButtonAll>
      </div>
    </div>
  );
}

export default ItemCount;


