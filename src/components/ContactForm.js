import React from "react";
import { RoomContext } from "../context";
import emailjs from 'emailjs-com';
import Hero from "../components/Hero";
import Banner from "./Banner";
import imgNeni from "../images/BPMprofe.jpg";
import imgCupo from "../images/cupolimitado.png";

class ContactForm extends React.Component {

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

    console.log(this.props.keyRoom);
    }

  sendEmail(e,self) {
    e.preventDefault();

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
      <Hero hero="formInscripcion">
        <div id="imgNeni">
           <img src={imgNeni} alt="profesor" id="imagenProfe"  width="80%" height="90%"/><br></br>
        </div>
        <div id="bannerNeni">
          <center>
            <form onSubmit={(e)=>this.sendEmail(e, this)}>

            <div id="cabeceraFormulario">
              <p id="firstText">Completa tus datos</p><br></br>
              <p id="fontLighterNeni">INSCRIBITE YA!</p><br></br>

            </div>
            <div id="cupo">
              <img src={imgCupo} alt="profesor" width="80%" height="80%"/>
            </div>
            <div id="formulario">
                <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                <label id="fontLighterLabel" htmlFor="from_name">Nombre:</label>
                <input  id="inputForm" name="from_name" required="true" onChange={this.handleFields}/><br></br>

                <label id="fontLighterLabel" htmlFor="from_name">Email:</label>
                <input  id="inputForm" name="email" required="false" onChange={this.handleFields}/><br></br>

                <label id="fontLighterLabel" htmlFor="from_name">Teléfono:</label>
                <input  id="inputForm" name="telefono" required="true" onChange={this.handleFields}/><br></br>

                <label id="fontLighterLabel" htmlFor="from_name">País:</label>
                <input  id="inputForm" name="empresa" required="false" onChange={this.handleFields}/><br></br><br></br>


                <button type="submit" className="btn-primaryInscripcion">ENVIAR</button>
            </div>
            </form>
            </center>
          <br></br>

        </div>
      </Hero>
    );
  }
}

export default ContactForm;
