import React from "react";
import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
// import emailjs from '@emailjs/browser';

export const GetQuote = () => {
  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_buds8es', 'template_kktou5e', form.current, 'iKlbYuVeqikztfOPx')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  //   e.target.reset()
  // };


  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    companyEmail: '',
    subject: '',
    message: '',
    pickCity: '',
    pickState: '',
    pickZipCode: '',
    dropCity: '',
    dropState: '',
    dropZipCode: '',
    originType: '',
    destinationType: '',
    totalPallets: '',
    classType: '',
    dimensions: [],
    commodity: '',
    targetRate: '',
    totalWeight: '',
    ltlQuote: false,
    volumeLtlQuote: false,
    ftlQuote: false,
    rail: false,
    air: false,
    ocean: false,
    warehousing: false,
    pickupAccesorials: '',
    pickAdditionalNotes: '',
    deliveryAccesorials: '',
    dropAdditionalNotes: '',
    additionalNotes: ''
  }


  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    if (category === 'dimensions') {
      setFormDetails({
        ...formDetails,
        dimensions: value,
      });
    } else {
      setFormDetails({
        ...formDetails,
        [category]: value,
      });
    }
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("https://vertex-solution-webpage.onrender.com/quote", {
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
      setStatus({ success: true, message: 'Message sent successfully' });
    } else {
      setStatus({ success: false, message: 'Something went wrong, please try again later.' });
    }
  };


  const [dimensions, setDimensions] = useState([{ width: '', height: '', length: '', pallets: '', weight: '', class: '' }]);


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
                    onSubmit={handleSubmit}>
                    <div className="quoteSection">
                      <Row id="contactBox">
                        <h4 className="headingCenter">CONTACT INFO</h4>
                        <Col className="personalInfo">
                          <input className="quoteInput" required type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                        </Col>
                        <Col className="personalInfo">
                          <input className="quoteInput" required type="text" value={formDetails.lastName} placeholder="Last Names" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                        </Col>
                        <Col className="personalInfo">
                          <input className="quoteInput" required type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} />
                        </Col>
                        <Col className="personalInfo">
                          <input className="quoteInput" required type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                        </Col>
                        <Col className="personalInfo">
                          <input className="quoteInput" required type="text" value={formDetails.companyName} placeholder="Company Name" onChange={(e) => onFormUpdate('companyName', e.target.value)} />
                        </Col>
                        <Col className="personalInfo">
                          <input className="quoteInput" required type="email" value={formDetails.companyEmail} placeholder="Company Email" onChange={(e) => onFormUpdate('companyEmail', e.target.value)} />
                        </Col>
                        <Col className="personalInfo">
                          <input className="quoteInput" required type="text" value={formDetails.subject} placeholder="Subject" onChange={(e) => onFormUpdate('subject', e.target.value)} />
                        </Col>
                        <Col className="personalInfo">
                          <textarea rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        </Col>
                      </Row>

                    </div>



                    {/* Bottom section */}
                    <div className="detailBox">
                      <h2 className="headingCenter">DETAILS</h2>

                      <Row id="detailsBox">
                        <Row id="zipCodes">

                          <h4 className="pickUpZip" >Pick up location</h4>
                          <Col size={12} sm={6} className="px-1 placeZips">
                            <input
                              className="zipInput"
                              placeholder="City"
                              type="text"
                              value={formDetails.pickCity}
                              onChange={(e) => onFormUpdate('pickCity', e.target.value)}
                            />
                            <input
                              className="zipInput"
                              placeholder="State"
                              type="text"
                              value={formDetails.pickState}
                              onChange={(e) => onFormUpdate('pickState', e.target.value)}
                            />

                            <input
                              className="zipInput"
                              placeholder="Zip code"
                              type="text"
                              value={formDetails.pickZipCode}
                              onChange={(e) => onFormUpdate('pickZipCode', e.target.value)}
                            />
                          </Col>
                        </Row>

                        <h4 className="pickUpZip" >Destination location</h4>
                        <Row>
                          <Col size={12} sm={6} className="px-1 placeZips">
                            <input
                              className="zipInput"
                              placeholder="City"
                              type="text"
                              value={formDetails.dropCity}
                              onChange={(e) => onFormUpdate('dropCity', e.target.value)}
                            />
                            <input
                              className="zipInput"
                              placeholder="State"
                              type="text"
                              value={formDetails.dropState}
                              onChange={(e) => onFormUpdate('dropState', e.target.value)}
                            />

                            <input
                              className="zipInput"
                              placeholder="Zip code"
                              type="text"
                              value={formDetails.dropZipCode}
                              onChange={(e) => onFormUpdate('dropZipCode', e.target.value)}
                            />
                          </Col>
                        </Row>
                        <h4 className="pickUpZip" >Shipping information</h4>

                        <Col size={12} sm={6} className="px-1">
                          <select
                            value={formDetails.originType} onChange={(e) => onFormUpdate('originType', e.target.value)}
                          >
                            <option value="">Origin Type</option>
                            <option value="Business">Business</option>
                            <option value="Residential">Residential</option>
                            <option value="Construction Site">Construction Site</option>
                          </select>
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <select
                            value={formDetails.destinationType} onChange={(e) => onFormUpdate('destinationType', e.target.value)}
                          >
                            <option value="">Destination Type</option>
                            <option value="Business">Business</option>
                            <option value="Residential">Residential</option>
                            <option value="Construction Site">Construction Site</option>
                          </select>
                        </Col>

                        <Col size={12} sm={6} className="px-1">
                          <input className="inputColor" type="number" placeholder="Total Pallets" value={formDetails.totalPallets} onChange={(e) => onFormUpdate('totalPallets', e.target.value)} />
                        </Col>

                        <Col size={12} sm={6} className="px-1 selectFlex">
                          <select
                            value={formDetails.classType}
                            onChange={(e) => onFormUpdate('classType', e.target.value)}
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
                        <div size={12} sm={6} className="px-1 dimensionFlex">
                          <button className="rowBtn" type="button" onClick={handleAdd}>
                            Add row
                          </button>
                          <br />
                          {/* Dimension inputs */}
                          {dimensions.map((dim, index) => (
                            <React.Fragment key={index}>
                              <br />
                              <input
                                className="inputDimension inputColor"
                                placeholder="Pallets"
                                type="number"
                                name="pallets"
                                value={dim.pallets}
                                onChange={(e) => {
                                  handleChange(e, index);
                                  const updatedDimensions = [...dimensions];
                                  updatedDimensions[index][e.target.name] = e.target.value;
                                  onFormUpdate('dimensions', updatedDimensions);
                                }}
                              />
                              <input
                                className="inputDimension inputColor"
                                placeholder="Weight"
                                type="number"
                                name="weight"
                                value={dim.weight}
                                onChange={(e) => {
                                  handleChange(e, index);
                                  const updatedDimensions = [...dimensions];
                                  updatedDimensions[index][e.target.name] = e.target.value;
                                  onFormUpdate('dimensions', updatedDimensions);
                                }}
                              />
                              <input
                                className="inputDimension inputColor"
                                placeholder="Class"
                                type="number"
                                name="class"
                                value={dim.class}
                                onChange={(e) => {
                                  handleChange(e, index);
                                  const updatedDimensions = [...dimensions];
                                  updatedDimensions[index][e.target.name] = e.target.value;
                                  onFormUpdate('dimensions', updatedDimensions);
                                }}
                              />
                              <input
                                className="inputDimension inputColor"
                                placeholder="Width"
                                type="number"
                                name="width"
                                value={dim.width}
                                onChange={(e) => {
                                  handleChange(e, index);
                                  const updatedDimensions = [...dimensions];
                                  updatedDimensions[index][e.target.name] = e.target.value;
                                  onFormUpdate('dimensions', updatedDimensions);
                                }}
                              />
                              <input
                                className="inputDimension inputColor"
                                placeholder="Height"
                                type="number"
                                name="height"
                                value={dim.height}
                                onChange={(e) => {
                                  handleChange(e, index);
                                  const updatedDimensions = [...dimensions];
                                  updatedDimensions[index][e.target.name] = e.target.value;
                                  onFormUpdate('dimensions', updatedDimensions);
                                }}
                              />
                              <input
                                className="inputDimension inputColor"
                                placeholder="Length"
                                type="number"
                                name="length"
                                value={dim.length}
                                onChange={(e) => {
                                  handleChange(e, index);
                                  const updatedDimensions = [...dimensions];
                                  updatedDimensions[index][e.target.name] = e.target.value;
                                  onFormUpdate('dimensions', updatedDimensions);
                                }}
                              />
                              <br />
                              <br />
                              <input
                                className="inputColor"
                                placeholder="Commodity"
                                value={dim.commodity}
                                onChange={(e) => {
                                  const updatedDimensions = [...dimensions];
                                  updatedDimensions[index]['commodity'] = e.target.value;
                                  onFormUpdate('dimensions', updatedDimensions);
                                }}
                              />
                              <br />
                              {index > 0 && (
                                <button className="rowBtn" type="button" onClick={() => handleRemove(index)}>
                                  -
                                </button>
                              )}
                            </React.Fragment>
                          ))}



                        </div>
                        <br />
                        <Col size={12} sm={6} className="px-1">
                          <input className="inputColor" type="text" placeholder="Target Rate" value={formDetails.targetRate} onChange={(e) => onFormUpdate('targetRate', e.target.value)} />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input className="inputColor" type="number" placeholder="Total Weight" value={formDetails.totalWeight} onChange={(e) => onFormUpdate('totalWeight', e.target.value)} />
                        </Col>
                        <div className="checkBoxes">
                          <div>
                            <label>LTL Quote</label>
                            <input
                              value={formDetails.ltlQuote}
                              onChange={(e) => onFormUpdate('ltlQuote', e.target.value)}
                              type="checkbox"
                            />
                          </div>
                          <div>
                            <label>Volume LTL Quote</label>
                            <input
                              value={formDetails.volumeLtlQuote}
                              onChange={(e) => onFormUpdate('volumeLtlQuote', e.target.value)}
                              type="checkbox"
                            />
                          </div>
                          <div>
                            <label>FTL Quote</label>
                            <input
                              value={formDetails.ftlQuote}
                              onChange={(e) => onFormUpdate('ftlQuote', e.target.value)}
                              type="checkbox"
                            />
                          </div>
                          <div>
                            <label>Rail</label>
                            <input
                              value={formDetails.rail}
                              onChange={(e) => onFormUpdate('rail', e.target.value)}
                              type="checkbox"
                            />
                          </div>
                          <div>
                            <label>Air</label>
                            <input
                              value={formDetails.air}
                              onChange={(e) => onFormUpdate('air', e.target.value)}
                              type="checkbox"
                            />
                          </div>
                          <div>
                            <label>Ocean</label>
                            <input
                              value={formDetails.ocean}
                              onChange={(e) => onFormUpdate('ocean', e.target.value)}
                              type="checkbox"
                            />
                          </div>
                          <div>
                            <label>Warehousing</label>
                            <input
                              value={formDetails.warehousing}
                              onChange={(e) => onFormUpdate('warehousing', e.target.value)}
                              type="checkbox"
                            />
                          </div>

                        </div>
                        <h4 className="pickUpZip" >Pick up Accesorials</h4>
                        <Row>

                        </Row>
                        <select
                          value={formDetails.pickupAccesorials}
                          onChange={(e) => onFormUpdate('pickupAccesorials', e.target.value)}
                          className="pickupAccesorials"
                        >
                          <option value="">Pick-up Accesorials</option>
                          <option value="liftGate">Lift Gate</option>
                          <option value="Residential">Residential</option>
                          <option value="limitedAccess">Limited Access</option>
                          <option value="Hazmat">Hazmat</option>
                        </select>
                        <Col size={12} sm={7} className="px-1">
                          <input className="inputColor" type="text" placeholder="Additional Notes" value={formDetails.pickAdditionalNotes} onChange={(e) => onFormUpdate('pickAdditionalNotes', e.target.value)} />
                        </Col>
                        <h4 className="pickUpZip" >Delivery Accesorials</h4>

                        <select
                          value={formDetails.deliveryAccesorials}
                          onChange={(e) => onFormUpdate('deliveryAccesorials', e.target.value)}
                          className="pickupAccesorials"
                        >
                          <option value="">Delivery Accesorials</option>
                          <option value="liftGate">liftGate</option>
                          <option value="Residential">Residential</option>
                          <option value="limitedAccess">Limited Access</option>
                          <option value="Appointment">Appointment</option>
                        </select>
                        <Col size={12} sm={7} className="px-1">
                          <input className="inputColor" type="text" placeholder="Additional Notes" value={formDetails.dropAdditionalNotes} onChange={(e) => onFormUpdate('dropAdditionalNotes', e.target.value)} />
                        </Col>


                      </Row>
                    </div>

                    {/* Bottom section */}

                    <div className="aboutBox">
                      <h4 className="headingCenter">ADDITIONAL COMMENTS</h4>

                      <Row>
                        <Col size={12} className="px-1">
                          <textarea className="additional" rows="6" placeholder="type any additional comments" value={formDetails.additionalNotes} onChange={(e) => onFormUpdate('additionalNotes', e.target.value)}></textarea>
                          <button type="submit" className="fomSubmit"><span>{buttonText}</span></button>
                        </Col>
                        {
                          status.message &&
                          <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                          </Col>
                        }
                      </Row>
                    </div>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
