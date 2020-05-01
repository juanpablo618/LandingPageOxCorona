import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Hero from "../components/Hero";
import bannerOx from "../images/bannerOx.png";
import profesorHorarios from "../images/profesorHorarios.png";
import BannerProfesor from "../components/BannerProfesor";

export default class PlayerExample extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      playerSource: 'https://www.youtube.com/embed/v7XUMfI1juM',
      inputVideoUrl: 'https://www.youtube.com/embed/v7XUMfI1juM',
      inputPassword: ''
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleValueChangeForPassword = this.handleValueChangeForPassword.bind(this);
    
    this.updatePlayerInfo = this.updatePlayerInfo.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.playerSource !== prevState.playerSource) {
     // this.player.load();
    }
  }

  handleValueChange(e) {
    const { value } = e.target;
    this.setState({
      inputVideoUrl: value
    });
  }

  handleValueChangeForPassword(e) {
    const { value } = e.target;
    this.setState({
      inputPassword: value
    });
  }
  


  updatePlayerInfo() {
    const { inputVideoUrl } = this.state;
    const { inputPassword } = this.state;
    
    if(inputPassword === "juan"){  
        this.setState({
          playerSource: inputVideoUrl
        });
    }
  }

  render() {
    return (
      <Hero hero="profesorFondo">
        <BannerProfesor>
                
              <br></br>
                  <div id="botonWhatsappYTexto">
                    <img src={bannerOx} alt="horarios profesor" width="1200" height="150" /><br></br>
                    <img src={profesorHorarios} alt="horarios profesor" width="1200" height="300" /><br></br><br></br>
                  </div>
                
                <div>
                <div>
                <iframe id="chat" src="https://chat.chatzona.org/index.html#nick=&channel=DANZZAR.COM" width="350" height="600" frameborder="0" ></iframe>
              </div>
              
                <iframe width="850" height="600" src={this.state.playerSource} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>

                <div className="docs-example">
                  <Form>
                    <FormGroup>
                      <Label for="inputVideoUrl" id="labelPlayer">Url Del Video</Label>
                      <Input
                        name="inputVideoUrl"
                        id="inputVideoUrl"
                        value={this.state.inputVideoUrl}
                        onChange={this.handleValueChange}
                      />
                      <Label for="inputVideoUrl" id="labelPlayer">Password</Label>
                      
                      <Input
                        name="inputPassword"
                        id="inputPassword"
                        value={this.state.inputPassword}
                        onChange={this.handleValueChangeForPassword}
                      />

                    </FormGroup>
                    <FormGroup>
                      
                      <Button className="btn-primaryInscripcion-Left" type="button" onClick={this.updatePlayerInfo}>
                        Actualizar
                      </Button>

                      

                    </FormGroup>
                  </Form>
                </div>
              </div>
      </BannerProfesor> 
      </Hero>
    );
  }
}