import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./style.css";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const Carts = useSelector((state) => state.allCart);
  console.log(Carts);
  return (
    <>
      <Navbar
        className="header"
        style={{ height: "60px", background: "black", color: "white" }}
      >
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-2">
            <h3>E-commerce</h3>
          </NavLink>
          <NavLink to="/Cart" className="text-decoration-none text-light mx-2">
            <div id="ex4">
              <span
                className="pl fa-stack fa-2x "
                data-count={Carts.carts.length}
              >
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
            </div>
          </NavLink>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
