import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class DemoCarousel extends Component {
    render() {

        return (

            <Carousel infinite={true}
            autoPlay={true}
            autoPlaySpeed={1000}>
                <div>
                    <img src="../images/Banner1.png" />
                </div>
                <div>
                    <img src="../images/Banner3.png" />
                </div>
            </Carousel>
        );
    }
});

ReactDOM.render(<DemoCarousel />, document.querySelector('.demo-carousel'));
