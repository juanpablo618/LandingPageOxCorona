import React from "react";
import axios from "axios"; 
import { RoomContext } from "../context";
import emailjs from 'emailjs-com';

class ReservationForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {fIngreso: "", 
     fEgreso: "",
     cantPersonas: "", 
     serviciosAdicionales: "",
     keyRoom: this.props.keyRoom
    };
  }

    componentDidMount() {
    console.log("ACA:");
    console.log(this.props.keyRoom);
    }
  
  handleForm = e => {
    axios.post(
        "https://localhost:8080/api/hola", 
        this.state, 
        {headers: {"Accept": "application/json"}}
      )
      .then(function (response) {
        
        // access response.data in order to check formcarry response
        if(response.data.success){
          // handle success
        } else {
          // handle error
          console.log(response.data.message);
        }
 
      })
      .catch(function (error) {
        console.log(error);
      });
    
    e.preventDefault();
  }


  sendEmail(e) {
    e.preventDefault();

    console.log(this.handleFields);
    
    emailjs.sendForm('gmail', 'template_czOUzjOc', e.target, 'user_58UT0Oeu5MmFFx61uWkmG')


      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

 
  handleFields = e => this.setState({ [e.target.name]: e.target.value });
 
  static contextType = RoomContext;

  render() {

  return (
      
      <center>
        <form onSubmit={this.handleForm}>
              <br></br>
        <label htmlFor="fIngreso">Fecha de ingreso:</label><br></br>
        <input type="date" id="fIngreso" name="fIngreso" required="true" onChange={this.handleFields}/><br></br><br></br>

        <label htmlFor="fEgreso">Fecha de egreso:</label><br></br>
        <input type="date" id="fEgreso" name="fEgreso" required="true" onChange={this.handleFields}/><br></br><br></br>

        <label htmlFor="cantPersonas">Cantidad de personas</label><br></br>
        <input type="number" id="cantPersonas" name="cantPersonas" required="true" onChange={this.handleFields} min="1" max="20" /><br></br><br></br>

        <label htmlFor="serviciosAdicionales">¿ Algun servicio adicional más ?</label><br></br>
        <textarea name="serviciosAdicionales" id="serviciosAdicionales" onChange={this.handleFields}></textarea><br></br><br></br>

        <button type="submit" className="btn-primary">Enviar</button>
      </form>
      </center>
  
    );
  }
}
 
export default ReservationForm;