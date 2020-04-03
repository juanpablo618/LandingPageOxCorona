import React, { Component } from "react";
import { FaCoffee, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCoffee />,
        title: "Profesionalidad",
        info:
          "Contamos con Recursos Humanos capacitados y con vocación de servicio, trabajando en todo momento para cumplir con las expectativas tanto del propietario como así también de los huéspedes. Ofreciendo respuestas rápidas y a la medida de cada situación para que la estadía sea placentera."
      },
      {
        icon: <FaHiking />,
        title: "Atención personalizada",
        info:
          "Nuestros operadores están 24/7 conectados para brindarte el mejor servicio"
      },
      {
        icon: <FaShuttleVan />,
        title: "Servicio de traslado",
        info:
          "Trabajamos con empresas de traslado de pasajeros, podemos buscarte en el aeropuerto o en la terminal. Estamos dispuestos a ayudarte en todo momento"
      },
      {
        icon: <FaBeer />,
        title: "Alojamientos con todas las comodidades y en las mejores ubicaciónes de Córdoba.",
        info:
          "Actualmente contamos con disponibilidad en todos los valles de Córdoba y también en la Capital."
      }
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="servicios" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
