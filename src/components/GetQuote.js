import React from "react";
import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const GetQuote = () => {
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
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully' });
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.' });
    }
  };

  const [dimensions, setDimensions] = useState([{ width: '', height: '', length: '' }]);

  const handleChange = (e, index) => {
    const updatedDimensions = [...dimensions];
    updatedDimensions[index][e.target.name] = e.target.value;
    setDimensions(updatedDimensions);
  };

  const handleAdd = () => {
    setDimensions([...dimensions, { width: '', height: '', length: '' }]);
  };

  const handleRemove = index => {
    setDimensions(dimensions.filter((dim, i) => i !== index));
  };


  return (
    <section className="quote" id="connect">
      <Container className="formCenter">
        <Row className="align-items-center">

          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2 className="headingCenter">QUOTE REQUEST FORM</h2>
                  <form ref={form}
                    onSubmit={sendEmail}>
                    <div className="quoteSection">
                      <Row id="contactBox">
                        <h4 className="headingCenter">CONTACT INFO</h4>
                        <Col className="personalInfo">
                          <input type="text" placeholder="First Name" name="first_name" />
                        </Col>
                        <Col className="personalInfo">
                          <input type="text" placeholder="Last Names" name="last_name" />
                        </Col>
                        <Col className="personalInfo">
                          <input type="email" placeholder="Email" name="email" />
                        </Col>
                        <Col className="personalInfo">
                          <input type="tel" placeholder="Phone No." name="phone_number" />
                        </Col>
                        <Col className="personalInfo">
                          <input type="text" placeholder="Company Name" name="company_name" />
                        </Col>
                        <Col className="personalInfo">
                          <textarea rows="6" placeholder="Message" name="message"></textarea>
                        </Col>
                      </Row>

                    </div>


                    {/* Bottom section */}
                    <div className="detailBox">
                      <h2 className="headingCenter">DETAILS</h2>

                      <Row id="detailsBox">
                        <Row id="zipCodes">

                          <h4 className="pickUpZip" >Pick up zip code</h4>
                          <Col size={12} sm={6} className="px-1 placeZips">
                            <input
                              className="zipInput"
                              placeholder="City"
                              type="text"
                              name="city"
                            />
                            <input
                              className="zipInput"
                              placeholder="State"
                              type="text"
                              name="state"
                            />

                            <input
                              className="zipInput"
                              placeholder="Zip code"
                              type="text"
                              name="zipCode"
                            />
                          </Col>
                        </Row>

                        <h4 className="pickUpZip" >Destination zip code</h4>
                        <Row>
                          <Col size={12} sm={6} className="px-1 placeZips">
                            <input
                              className="zipInput"
                              placeholder="City"
                              type="text"
                              name="city"
                            />
                            <input
                              className="zipInput"
                              placeholder="State"
                              type="text"
                              name="state"
                            />

                            <input
                              className="zipInput"
                              placeholder="Zip code"
                              type="text"
                              name="zipCode"
                            />
                          </Col>
                        </Row>
                        <h4 className="pickUpZip" >Shipping information</h4>

                        <Col size={12} sm={6} className="px-1">
                          <select
                            name="origin_type"
                          >
                            <option value="">Origin Type</option>
                            <option value="Business">Business</option>
                            <option value="Residential">Residential</option>
                            <option value="Construction Site">Construction Site</option>
                          </select>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <select
                            name="destination_type"
                          >
                            <option value="">Destination Type</option>
                            <option value="Business">Business</option>
                            <option value="Residential">Residential</option>
                            <option value="Construction Site">Construction Site</option>
                          </select>
                        </Col>
                        {
                          status.message &&
                          <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                          </Col>
                        }


                        <Col size={12} sm={6} className="px-1">
                          <input type="text" placeholder="Total Pallets" name="total_pallets" />
                        </Col>
                        <Col size={12} sm={6} className="px-1 selectFlex">
                          <select
                            name="class"
                          >
                            <option value="">Class</option>
                            <option value="50">50</option>
                            <option value="55">55</option>
                            <option value="60">60</option>
                            <option value="70">70</option>
                            <option value="77.5">77.5</option>
                            <option value="85">85</option>
                            <option value="92.4">92.4</option>
                            <option value="100">100</option>
                            <option value="110">110</option>
                            <option value="125">125</option>
                            <option value="150">150</option>
                            <option value="175">175</option>
                            <option value="200">200</option>
                            <option value="250">250</option>
                            <option value="300">300</option>
                            <option value="400">400</option>
                            <option value="500">500</option>
                          </select>
                        </Col>
                        <Col size={12} sm={6} className="px-1 dimensionFlex">
                          <button className="rowBtn" type="button" onClick={handleAdd}>
                            Add row
                          </button>
                          <br />
                          {dimensions.map((dim, index) => (
                            <React.Fragment key={index}>
                              <br />
                              <input
                                className="inputDimension"
                                placeholder="Width"
                                type="number"
                                name="width"
                                value={dim.width}
                                onChange={e => handleChange(e, index)}
                              />
                              <input
                                className="inputDimension"
                                placeholder="Height"
                                type="number"
                                name="height"
                                value={dim.height}
                                onChange={e => handleChange(e, index)}
                              />

                              <input
                                className="inputDimension"
                                placeholder="Length"
                                type="number"
                                name="length"
                                value={dim.length}
                                onChange={e => handleChange(e, index)}
                              />

                              {index > 0 && (
                                <button className="rowBtn" type="button" onClick={() => handleRemove(index)}>
                                  -
                                </button>
                              )}
                            </React.Fragment>
                          ))}

                        </Col>
                        <br />
                        <Col size={12} className="px-1">
                          <textarea rows="6" placeholder="Commodity Description" name="commodity"></textarea>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="text" placeholder="Target Rate" name="target_rate" />
                        </Col>
                        <div className="checkBoxes">
                          <div>
                            <label>LTL Quote</label>
                            <input
                              name="ltl_quote"
                              type="checkbox"
                            />
                          </div>
                          <div>
                            <label>Volume LTL Quote</label>
                            <input
                              name="volume_ltl_quote"
                              type="checkbox"
                            />
                          </div>
                          <div>
                            <label>FTL Quote</label>
                            <input
                              name="ftl_quote"
                              type="checkbox"
                            />
                          </div>
                          <div>
                            <label>Rail</label>
                            <input
                              name="rail"
                              type="checkbox"
                            />
                          </div>
                          <div>
                            <label>Air</label>
                            <input
                              name="air"
                              type="checkbox"
                            />
                          </div>
                          <div>
                            <label>Ocean</label>
                            <input
                              name="ocean"
                              type="checkbox"
                            />
                          </div>
                          <div>
                            <label>Warehousing</label>
                            <input
                              name="warehousing"
                              type="checkbox"
                            />
                          </div>

                        </div>
                          <h4 className="pickUpZip" >Pick up Accesorials</h4>
                          <Row>

                          </Row>
                          <select
                            name="pickupAccesorials"
                            className="pickupAccesorials"
                          >
                            <option value="">Pick-up Accesorials</option>
                            <option value="liftGate">Lift Gate</option>
                            <option value="Residential">Residential</option>
                            <option value="limitedAccess">Limited Access</option>
                            <option value="Hazmat">Hazmat</option>
                          </select>
                        <Col size={12} sm={7} className="px-1">
                          <input type="text" placeholder="Additional Notes" name="additional_notes" />
                        </Col>
                        <h4 className="pickUpZip" >Delivery Accesorials</h4>

                        <select
                            name="deliveryAccesorials"
                            className="pickupAccesorials"
                          >
                            <option value="">Delivery Accesorials</option>
                            <option value="liftGate">liftGate</option>
                            <option value="Residential">Residential</option>
                            <option value="limitedAccess">Limited Access</option>
                            <option value="Appointment">Appointment</option>
                          </select>
                        <Col size={12} sm={7} className="px-1">
                          <input type="text" placeholder="Additional Notes" name="additional_notes" />
                        </Col>

                        {
                          status.message &&
                          <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                          </Col>
                        }
                      </Row>
                    </div>

                    {/* Bottom section */}

                    <div className="aboutBox">
                      <h4 className="headingCenter">ADDITIONAL COMMENTS</h4>

                      <Row>
                        <Col size={12} className="px-1">
                          <textarea className="additional" rows="6" placeholder="type any additional comments" name="us"></textarea>
                        </Col>
                      </Row>
                    </div>
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
