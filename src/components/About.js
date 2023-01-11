import React from "react";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import meter4 from "../assets/img/meter4.svg";
import meter5 from "../assets/img/meter5.svg";
import meter6 from "../assets/img/meter6.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const About = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="about" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="about-bx wow zoomIn" style={{ color: "gainsboro" }}>
                            <h2>Vertex Solutions</h2>
                            <p>Vertex Solutions is a smart, growing company dedicated to winning you over with real personalized service.
                                Vertex Solutions is emerging as one of the leaders in transportation logistics and technology solutions.
                                Our vision is clear, our business plan sound and our management team focused.
                                Independent owners are the key to our value advantage. Our global services provided through our network of qualified independent business owners, each with a personal investment in the total satisfaction of our customers. Our strategically aligned value structure creates the flexibility necessary to adjust when required and the reliability in our service to keep you as a customer.
                                We value our people as our greatest assets. We are committed to giving them the tools necessary, including customer driven technology, to provide the highest level of customer attention in the transportation logistics industry.
                                Let Vertex Solutions help you succeed.</p>
                            {/* <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme about-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5 style={{'font-size': '15px'}}>LESS THAN TRUCKLOAD</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5 style={{'font-size': '15px'}}>FULL TRUCKLOAD</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5 style={{'font-size': '15px'}}>RAIL</h5>
                            </div>
                            <div className="item">
                                <img src={meter4} alt="Image" />
                                <h5 style={{'font-size': '15px'}}>AIR</h5>
                            </div>
                            <div className="item">
                                <img src={meter5} alt="Image" />
                                <h5 style={{'font-size': '15px'}}>OCEAN</h5>
                            </div>
                            <div className="item">
                                <img src={meter6} alt="Image" />
                                <h5 style={{'font-size': '15px'}}>WAREHOUSING AND DISTRIBUTION</h5>
                            </div>
                        </Carousel> */}
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}
