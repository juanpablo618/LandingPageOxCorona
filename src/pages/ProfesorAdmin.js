import React from "react";
import Hero from "../components/Hero";
import SearchFinal from "../components/SearchFinal";
import { AppContext } from "../appContext";
import PlayerExample from "../components/PlayerExample";

class ProfesorAdmin extends React.Component {
  render(){
      return (
        <>
                <PlayerExample />
        </>
      );
  }  
};

ProfesorAdmin.contextType = AppContext;

export default ProfesorAdmin;
