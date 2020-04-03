import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";

import StyledHero from "../components/StyledHero";
export default class SingleRoom extends Component {
  
  constructor(props) {
    super(props);
    console.log(this.props);
    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg: defaultBcg
    };
  }
  static contextType = RoomContext;

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3> no se pudo encontrar la habitación...</h3>
          <Link to="/rooms" className="btn-primary">
            volver a los alojamientos
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    // eslint-disable-next-line
    const [main, ...defaultImages] = images;
    
    return (
      <>
        <StyledHero img={images[0] || this.state.defaultBcg}>
          <Banner title={`${name} `}>
            <Link to="/rooms" className="btn-primary">
              volver a los alojamientos
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Detalles</h3>
              <p>{description}</p>
            <p>
              <Link to={`/reservations/${room.slug}`}  className="btn-primary">
              Solicitar Reserva
              </Link>

            </p>
            </article>

            <article className="info">
              <h3>info</h3>
              <h6>Precio : ${price}</h6>
              <h6>
                maxima capacidad :
                {capacity > 1 ? `${capacity} personas` : `${capacity} Personas`}
              </h6>
              <h6>{pets ? "aceptamos mascotas" : "no aceptamos mascotas"}</h6>
              <h6>{breakfast && "desayuno gratis incluido"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras </h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
