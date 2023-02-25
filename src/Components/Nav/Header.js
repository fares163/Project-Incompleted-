import React, { useRef } from "react";

import { Container, Row, Col } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import logo1 from '../../assets/logo1.png'
import logo2 from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import Bag from '../../assets/Bag.png'
import connexion from '../../assets/connexion.png'
import logo from '../../assets/logo.png'


const navLinks = [
  {
    path: "/",
    display: "Acceuil",
  },
  {
    path: "#",
    display: "Produits",
  },
  {
    path: "#",
    display: "À propos",
  },

  {
    path: "#",
    display: "Formules",
  },
  {
    path: "#",
    display: "Nous contacter",
  },
  {
    path: "#",
    display: "Recrutement",
  },
];

const Header = () => {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header className="header">
      {/* ============ header top ============ */}
      <div className="header__top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header__top__left">
              <span>
                <Link to='/'>
                 <img src={logo} />
                 </Link>
                </span>
              </div>
            </Col>

            <Col lg="5" md="2" sm="5">
              <div className="header__top__center">
                <span className="header__top__Image">
                 <img src={logo1}/>
                </span>
                <span className="header__top__Image">
                 <img src={logo2}/>
                </span>
                <span className="header__top__Image">
                 <img src={logo3}/>
                </span>
              </div>
            </Col>

          

            <Col lg="1" md="5" sm="6">
              <div className="header__top__right d-flex align-items-center justify-content-end gap-3">
                <Link to="/register" className=" d-flex align-items-center gap-1">
                <img src={connexion} className="Image"/>
                  <i class="ri-login-circle-line"></i> Enregistrer
                </Link>

                <Link to="/login" className=" d-flex align-items-center gap-1">
                <img src={connexion}  className="Image"/>
                  <i class="ri-user-line"></i> Connexion
                </Link>

                <Link to="#" className=" d-flex align-items-center gap-1">
                <img src={Bag}  className="Image"/>
                  <i class="ri-user-line"></i> Panier
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
       
      

      {/* ========== main navigation =========== */}

      <div className="main__navbar">
        <Container>
          <div className="navigation__wrapper d-flex align-items-center justify-content-between">
            <span className="mobile__menu">
              <i class="ri-menu-line" onClick={toggleMenu}></i>
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? "nav__active nav__item" : "nav__item"
                    }
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav__right">
              <div className="search__box">
                <input type="text" placeholder="Search" />
                <span>
                  <i class="ri-search-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Header;
