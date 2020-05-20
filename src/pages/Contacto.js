import React from "react";
import Hero from "../components/Hero";
import Loading from "../components/Loading";
import Banner from "../components/Banner";
import ContactForm from "../components/ContactForm";
import whatsappImageJuan from "../images/contactoWhatsappJuan.png";
import DemoCarousel from "../components/DemoCarousel";

//import ContactoWhatsapp2 from "../images/ContactoWhatsapp2.png";

//tipografia color COLOR ROJO: #C1272D

//<iframe width="560" height="315" src="https://www.youtube.com/embed/v7XUMfI1juM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

const Contacto = () => {
  return (
    <>

      <DemoCarousel>


      <Banner>
         <div id="botonWhatsappYTexto">
            <a target="_blank" href="https://web.whatsapp.com/send?phone=+5493516237154&text=Hola!%20Quiero%20informacion%20sobre%20ClasesDeBaileDanzzar">
            <img src={whatsappImageJuan} alt="ox landing page" width="204" height="66" />
            </a>
        </div>

        </Banner>

      </DemoCarousel>
      <Loading></Loading>
      <ContactForm>

      </ContactForm>

    </>
  );
};

export default Contacto;
