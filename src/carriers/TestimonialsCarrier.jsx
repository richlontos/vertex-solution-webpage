import React, { useState } from "react";
// import FormInputs from './FormInputs';
// import useFormContext from "../hooks/useFormContext";
// import Slider from "react-slick"
// import { testimonials } from "../components/data/dummydata"
// import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import FormPersonalDetail from "../carriers/FormPersonalDetail";
import FormUserDetail from "./FormUserDetail";
import Confirm from "./Confirm";
import Success from "./Success";
import { Typography } from "@mui/material";
// import {
//   Typography,
//   input,
//   Button,
//   Stepper,
//   Step,
//   StepLabel
// } from "@material-ui/core"

// import { makeStyles } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";




export const TestimonialsCarrier = () => {
    const formTitles = ["Personal Details", "User Details", "Confirm", "Finish"];
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    bio: "",
    city: "",
  });

  //Proceed Next Step
  const nextStep = () => setStep(step + 1);

  //Proceed Previous Step
  const prevStep = () => setStep(step - 1);

  const formsToDisplay = () => {
    switch(step){
      case 0:
        return (
          <FormPersonalDetail nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />
        )
      case 1:
        return (
          <FormUserDetail nextStep={nextStep} prevStep={prevStep} formData={formData} setFormData={setFormData} />
        )
      case 2:
        return (
          <Confirm nextStep={nextStep} prevStep={prevStep} formData={formData} />
        )
      case 3:
        return (
          <Success nextStep={nextStep} prevStep={prevStep} formData={formData} />
        )
      default:
        return (<FormPersonalDetail nextStep={nextStep} prevStep={prevStep} formData={formData} />)
    }
  }
  return (
    <div className="formMulti">
      <Typography className="formHeader" variant="h4">{formTitles[step]}</Typography>
      {formsToDisplay()}      
    </div>
  );
};


export default TestimonialsCarrier;