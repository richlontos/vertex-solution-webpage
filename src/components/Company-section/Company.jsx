import React from "react";
import './company-section.css';
import { Col, Row, Dropdown } from "react-bootstrap";
import { FaHeadset, FaClock, FaMapMarkerAlt, FaServer } from 'react-icons/fa';
import colorSharp from "../../assets/img/color-sharp.png"

import estes from '../../assets/img/estes.png';
import rlcarrier from '../../assets/img/rlcarrier.png';
import ABF from '../../assets/img/ABF.png';
import YRC from '../../assets/img/yrc.png';
import OD from '../../assets/img/OD.png';
import RRF from '../../assets/img/RRF.png';
import TF from '../../assets/img/TF.png';
import XPO from '../../assets/img/XPO.png';
import SAIA from '../../assets/img/SAIA.png';

const Company = () => {
  return (
    <section className="company" id="companies">
      <div className="containerCompanies">
        <div className="row">
          <div className="col-12">
            <div className="company-bx wow zoomIn">
              <Row>

                <Col style={{ "display": "inline" }}>
                <i class="fa-brands fa-fedex fa-4x" ></i>
                </Col>
              </Row>
              <Row>
                <Col style={{ "display": "inline" }}>
                <img className="estes" src={estes}></img>

                </Col>
              </Row>
              <Row>
                <Col>
                <img className="rlcarrier" src={rlcarrier}></img>

                </Col>
              </Row>
              <Row>
                <Col >
                <img className="ABF" src={ABF}></img>

                </Col>
              </Row>
              <Row>
                <Col >
                <img className="YRC" src={YRC}></img>

                </Col>
              </Row>
              <Row>
                <Col >
                <img className="OD" src={OD}></img>

                </Col>
              </Row>
              <Row>
                <Col >
                <img className="RRF" src={RRF}></img>

                </Col>
              </Row>
              <Row>
                <Col >
                <img className="TF" src={TF}></img>

                </Col>
              </Row>
              <Row>
                <Col >
                <img className="XPO" src={XPO}></img>

                </Col>
              </Row>
              <Row>
                <Col >
                <img className="SAIA" src={SAIA}></img>

                </Col>
              </Row>
            

            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="" />
    </section>
  );
};

export default Company;
