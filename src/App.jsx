import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import Greeting from "./components/Titles/Greeting.jsx";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import CartSection from "./components/CartSection/CartSection";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartContextProvider } from "./context/cartContext";
import ThankYou from "./components/ThankYou/ThankYou";
import Footer from "./components/Footer/Footer";
import Hero from "./components/hero/Hero";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Hero/>
            <Greeting />

            <Routes>
              <Route path="/" element={<ItemListContainer /> } />
              <Route path="/detail/:id" element={<ItemDetailContainer /> } />

              <Route path="/category/:idCategory" element={<ItemListContainer /> } />
              <Route path="/cart" element={<CartSection/> } />
              <Route path="/thankyou/:idOrder" element= {<ThankYou/> } />

              <Route path="*" element={<h1>Error 404: Not Found </h1> } />
            </Routes>
            <Footer/>
          </BrowserRouter>
        </CartContextProvider>
      </header>
    </div>
  );
}

export default App;
