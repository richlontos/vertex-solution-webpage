import React from "react";
import "./about.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from '../../assets/img/about-us.png';
import CountUp from "react-countup";
import "./about.css";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";

const AboutUs = () => {

  const [counterOn, setCounterOn] = useState(false)

  return (

    <section>
      <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={()=> setCounterOn(false)}>

      <Container>
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
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
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

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                    {counterOn && <CountUp start={0} end={95} duration={2} suffix="M" />}
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                    {counterOn &&  <CountUp start={0} end={5} duration={2} suffix="K" />}
                    </span>

                    <p className="counter__title">Categories Served</p>
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
