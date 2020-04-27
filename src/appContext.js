import React from "react";

export const AppContext = React.createContext(
{
  videoURL : 'https://www.youtube.com/embed/v7XUMfI1juM',
  cambiarValorUrl: () => {},

});

export class AppContextProvider extends React.Component{
  constructor(props){
    super(props);

    this.state = {
        videoURL : 'https://www.youtube.com/embed/v7XUMfI1juMPEDRO',
    };

    this.cambiarValorUrl = this.cambiarValorUrl.bind(this);
  }

  cambiarValorUrl(){
  console.log("PASA ALGoOO");
  this.setState({ videoURL : 'parametro'});
}

  render(){
    const {
         children,
    } = this.props;
    const {
      videoURL,
    } = this.state;

    return (
        <AppContext.Provider
            value={{
              videoURL,
              cambiarValorUrl: this.cambiarValorUrl,
            }}
            >
              {children}
            </AppContext.Provider>
    );

  }
}

export const AppContextConsumer = AppContext.Consumer;