import React from "react";
import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const ContactTab = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_buds8es', 'template_kktou5e', form.current, 'iKlbYuVeqikztfOPx')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };


  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });

  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <div className='left'>
              <iframe width="500" height="460" id="gmap_canvas" src="https://maps.google.com/maps?q=1675%20N%20Main%20St,%20Orange,%20CA%2092865&t=k&z=19&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
            </div>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Contact us</h2>
                  <p>Complete this form and a Vertex Solutions representative will contact you shortly</p>
                  <form ref={form}
                    onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input required type="text" placeholder="First Name" name="user_first" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input required type="text" placeholder="Last Name" name="user_last" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input required type="email" placeholder="Email Address" name="user_email" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input required type="tel" placeholder="Phone No." name="phone_number" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input required type="email" placeholder="Company Name" name="user_company" />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input required type="tel" placeholder="Interested in" name="interested_in" />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" placeholder="Message" name="message"></textarea>
                      </Col>

                    </Row>
                    <button type="submit" className="fomSubmit"><span>{buttonText}</span></button>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}



export default ContactTab