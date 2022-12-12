import React from 'react';
import "./hero.css";

function Hero() {
  return (
    <><div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
              <div className="carousel-item active">
                  <img src="https://www.susiewatsondesigns.co.uk/media/wysiwyg/Category_Carousel/Pottery/Table-top/category-carousel-table-top-spring-_AC_310119_05_.jpg" className="d-block w-100" alt="christmass" />
              </div>
              <div className="carousel-item">
                  <img src="https://www.susiewatsondesigns.co.uk/media/wysiwyg/Category_Carousel/Pottery/Mugs/Autumn-Pottery-Collection-_AC_200220_03_.jpg" className="d-block w-100" alt="plates" />
              </div>
              <div className="carousel-item">
                  <img src="https://www.susiewatsondesigns.co.uk/media/wysiwyg/Category_Carousel/Christmas/Pottery/Christmas-Plates-_AC_191120_19_.jpg" className="d-block w-100" alt="table" />
              </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
          </button>
      </div></>
  );
}

export default Hero;