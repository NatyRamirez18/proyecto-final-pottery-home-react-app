import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget.jsx';
import './NavBar.css';





function NavBar() {
	return (
<nav className="navbar nav-bg navbar-expand-lg ms-0 sticky-top w-100 ">
	<div className="container-fluid nav-flex ">
		<Link className="navbar-brand" to="/"><span className= "fs-2 fw-bolder">Pottery Home</span></Link>
		<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
		<span className="navbar-toggler-icon"></span></button>
    	<div className="collapse navbar-collapse nav-flex" id="navbarNavAltMarkup">
      	<div className="navbar-nav">
        <Link className="nav-link px-3"  to="/category/Breakfast">Breakfast</Link>
        <Link to="/category/Combos" className="nav-link px-3">Combos</Link>
        <Link className="nav-link px-3" to="/category/Christmas">Christmas</Link>
         <Link className="nav-link px-3" to="/category/Glass">Glass</Link>
        <Link className="nav-link px-3" to="/"> <CartWidget /><span>0</span></Link>
		
        
      </div>
    </div>
  </div>
</nav>
		
	);
}

export default NavBar;