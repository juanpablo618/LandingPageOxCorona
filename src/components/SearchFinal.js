import React from "react";
import { AppContext} from "../appContext";

class SearchFinal extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      urlDelVideo : ''
    };
}

handleFields = e => this.setState({ [e.target.name]: e.target.value });

render() {

    const{
      cambiarValorUrl,
      videoURL,
    } = this.context;

    return (
      <div className="search-container">

          <p>Si no tiene uno, puede usar el de canal 12: https://www.youtube.com/embed/v7XUMfI1juM</p>
          <br></br>
          <input id="inputForm" name="urlDelVideo" type="text" 
            value={videoURL}
            onClick={this.handleFields}
          />
       <button onClick={cambiarValorUrl} id="fontLighterLabelBoton" type="submit" className="btn-primaryInscripcion">TRANSMITIR !</button>
      </div>
      );
    }   
 }

 SearchFinal.contextType = AppContext;

 export default SearchFinal;