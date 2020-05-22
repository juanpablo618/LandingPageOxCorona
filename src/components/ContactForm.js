import React from "react";
import { RoomContext } from "../context";
import emailjs from 'emailjs-com';
import Hero from "../components/Hero";
import imgCupo from "../images/cupolimitado.png";
import Banner from "../components/Banner";
import whatsappImageJuan from "../images/contactoWhatsappJuan.png";


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

        <div id="bannerNeni">
          <div class="container">

            <form onSubmit={(e)=>this.sendEmail(e, this)}>

            <div id="cabeceraFormulario">
              <p id="firstText">Completa tus datos</p>
            </div>
            <div>
              <p id="fontLighterNeni">INSCRIBITE YA!</p><br></br><br></br>
            </div>
            <div id="formulario">
                <br></br><br></br><br></br><br></br><br></br>
                <div class="row">
                  <div class="col-25">
                    <label id="fontLighterLabel" htmlFor="from_name">Nombre Y Apellido:</label>
                  </div>
                  <div class="col-25">
                    <input  id="inputForm" name="from_name" required="true" onChange={this.handleFields}/><br></br>
                  </div>
                </div>
                <div class="row">
                  <div class="col-25">
                    <label id="fontLighterLabel" htmlFor="from_name">Email:</label>
                  </div>              
                  <div class="col-25">
                    <input  id="inputForm" name="email" required="true" onChange={this.handleFields}/><br></br>
                  </div>                
                </div>
                
                <div class="row">
                  <div class="col-25">
                    <label id="fontLighterLabel" htmlFor="from_name">Teléfono:</label>
                  </div>
                  <div class="col-25">
                    <input  id="inputForm" name="telefono" required="true" onChange={this.handleFields}/><br></br>
                  </div>
                </div>

                <div class="row">
                <div class="col-25">

                  <label id="fontLighterLabel" htmlFor="from_name">País:</label>
                  </div>
                  <div class="col-25">
                    <input  id="inputForm" name="pais" required="true" onChange={this.handleFields}/><br></br><br></br>
                  </div>
                </div>
                <div class="row">
                <button  id="fontLighterLabelBoton" type="submit" className="btn-primaryInscripcion">ENVIAR</button>
                  </div>
            </div>
            </form>
            </div>


          <br></br>

        </div>
        <Banner>
         <div id="botonWhatsappYTexto">
            <a target="_blank" href="https://web.whatsapp.com/send?phone=+5493516237154&text=Hola!%20Quiero%20informacion%20sobre%20ClasesDeBaileDanzzar">
            <img src={whatsappImageJuan} alt="ox landing page" width="204" height="66" />
            </a>
        </div>

        </Banner>
      </Hero>

    );
  }
}

export default ContactForm;
