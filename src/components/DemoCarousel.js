import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 
import banner1 from "../images/Banner1.png";
import banner3 from "../images/Banner3.png";

class DemoCarousel extends Component {
    render() {
        return (
            <Carousel infiniteLoop useKeyboardArrows autoPlay >
                <div>
                    <img src={banner1} />
                </div>
                <div>
                    <img src={banner3} />
                </div>
                <div>
                    <img src={banner1} />
                </div>
                <div>
                    <img src={banner3} />
                </div>
                
            </Carousel>
        );
    }
};
 
export default DemoCarousel;
 