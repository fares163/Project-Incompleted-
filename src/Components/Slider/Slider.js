import React from 'react'
import styled from 'styled-components'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

let sliderItems = [

    {
    id: 1,
    img:"https://img.freepik.com/psd-premium/maquette-concept-hygiene-beaute_23-2148688774.jpg?w=1380",
    title: "ITS SUMMER!",
    desc: "GET THE STYLE YOU WANT WITH 50% OFF SALE", 
    bg: "f5fafd",
    cat:"gym",

    },

    {
    id: 2,
    img:"https://img.freepik.com/vecteurs-libre/banniere-beaute-bouteilles-cosmetiques-grenade_33099-2264.jpg?w=1380&t=st=1673870095~exp=1673870695~hmac=e740a8c15ec3370cf9334ea68d4b5809573dc91983f1a5c870248a297ccebd62",
    title: "GET YOUR PRESENT!",
    desc: "GET THE STYLE YOU WANT WITH 20% OFF SALE", 
    bg:"f5fafd",
    cat:"basketball",

    },

     {
    id: 3,
    img:"https://img.freepik.com/vecteurs-libre/produits-beaute-cosmetiques-pour-banniere-vente-maquillage-fond-neon-rougeoyant-paillettes-roses_33099-1429.jpg?w=1060&t=st=1673870335~exp=1673870935~hmac=63671aba118ffa0cbe86b86b199a8af3ee8ebd1874ad66d7b49ee10188df9590",
    title: "ITS WINTER!",
    desc: "GET THE STYLE YOU WANT WITH 40% OFF SALE", 
    bg:"f5fafd",
    cat:"football",
    

 },

    ];

const Slider = styled.div`
    height: 90%;
    width: 100%;
    display: flex;
    position: relative;
    overflow: hidden;
    align-items: center;
    margin-left: 0px;
    background-color: transparent;

    
    `
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: transparent;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props=> props.direction === "left" && "10px"};
    right: ${props=> props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.75;
    z-index: 2;
`
const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props=>props.slideIndex* -100}vw);
`
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: transparent;
`
const ImgContainer = styled.div`
    flex: 1;
    height: 90%;
    width: 100%;
`
const Image = styled.img`
    height: 100%;
    width: 100%;
    
` 

const Button = () => {

  return (
      
      <div>
        <button className ='custom-btn btn-3'>BUY NOW !</button>
      </div>

    )
  }
const Slider2 = () => {
      const [slideIndex, setSlideIndex] = useState(0);

      const handleClick = (direction) =>{
        if (direction==="left"){
            setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2);
          } else {
            setSlideIndex(slideIndex < 2 ? slideIndex +1 : 0);
      } 
    }
    const settings = {
        fade: true,
        speed: 2000,
        autoplaySpeed: 3000,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        pauseOnHover: false,
      };
  return (
    <Slider {...settings}>
        <Arrow direction="left" onClick={()=>handleClick("left")}>
            <FaChevronLeft />
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) =>(
         <Slide bg={item.bg} key={item.id}>
          <ImgContainer>
            <Image src={item.img}/>
          </ImgContainer>
         </Slide>
         ))}
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick("right")}>
            <FaChevronRight />
        </Arrow>
    </Slider>
    
  )
}

export default Slider2;