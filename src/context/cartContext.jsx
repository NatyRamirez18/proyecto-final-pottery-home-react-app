import { createContext, useState } from "react";



export const cartContext= createContext();



export function CartContextProvider ({children}){
    
   

    const [cart, setCart] = useState ([])

    function addToCart (product, count ){
      let itemAlreadyInCart = cart.findIndex(
        (itemInCart) => itemInCart.id === product.id
      );
  
      let newCart = [...cart];
  
      if (itemAlreadyInCart !== -1) {
        newCart[itemAlreadyInCart].count += count;
        setCart(newCart);
      } else {
       
        product.count = count;
        newCart.push(product);

  
        setCart(newCart);
      }
    }

    function clear() {
        setCart([]);
      }

    function removeItem(idRemove) {
      const newCart = [...cart];
      let selected= newCart.filter((product)=> product.id !== idRemove)
      /* newCart.pop(); */
      setCart(selected);
      }
    
      function priceInCart() {
        let totalPrice = 0;
        cart.forEach(
          (item) =>
            (totalPrice = totalPrice + (item.count * item.price))
        );
        return totalPrice;
      }
    
      function alreadyInCart(id){
        /* return true/false */
      }

    function itemsInCart() {
        let total = 0;
        cart.forEach((itemInCart) => (total = total + itemInCart.count));
        
        
        return total;

        
      }



      return (
        <cartContext.Provider
          value={{ cart, addToCart, itemsInCart, removeItem, priceInCart,clear,alreadyInCart}}>
          {children}
        </cartContext.Provider>



    )
}




