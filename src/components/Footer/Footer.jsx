import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer class="footer mt-5">
  <div class="footer__addr">
    <h1 class="footer__logo">Pottery Home®</h1>
        
    <h2>Contact</h2>
    
    
      2546 Anywhere street, Cordoba Argentina<br/>
          
      <a class="footer__btn" href="mailto:example@gmail.com">Email Us</a>
    
  </div>
  
  <ul class="footer__nav">
    <li class="nav__item">
      <h2 class="nav__title">Media</h2>

      <ul class="nav__ul">
        <li>
          <a href="/">Online</a>
        </li>

        <li>
          <a href="/">Print</a>
        </li>
            
        <li>
          <a href="/">Alternative Ads</a>
        </li>
      </ul>
    </li>
    
   
    
    <li class="nav__item">
      <h2 class="nav__title">Legal</h2>
      
      <ul class="nav__ul">
        <li>
          <a href="/">Privacy Policy</a>
        </li>
        
        <li>
          <a href="/">Terms of Use</a>
        </li>
      </ul>
    </li>
  </ul>
  
  <div class="legal">
    <p>&copy; 2022 Pottery Home. All rights reserved.</p>
    
    <div class="legal__links">
      <span>Made with <span class="heart">♥</span> from Argentina</span>
    </div>
  </div>
</footer>
  );
}

export default Footer