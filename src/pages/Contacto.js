import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomsContainer";
import mediosDePago from "../images/img-tarjetas.png";

const Contacto = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="CyO Turismo">

          <p>
          Cada cliente tiene diferentes métodos y prioridades de viaje. 
          Los agentes de CyO Turismo tienen varias áreas de experiencia para resolver cualquier necesidad de viaje. Si está planeando su próximo viaje de trabajo o placer, hacemos que su proceso de reservación sea fácil y agradable.
          ¡Llámenos hoy y comience a viajar! Contamos con:
          </p>

          <p>Alquiler de departamentos temporarios completamente amoblados en los principales barrios de la Ciudad de Córdoba. </p>
          <p>Cabaña familiar en las sierras.</p>
          <p>Hostería en las sierras de Córdoba.</p>          
          <p>Para todos aquellos huéspedes que lleguen por motivo de negocios, por estudios o por placer CyO Turismo buscará siempre la mejor opción para cada necesidad.</p>

          <p>Ubicación:</p>
          <p>Colón 610 (solo con aviso previo) - Córdoba - Argentina</p>

          <p>Email: cyoturismo@gmail.com</p>
          
          <p>Teléfono: 0351 - 153220999</p>

          <p>Aceptamos todos los medios de pago.</p>

          <img src={mediosDePago} alt="CyO Turismo" width="1000" height="150" /><br></br>
          
          <Link to="contactForm/" className="btn-primary">
            Hable con nosotros
          </Link>

          <br></br>
          <br></br>
          <Link to="/" className="btn-primary">
            Volver al inicio
          </Link>




        </Banner>
      </Hero>

    </>
  );
};

export default Contacto;
