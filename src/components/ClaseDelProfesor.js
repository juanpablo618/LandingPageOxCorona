import React from "react";
import Hero from "../components/Hero";
import BannerProfesor from "../components/BannerProfesor";
import bannerOx from "../images/bannerOx.png";
import profesorHorarios from "../images/profesorHorarios.png";
import { RoomContext } from "../context";
import { AppContext } from "../appContext";

class ClaseDelProfesor extends React.Component {

    static contextType = RoomContext;

    render(){
      const {
        videoURL,
      } = this.context;

  return (
    <>
      <Hero hero="profesorFondo">
        <BannerProfesor>
        <br></br>
          <div id="botonWhatsappYTexto">
            <img src={bannerOx} alt="horarios profesor" width="1200" height="150" /><br></br>
            <img src={profesorHorarios} alt="horarios profesor" width="1200" height="300" /><br></br><br></br>
          </div>
        <div>
          <div>
            <iframe id="chat" src="https://chat.chatzona.org/index.html#nick=&channel=DANZZAR.COM" width="350" height="600" frameborder="0" ></iframe>
          </div>
          <iframe width="850" height="600" src={videoURL} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

        </div>
        <br></br>
        <br></br>
        </BannerProfesor>
      </Hero>
    </>
  );
};
}

ClaseDelProfesor.contextType = AppContext;

export default ClaseDelProfesor;
