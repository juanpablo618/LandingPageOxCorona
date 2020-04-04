import React from "react";
import { RoomContext } from "../context";
import emailjs from 'emailjs-com';
import Hero from "../components/Hero";
import Banner from "./Banner";

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
      <Hero hero="roomsHeroRobot">
        <Banner>
          <center>
            
            <form onSubmit={(e)=>this.sendEmail(e,this)}>

            <p id="firstText">Quiero inscribirme !</p>
            <br></br>
            <p id="fontLighter">Es fácil y solo en 3 pasos !</p><br></br>
            
            <div>
                <div id="completaIzq">
                    <p id="firstTextCompleta">1. Completá</p>
                </div>
                <div id="completaDerecha">
                  <p id="fontLighterElSiguiente">el siguiente formulario</p>
                </div>
            </div>
                  <br></br>
                  <br></br>
                <label id="fontLighterLabelParaNombre" htmlFor="from_name">Nombre y apellido:</label>
                <input  id="from_name" name="from_name" required="true" onChange={this.handleFields}/><br></br>

                <label id="fontLighterLabel" htmlFor="from_name">Email:</label>
                <input  id="email" name="email" required="false" onChange={this.handleFields}/><br></br>

                <label id="fontLighterLabel" htmlFor="from_name">Teléfono:</label>
                <input  id="telefono" name="telefono" required="true" onChange={this.handleFields}/><br></br>

                <label id="fontLighterLabel" htmlFor="from_name">Empresa:</label>
                <input  id="empresa" name="empresa" required="false" onChange={this.handleFields}/><br></br><br></br>
                

                <div >  
                  <div id="izquierdaCharlas">
                  <label id="fontLighterCharlas" htmlFor="serviciosAdicionales">Charlas:</label><br></br>
                  </div>
                  
                  <div id="derechaCharlas">
                      <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                      <label for="vehicle1"> Diseño Gráfico</label><br></br>
                      <input type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                      <label for="vehicle2"> Marketing y desarrollos webs</label><br></br>
                  </div>
                </div>
                <br></br><br></br>
                <br></br><br></br>
                <br></br><br></br>
                <br></br><br></br>

                <p id="fontLighter" > También realizarenos un <strong>SUPER SORTEO</strong> con todos los participantes de la charla !</p> 

                <p id="fontLighter">Para participar del sorteo escribí el nombre de la persona que compartió un mensaje o posteo de OX y vos lo pudiste ver !</p>

                <input  id="referido" name="referido" required="false" onChange={this.handleFields}/><br></br>

                <p id="fontLighterSoloDebenCompletar">solo deben completar este campo los que quieran participar del sorteo</p>

                <p id="fontLighter">Selecciona enviar formulario para continuar</p>

                <button type="submit" className="btn-primaryInscripcion">Enviar</button>
            
            </form>
          <br></br>
          </center>
        </Banner>
      </Hero>
    );
  }
}
 
export default ContactForm;