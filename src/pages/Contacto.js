import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
import ReactLivestream from 'react-livestream'
import whatsappImage from "../images/icons8-whatsapp-48.png";
//import ContactoWhatsapp2 from "../images/ContactoWhatsapp2.png";




//tipografia color COLOR ROJO: #C1272D

//<iframe width="560" height="315" src="https://www.youtube.com/embed/v7XUMfI1juM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
const Contacto = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner>
        
         <div id="botonWhatsappYTexto">
            <a id="letrasBotonWhatsapp" target="_blank" href="https://web.whatsapp.com/send?phone=+5493516237154&text=Hola!%20Quiero%20informacion%20sobre%20ClasesDeBaileDanzzar">CONTACTO WHATSAPP</a>
          <img src={whatsappImage} alt="ox landing page" width="40" height="40" /><br></br>
        </div>
        
        </Banner>
      </Hero>

    </>
  );
};

export default Contacto;
