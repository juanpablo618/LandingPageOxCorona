import React, { Component } from 'react';
import {  Form } from 'reactstrap';
import Hero from "../components/Hero";
import bannerOx from "../images/bannerOx.png";
import profesorHorarios from "../images/profesorHorarios.png";
import BannerProfesor from "../components/BannerProfesor";
//import firebase from 'firebase/app';
//import  {DB_CONFIG}  from '../config/config';

import firebase from '../config/config';


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

    //console.log(firebase.name);
    //console.log(firebase.database());
    //var database = firebase.database();
    //var ref = database.ref('/videos');
    //console.log("REF: "+ref);

    //ref.on('value', gotData, errData);

    //function gotData(data) {
      //console.log(data.val());

      //console.log("VINO A GOTDATA");

    //}

    //function  errData(err) {
    //  console.log('Error: '+err);
    //}
  }


componentDidMount(){
  var database = firebase.database();
  var ref = database.ref('/videos');

   ref.on('value', snap => {
    console.log("ACAA"+ JSON.stringify(snap.val()));
    console.log("ACAA PARSE"+ JSON.parse(JSON.stringify(snap.val())));

var obj = JSON.parse(JSON.stringify(snap.val()));
console.log("URL DEL VIDEO: "+obj["4pO74zbQa2Qfaft0tl4i"].urlDelVideo);

      this.setState({
        playerSource: obj["4pO74zbQa2Qfaft0tl4i"].urlDelVideo
      });
    });

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
                  <div id="bannerProfeWeb">
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

                  </Form>
                </div>
              </div>
      </BannerProfesor>
      </Hero>
    );
  }
}
