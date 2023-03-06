import React from "react"
import { Heading } from "../components/common/Heading"
import { Container, Row, Col } from "react-bootstrap";
import carrierImage from '../assets/blog/b2.png';



export const AboutServicesCarrier = () => {
  return (
    <>
      <section className='aboutSection'>
        
        <Container className="aboutUsCont">
          <Row>
            <Col lg="6" md="6">
              <div className="about__img">
                <img src={carrierImage} alt="" className="w-100" />
              </div>
            </Col>

            <Col>
              <div  data-aos='fade-down-left'>
                <Heading title='Become a Vertex Solutions Carrier' />
                <p>
                  Vertex Solutions works diligently to be a champion of both our customers and carriers. We strive to build lasting partnerships where we meet both the needs and expectations of our customers and the productivity goals of our carrier network.
                  Our team of experts gets to know your business and works with you as a partner to reduce empty miles and find consistent, quality loads with the goal of increasing productivity and profitability for your business. As a Vertex Solutions carrier, you join one of the leading and fastest growing transportation and logistics organizations in the industry
                </p>


              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}


export default AboutServicesCarrier;