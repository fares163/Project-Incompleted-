import React from 'react'
import './Ann.css';
import livraison from "../../assets/livraison.png"
import "./Ann3.css"
import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";


 const Announcment3 = () => {
  return (
<div class="marqueeeet">
  <div class="marqueeTexttt">
    
  
              <div className="d-flex gap-3">
                <Link to="#" className=" d-flex align-items-center gap-1">
                
                  <i class="ri-login-circle-line"></i> <p>Qui somme nous?</p>
                </Link>

                <Link to="#" className=" d-flex align-items-center gap-1">
                
                <i class="ri-login-circle-line"></i> <p>Nos Produits</p>
                </Link>

                <Link to="#" className=" d-flex align-items-center gap-1">
                
                  <i class="ri-user-line"></i> <p>Livraison</p>
                </Link>

                <Link to="#" className=" d-flex align-items-center gap-1">
                
                  <i class="ri-user-line"></i> <p>Contact</p>
                </Link>
              </div>
              
           
  </div>
</div>


  )
}

export default Announcment3;