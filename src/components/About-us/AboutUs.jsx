import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from '../../assets/img/about-us.png';
import CountUp from "react-countup";
import "./about.css";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import { ArrowRightCircle } from 'react-bootstrap-icons';


const AboutUs = () => {

  const [counterOn, setCounterOn] = useState(false)

  return (

    <section>
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>

        <Container className="aboutUsCont">
          <Row>
            <Col lg="6" md="6">
              <div className="about__img">
                <img src={aboutImg} alt="" className="w-100" />
              </div>
            </Col>

            <Col lg="6" md="6">
              <div className="about__content">
                <h2>About Us</h2>
                <p>
                  Vertex Solutions is a smart, growing company dedicated to winning you over with real personalized service.
                   Vertex Solutions is emerging as one of the leaders in transportation logistics and technology solutions.
                </p>
                <button> <a href="#about" style={{ 'color': "gainsboro", "text-decoration": "none" }}><ArrowRightCircle size={20} />Learn More!</a></button>
                <br />
                <div className="about__counter">
                  <div className="top_count">
                    <div className="single__counter">
                      <span className="counter">
                        {counterOn && <CountUp start={0} end={789} duration={2} suffix="+" />}
                      </span>

                      <p className="counter__title">Carriers working with us!</p>
                    </div>

                    <div className="single__counter">
                      <span className="counter">
                        {counterOn && <CountUp start={0} end={100} duration={2} suffix="%" />}
                      </span>

                      <p className="counter__title">Customer Support</p>
                    </div>
                  </div>
                  <div className="bottom_count">
                    <div className="single__counter">
                      <span className="counter">
                        {counterOn && <CountUp start={0} end={97.5} duration={2} suffix="%+" />}
                      </span>

                      <p className="counter__title"> on time delivery rate</p>
                    </div>

                    <div className="single__counter">
                      <span className="counter">
                        {counterOn && <CountUp start={0} end={200} duration={2} suffix="+" />}
                      </span>

                      <p className="counter__title">Active Clients,  DTC Brands</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

      </ScrollTrigger>
    </section>
  );
};

export default AboutUs;
