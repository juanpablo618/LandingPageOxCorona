import React from "react";
import { RoomContext } from "../context";
import emailjs from 'emailjs-com';
import Hero from "../components/Hero";
import Banner from "./Banner";
import facebookIcon from "../images/facebookIcon.png";
import instagramIcon from "../images/instagramIcon.png";
import phoneIcon from "../images/phoneIcon.png";



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
      <Hero>
        <Banner>
          <center>
            <p><img src={facebookIcon} alt="facebook CyO Turismo" width="20" height="20" />  Facebook: CyO-Turismo</p>
            <p><img src={instagramIcon} alt="Instagram CyO Turismo" width="20" height="20" />Instagram: cyoturismo</p>
            <p><img src={phoneIcon} alt="telefono CyO Turismo" width="20" height="20" />Teléfono: 0351-153220999</p>
          </center>
          <center>
            
            <form onSubmit={(e)=>this.sendEmail(e,this)}>
                <label htmlFor="from_name">Nombre y apellido:</label><br></br>
                <input  id="from_name" name="from_name" required="true" onChange={this.handleFields}/><br></br><br></br>

                <label htmlFor="from_name">Teléfono:</label><br></br>
                <input  id="telefono" name="telefono" required="true" onChange={this.handleFields}/><br></br><br></br>

                <label htmlFor="from_name">Email:</label><br></br>
                <input  id="email" name="email" required="false" onChange={this.handleFields}/><br></br><br></br>

                <label htmlFor="serviciosAdicionales">Mensaje:</label><br></br>
                <textarea name="serviciosAdicionales" id="serviciosAdicionales" rows="15" cols="50" onChange={this.handleFields}></textarea><br></br><br></br>

                <button type="submit" className="btn-primary">Enviar</button>
            </form>
          <br></br>
          </center>
        </Banner>
      </Hero>
    );
  }
}
 
export default ContactForm;