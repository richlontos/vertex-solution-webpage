
import 'react-multi-carousel/lib/styles.css';
import { FaHeadset, FaClock, FaMapMarkerAlt, FaServer } from 'react-icons/fa';
import colorSharp from "../assets/img/color-sharp.png"
import { Col, Row, Dropdown } from "react-bootstrap";

export const Skills = () => {
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
                        <div className="skill-bx wow zoomIn">
                            <Row>

                                <Col style={{ "display": "inline" }}>
                                    <h5 ><FaHeadset style={{ "display": "inline", "marginRight": "10px" }} />  CALL CENTER</h5>
                                    <p className='paddingBanner'>
                                        Give us a free call<br />
                                        (562) 966-7406
                                    </p>

                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5 ><FaClock style={{ "display": "inline", "marginRight": "10px" }} />WORKING HOURS</h5>
                                    <p>Mon-Fri 7AM - 5PM
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h5 ><FaMapMarkerAlt style={{ "display": "inline", "marginRight": "10px" }} />OUR LOCATION</h5>
                                    <p>1675 N Main St.<br />
                                        Orange, CA 92867
                                    </p>
                                </Col>
                            </Row>
                            <Row>
                                <Col className='viewServices'>
                                    <h5 ><FaServer style={{ "display": "inline", "marginRight": "10px" }} />VIEW SERVICES</h5>
                                    <Dropdown class="drop-down closed">
                                        <Dropdown.Toggle variant="success" className="nav-button" id="dropdown-banner">
                                            Select Service
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu id="dropMenu">
                                            <Dropdown.Item id="itemColor" href="/services">FTL</Dropdown.Item>
                                            <Dropdown.Item id="itemColor" href="/servicesLTL">LTL</Dropdown.Item>
                                            <Dropdown.Item id="itemColor" href="/RailServices">Rail</Dropdown.Item>
                                            <Dropdown.Item id="itemColor" href="/AirServices">Air</Dropdown.Item>
                                            <Dropdown.Item id="itemColor" href="/OceanServices">Ocean</Dropdown.Item>
                                            <Dropdown.Item id="itemColor" href="/volumePartial">Volume</Dropdown.Item>
                                            <Dropdown.Item id="itemColor" href="/WarehouseServices">Warehousing and Distribution</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
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
