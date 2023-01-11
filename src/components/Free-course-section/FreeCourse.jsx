import React from "react";
import { Container, Row, Col } from "reactstrap";

import courseImg01 from "../../assets/img/courseImg01.png";
import courseImg02 from "../../assets/img/courseImg02.jpg";
import courseImg03 from "../../assets/img/courseImg03.png";
import courseImg04 from "../../assets/img/ui-ux.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';


import "./free-course.css";


const FreeCourse = () => {
  return (
    <section>
      <Container className="downloadsContainer">
        <Row className="downloadsRow">
          <Col lg="12" className="text-center mb-5">
            <h2 className="fw-bold">Helpful Documents</h2>
          </Col>

          <Col>
          
          <div className="single__free__course">
            <div className="free__course__img mb-5">
              <a href="https://cdntms.taicloud.net/tms/Credit_Application.pdf"> <img src={courseImg01} alt="" className="w-100" /></a>
              <br />
              <button> <a href="https://cdntms.taicloud.net/tms/Credit_Application.pdf" className="free__btn"><ArrowRightCircle size={20} />Credit Application</a></button>

            </div>


          </div>
          </Col>
          <Col>
          
          <div className="single__free__course">
            <div className="free__course__img mb-5">
              <a href="https://cdntms.taicloud.net/tms/Claim_Form.pdf"> <img src={courseImg02} alt="" className="w-100" /> </a>
              <br />
              <button> <a href="https://cdntms.taicloud.net/tms/Claim_Form.pdf" className="free__btn"><ArrowRightCircle size={20} />Claim Form</a></button>
            </div>


          </div>
          </Col>
          <Col>
          
          <div className="single__free__course">
            <div className="free__course__img mb-5">
              <a href="https://cdntms.taicloud.net/tms/Credit_Card_Authorization_Form.pdf"> <img src={courseImg03} alt="" className="w-100" /></a>
              <br />
              <button> <a href="https://cdntms.taicloud.net/tms/Credit_Card_Authorization_Form.pdf  " className="free__btn"><ArrowRightCircle size={20} />Credit Card Authorization</a></button>
            </div>


          </div>
          </Col>
          <Col>
          
          <div className="single__free__course">
            <div className="free__course__img mb-5">
              <img src={courseImg04} alt="" className="w-100" />
              <br />
              <button> <a href="#about" className="free__btn"><ArrowRightCircle size={20} />Download!</a></button>
            </div>


          </div>
          </Col>

         
        </Row>


      </Container>
    </section>
  );
};

export default FreeCourse;
