import React from "react";
import Hero from "../components/Hero";
import SearchFinal from "../components/SearchFinal";
import { AppContext } from "../appContext";

class ProfesorAdmin extends React.Component {
  render(){

    const{
      cambiarValorUrl,
      videoURL,
    } = this.context;

      return (
        <>
           
                <SearchFinal>
                </SearchFinal>
                
                <a onClick={cambiarValorUrl} id="fontLighterLabelBoton" type="submit" className="btn-primaryInscripcion">TRANSMITIR !</a>
          
        </>
      );
  }  

};

ProfesorAdmin.contextType = AppContext;

export default ProfesorAdmin;
