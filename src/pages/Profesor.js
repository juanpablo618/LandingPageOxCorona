import React from "react";
import Hero from "../components/Hero";
import BannerProfesor from "../components/BannerProfesor";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
import ReactLivestream from 'react-livestream'
import whatsappImage from "../images/icons8-whatsapp-48.png";
import IconWhatsapp2 from "../images/IconWhatsapp2.jpg";
import bannerOx from "../images/bannerOx.png";

import profesorHorarios from "../images/profesorHorarios.png";


//tipografia color COLOR ROJO: #C1272D

//<iframe width="560" height="315" src="https://www.youtube.com/embed/v7XUMfI1juM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
const Profesor = () => {
  return (
    <>

      
      <Hero hero="profesorFondo">

        <BannerProfesor>
        <br></br>
        <div>
        <br></br>
          <iframe width="600" height="315" src="https://www.youtube.com/embed/v7XUMfI1juM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
        </div>
        
        <div id="botonWhatsappYTexto">
          <img src={bannerOx} alt="horarios profesor" width="600" height="150" /><br></br>
        
          <img src={profesorHorarios} alt="horarios profesor" width="600" height="300" /><br></br>
        </div>
        </BannerProfesor>

      </Hero>

    </>
  );
};

export default Profesor;
