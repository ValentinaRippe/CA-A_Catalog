import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../Assets/svg/logorosaclaro.svg";
import whatsApp from "../../Assets/svg/whatsAppfooter.svg";
import instagram from "../../Assets/svg/instagramfooter.svg";
import github from "../../Assets/svg/github.svg";
import "./Footer.css";
export function Footer() {
  return (
    <div>
      <section>
        <Outlet />
      </section>
      <nav className="Footer">
        <div className="container_footer">
          <div className='items_footer'>
            <p>CAÑA REDES</p>
            <div >
              <img className="logo_instagram" src={instagram} alt="" width='25px' />
              <img className="logo_whatsApp" src={whatsApp} alt="" width='25px'/>
            </div>
          </div>
          <img className="logo_footer" src={logo} alt="" />
          <div className='git_footer'>
            <img className="logo_github" src={github} alt="" />
            <p>
              Desarrolado por <br /> @Valentina
            </p>
          </div>
        </div>
      </nav>
    </div>
  );
}
