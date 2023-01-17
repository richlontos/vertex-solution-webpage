import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import React from 'react';

import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "FULL TRUCK LOAD",
      description: "FTL is industry shorthand for full truckload, or a truckload–most often a dry van or reefer–with a dedicated shipment from a single shipper to a single location. You may also see it referred to as just TL, or truckload. ",
      imgUrl: projImg1,
    },
    {
      title: "LTL FREIGHT",
      description: "Less than truckload freight shipping (LTL) is used for the transportation of small freight or when freight doesn’t require the use of an entire trailer. This shipping method can be used when freight weighs between 150 and 15,000 pounds.",
      imgUrl: projImg2,
    },
    {
      title: "ASSET BASED",
      description: "As part of Cargo Vertex Solutions, you’re backed by the assets and experience of one of the most dependable transportation companies.",
      imgUrl: projImg3,
    },
    {
      title: "VOLUME/PARTIAL",
      description: "Shipments that are larger than LTL but less than a full truck trailer are considered partial truckload. Partial truckload shipments usually range from 8 to 18 pallets, 8,000 to 27,500 pounds, and occupy more than 12 feet of linear space in a trailer.",
      imgUrl: projImg4,
    },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg2,
    // },
    // {
    //   title: "Business Startup",
    //   description: "Design & Development",
    //   imgUrl: projImg3,
    // },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>WHAT WE OFFER <br /> <span style={{'font-size': '20px'}}>WHY CHOOSE VERTEX SOLUTIONS</span></h2>
                <p>Here at Vertex Solutions, we give you more control over your shipment and options. All of our clients get free access to our online TMS and have the ability to book shipments, track, retrieve POD’s, and print out your own invoices. You have the control to choose over 29+ carriers and the ability to auto dispatch your orders. Easy, simple, and effective.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row style={{'display':'flex', 'flexWrap':'wrap', 'justifyContent':'center'}}>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }   
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=''></img>
    </section>
  )
}
