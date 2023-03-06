
import 'react-multi-carousel/lib/styles.css';
import { FaHeadset, FaClock, FaMapMarkerAlt, FaMailBulk, FaFax } from 'react-icons/fa';
import colorSharp from "../assets/img/color-sharp.png"
import { Col, Row, Dropdown } from "react-bootstrap";

export const SkillsContact = () => {
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
        <section className="skill" id="skills">
            <div className="containerSkills">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-faq wow zoomIn">
                            <Row>

                                <Col style={{ "display": "inline" }}>
                                    <h5 className='paddingBannerTwo'><FaHeadset style={{ "display": "inline", "marginRight": "10px" }} />  CALL CENTER</h5>
                                    <p>
                                        Give us a free call<br />
                                        (562) 966-7406
                                    </p>

                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5 className='paddingBannerTwo'><FaClock style={{ "display": "inline", "marginRight": "10px" }} />WORKING HOURS</h5>
                                    <p>Mon-Fri 7AM - 5PM
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5 className='paddingBannerTwo'><FaMapMarkerAlt style={{ "display": "inline", "marginRight": "10px" }} />OUR LOCATION</h5>
                                    <p>1675 N Main St.<br />
                                        Orange, CA 92867
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5 className='paddingBannerTwo'><FaMailBulk style={{ "display": "inline", "marginRight": "10px" }} />Emails</h5>
                                    <p>csr@vertex4solutions.net <br />
                                       billing@vertex4solutions.net 
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5 className='paddingBannerTwo'><FaFax style={{ "display": "inline", "marginRight": "10px" }} />Fax #</h5>
                                    <p>562-966-7399
                                    </p>
                                </Col>
                            </Row>
                            


                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="" />
        </section>
    )
}
