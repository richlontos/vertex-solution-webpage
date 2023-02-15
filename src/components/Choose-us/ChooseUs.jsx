import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assets/img/why-choose-us.png";
import "./choose-us.css";
import freightBroker from "../../assets/img/freightBroker.jpg"
import { Heading } from "../common/Heading";
import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container className="chooseContainer">
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
            <Heading title='Resources' />

              <p>
                Our customers deserve indispensable quality, which is why we have changed the expectations for a reliable 3PL.
                Innovative technology. Ethical principles. Honest and transparent communication. These are the backbone of our organization.
                Let us prioritize your freight today in any of our top-tier services: LTL, Truckload, Expedited, or Freight Management.
              </p>
            </div>

            
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">

            <img src={freightBroker} alt="" className="w-100" />





            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
