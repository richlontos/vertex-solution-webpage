import "react-multi-carousel/lib/styles.css";
import {
  FaHeadset,
  FaClock,
  FaMapMarkerAlt,
  FaMailBulk,
  FaFax,
} from "react-icons/fa";
import colorSharp from "../../assets/img/color-sharp.png";
import { Col, Row, Dropdown } from "react-bootstrap";
import "../Skills/SkillsCss.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="containerSkills">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <Row>
                <Col style={{ display: "inline" }}>
                  <h5>
                    <FaHeadset
                      style={{ display: "inline", marginRight: "10px" }}
                    />{" "}
                    CALL CENTER
                  </h5>
                  <p className="paddingBanner">
                    Give us a free call
                    <br />
                    (562) 966-7406
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>
                    <FaClock
                      style={{ display: "inline", marginRight: "10px" }}
                    />
                    WORKING HOURS
                  </h5>
                  <p>Mon-Fri 7AM - 5PM</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5>
                    <FaMapMarkerAlt
                      style={{ display: "inline", marginRight: "10px" }}
                    />
                    OUR LOCATION
                  </h5>
                  <p>
                    1151 Duryea Ave
                    <br />
                    Irvine, CA 92614
                  </p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h5 className="paddingBannerTwo">
                    <FaFax style={{ display: "inline", marginRight: "10px" }} />
                    Fax #
                  </h5>
                  <p>562-966-7399</p>
                </Col>
              </Row>
              <Row className="email-row">
                <Col>
                  <h5 id="emailCenter" className="paddingBannerTwo">
                    <FaMailBulk
                      style={{ display: "inline", marginRight: "10px" }}
                    />
                    Emails
                  </h5>
                  <div id="emails">
                    <a href="mailto:ar@vertex4solutions.com">
                      ar@vertex4solutions.com
                    </a>
                    <br />
                    <a href="mailto:billing@vertex4solutions.com">
                      billing@vertex4solutions.com
                    </a>
                    <br />
                    <a href="mailto:customerservice@vertex4solutions.com">
                      customerservice<span className="new-line"></span>@vertex4solutions.com
                    </a>
                  </div>
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
