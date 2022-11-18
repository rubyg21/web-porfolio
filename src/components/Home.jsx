import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import foto from "../assets/foto.png";

const Home = () => {
  return (
    <div className="Home">
      <div className="Iam">
        <h1>
          HI I'm <br /> Rubens Galarraga <br /> Web Developer
        </h1>
        <p className="subtitulo">
          Frontend Developer / Javascript / Vue js / React/ Node js
        </p>

        <div>
          <NavLink to="/contact" className="contactme">
            Contact me
          </NavLink> <span></span>
          <NavLink to="/contact" className="cv">
            Download CV
          </NavLink>
        </div>
      </div>

      <div>
        <img className="fotoperfil" src={foto} alt="" />
      </div>
    </div>
  );
};

export default Home;
