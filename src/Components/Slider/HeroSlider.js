import React from "react";

import Slider from "react-slick";
import { Container } from "reactstrap";
import { Link } from "react-router-dom";

import "./Slider.css";

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 2000,
    infinite: true,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };
  return (
    <Slider {...settings} className="hero__slider">
      <div className="slider__item slider__item-01 mt0">
        <Container>
          <div className="slider__content ">
            <h4 className="text-light mb-3">""</h4>
            <h1 className="text-light mb-4">
              La beauté de l'année ne se fera pas par hasard, 
              elle sera le rendu des couleurs d'efforts que vous et 
              les personnes de votre entourage mettrez dans votre vie de chaque jour.</h1>
            <button className="btn reserve__btn mt-4">
              <Link to="/cars">Décourvir Nos Produis !</Link>
            </button>
          </div>
        </Container>
      </div>

      

    
    </Slider>
  );
};

export default HeroSlider;
