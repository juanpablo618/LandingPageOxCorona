import React from "react";
import Hero from "../components/Hero";
import BannerProfesor from "../components/BannerProfesor";
import bannerOx from "../images/bannerOx.png";
import profesorHorarios from "../images/profeHorarios.png";
import { RoomContext } from "../context";
import { AppContext } from "../appContext";
import PlayerExample from "../components/PlayerExample";

class ClaseDelProfesor extends React.Component {

      static contextType = RoomContext;
    render(){
      const {
        videoURL,
      } = this.context;



  return (
    <>
      <Hero hero="profesFondo">
        <BannerProfesor>
          <br></br>
          <div id="bannerProfeWeb">
            <img src={bannerOx} id="danzarBanner"/><br></br>
            <img src={profesorHorarios} id="horarios" /><br></br><br></br>
          </div>
          <PlayerExample/>

          <div class="chatSala">
            <iframe width="900" height="450" src="https://chat.chatzona.org/index.html#nick=&channel=DANZZAR.COM" frameborder="0" ></iframe>
          </div>

        </BannerProfesor>
      </Hero>
    </>
  );
};
}

ClaseDelProfesor.contextType = AppContext;

export default ClaseDelProfesor;
