import React, {useState} from "react";
import {useLocalStorage} from '../hooks/useLocalStorage'
import { RoomContext } from "../context";

function Search(){

const [text, setText] = useLocalStorage('text','https://www.youtube.com/embed/v7XUMfI1juM')

    return (
      <div className="search-container">

          <p>Si no tiene uno, puede usar el de canal 12: https://www.youtube.com/embed/v7XUMfI1juM</p>
          <br></br>
          <input id="inputForm" type="text" 
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button  id="fontLighterLabelBoton" type="submit" className="btn-primaryInscripcion">TRANSMITIR !</button>
      </div>
      )
 }


export default Search