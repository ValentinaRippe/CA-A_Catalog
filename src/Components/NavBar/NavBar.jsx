import React from "react";
import { Link, Outlet } from "react-router-dom";
/* import "../Styles/NavBar.css"; */
import logo from "../../Assets/svg/logocañanegro.svg";
import cart from "../../Assets/svg/Cart.svg";
import './NavBar.css'

export function NavBar() {
  return (
    <div>
      <div className="NavBar">
        <div>
          <Link className="link" to="/">
            <img className="logo_navbar" src={logo} alt="logo" />
          </Link>
          <Link to='/cart'><img className="cart" src={cart} alt="logo" /></Link>
        </div>
      </div>
      <section>
        <Outlet />
      </section>
    </div>
  );
}
