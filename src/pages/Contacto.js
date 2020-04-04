import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";

import whatsappImage from "../images/icons8-whatsapp-48.png";


const Contacto = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner>

          <p id="firstText"> No dejes tu negocio en cuarentena! </p>

            <br></br>
          <p id="fontLighter">Nos adaptamos a la situación y creamos planes para tu negocio en estos momentos!</p>
          <br></br>
          <Link to="contactForm/" className="btn-whatsapp">
          Consultános!
          </Link>

          <img src={whatsappImage} alt="ox landing page" width="30" height="30" /><br></br>


          <br></br>

        <p id="firstText">CHARLAS GRATUITAS ONLINE
          SOBRE MARKETING 
          DIGITAL,TECNOLOGÍAS
          DISEÑO Y VENTAS!
        </p>
        <br></br>
        <p id="fontLighter">Con material incluido, más plantillas de trabajo de REGALO!</p>
        <br></br>
        
        <Link to="contactForm/" className="btn-primaryInscripcion">
          Quiero inscribirme!
        </Link>

        <br></br>

        <br></br>

          <p>Con todo lo que necesitas saber para integrarte en el mundo de las tecnologías!</p>

          
          <br></br>
          <br></br>
          <Link  className="btn-primaryMasInfoCharlas">
          Más info sobre las charlas!
        </Link>


        </Banner>
      </Hero>

    </>
  );
};

export default Contacto;
