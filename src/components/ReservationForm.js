import React from "react";
import { RoomContext } from "../context";
import emailjs from 'emailjs-com';

class ReservationForm extends React.Component {

  constructor(props){
    super(props);
    this.state = {fIngreso: "", 
     fEgreso: "",
     from_name:"",
     cantPersonas: "", 
     serviciosAdicionales: "",
     email: "",
     telefono: "",
     keyRoom: this.props.keyRoom
    };
  }

    componentDidMount() {
    console.log("ACA:");
    console.log(this.props.keyRoom);
    }
  
  sendEmail(e,self) {
    e.preventDefault();

  //  console.log(e.target);
    console.log(e);

    console.log(self);
    emailjs.sendForm('gmail', 'template_czOUzjOc', e.target, 'user_58UT0Oeu5MmFFx61uWkmG')

      .then((result) => {
          console.log(result.text);
          alert("NOS PONDREMOS EN CONTACTO PRONTO, GRACIAS POR SU VISITA. Dudas: 0351-153220999.");  // display string message

      }, (error) => {
          console.log(error.text);
          alert("No fue posible el envio de su mensaje. Puede hacerlo a través de los teléfonos: 0351-153220999 / 0351-156744400.");  // display string message

      });


  }

 
  handleFields = e => this.setState({ [e.target.name]: e.target.value });
 
  static contextType = RoomContext;

  render() {

  return (
      
      <center>
        <form onSubmit={(e)=>this.sendEmail(e,this)}>
              <br></br>
        <label htmlFor="from_name">Nombre y apellido:</label><br></br>
        <input  id="from_name" name="from_name" required="true" onChange={this.handleFields}/><br></br><br></br>

        <label htmlFor="from_name">Teléfono:</label><br></br>
        <input  id="telefono" name="telefono" required="true" onChange={this.handleFields}/><br></br><br></br>

        <label htmlFor="from_name">Email:</label><br></br>
        <input  id="email" name="email" required="false" onChange={this.handleFields}/><br></br><br></br>

        <label htmlFor="fIngreso">Fecha de ingreso:</label><br></br>
        <input type="date" id="fIngreso" name="fIngreso" required="true" onChange={this.handleFields}/><br></br><br></br>

        <label htmlFor="fEgreso">Fecha de egreso:</label><br></br>
        <input type="date" id="fEgreso" name="fEgreso" required="true" onChange={this.handleFields}/><br></br><br></br>

        <label htmlFor="cantPersonas">Cantidad de personas</label><br></br>
        <input type="number" id="cantPersonas" name="cantPersonas" required="true" onChange={this.handleFields} min="1" max="20" /><br></br><br></br>

        <label htmlFor="keyRoom">Establecimiento</label><br></br>
        <input  id="keyRoom" name="keyRoom" required="true" value={this.props.keyRoom} readOnly="true" min="1" max="20" /><br></br><br></br>

        <label htmlFor="serviciosAdicionales">¿ Algun servicio adicional más ?</label><br></br>
        <textarea name="serviciosAdicionales" id="serviciosAdicionales" onChange={this.handleFields}></textarea><br></br><br></br>

        <button type="submit" className="btn-primary">Enviar</button>
      </form>
      <br></br>
      </center>
  
    );
  }
}
 
export default ReservationForm;