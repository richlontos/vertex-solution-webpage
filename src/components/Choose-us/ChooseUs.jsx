import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assets/img/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container className="chooseContainer">
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Resources</h2>
              <p>
                Our customers deserve indispensable quality, which is why we have changed the expectations for a reliable 3PL.
                Innovative technology. Ethical principles. Honest and transparent communication. These are the backbone of our organization.
                Let us prioritize your freight today in any of our top-tier services: LTL, Truckload, Expedited, or Freight Management.
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">

              <ReactPlayer
                url="https://www.youtube.com/watch?v=4gZ5nw8zaF0"
                controls
                width="100%"
                height="350px"
              />





            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
