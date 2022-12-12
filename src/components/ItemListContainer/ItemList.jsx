import React from "react";
import Item from "./Item";
import './Item.css'

function ItemList({ products }) {
  return (
    <div className="   py-5 w-100">
      {products.map((product) => {
        return (
          <Item
            key={product.id}

            id={product.id}
            imgurl={product.thumbnail}
            title={product.title}
            price={product.price}
            stock={product.stock}
            category={product.category}
            discount={product.discount}
           
          />
        );
      })}
    </div>
  );
}

export default (ItemList);