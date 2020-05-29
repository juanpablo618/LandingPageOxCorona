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
      playerSource: 'https://www.youtube.com/embed/qWf-FPFmVw0',
      inputVideoUrl: 'https://www.youtube.com/embed/qWf-FPFmVw0',
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

              <div class="videoStrem">
                <iframe id="videoStrem" src={this.state.playerSource} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true"></iframe>
              </div>

    );
  }
}
