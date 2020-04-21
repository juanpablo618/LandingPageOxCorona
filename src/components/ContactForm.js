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
    this.state = {
     from_name:"",
     email: "",
     telefono: "",
     pais:"",
     keyRoom: this.props.keyRoom
    };
  }

    componentDidMount() {

    console.log(this.props.keyRoom);
    }

  sendEmail(e,self) {
    e.preventDefault();
    console.log(e.target);
  emailjs.sendForm('gmail', 'template_77X8UDWS', e.target, 'user_CxdcpQWVYQ1kSPRwKoOKm')

      .then((result) => {
          console.log(result.text);
          alert("NOS PONDREMOS EN CONTACTO PRONTO, GRACIAS POR SU VISITA. Dudas: 0351-156237154. danzz.ar.class@gmail.com");  // display string message

      }, (error) => {
          console.log(error.text);
          alert("No fue posible el envio de su mensaje. Puede hacerlo a través de los teléfonos: 0351-156237154. O también danzz.ar.class@gmail.com");  // display string message

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
                <label id="fontLighterLabel" htmlFor="from_name">Nombre Y Apellido:</label>
                <input  id="inputForm" name="from_name" required="true" onChange={this.handleFields}/><br></br>

                <label id="fontLighterLabel" htmlFor="from_name">Email:</label>
                <input  id="inputForm" name="email" required="true" onChange={this.handleFields}/><br></br>

                <label id="fontLighterLabel" htmlFor="from_name">Teléfono:</label>
                <input  id="inputForm" name="telefono" required="true" onChange={this.handleFields}/><br></br>

                <label id="fontLighterLabel" htmlFor="from_name">País:</label>
                <input  id="inputForm" name="pais" required="true" onChange={this.handleFields}/><br></br><br></br>


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
