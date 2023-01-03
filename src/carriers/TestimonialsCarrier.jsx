import React, { useState } from "react";
// import FormInputs from './FormInputs';
// import useFormContext from "../hooks/useFormContext";
// import Slider from "react-slick"
// import { testimonials } from "../components/data/dummydata"
// import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import { UseContextProvider } from "../contexts/StepperContext";

import Account from "./steps/Account";
import Details from "./steps/Details";
import Payment from "./steps/Payment";
import Final from "./steps/Final";
// import FormPersonalDetail from "../carriers/FormPersonalDetail";
// import FormUserDetail from "./FormUserDetail";
// import Confirm from "./Confirm";
// import Success from "./Success";
// import { Typography } from "@mui/material";
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
    const [currentStep, setCurrentStep] = useState(1);
    
      const steps = [
        "Account Information",
        "Personal Details",
        "Payment",
        "Complete",
      ];
    
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

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <Account />;
      case 2:
        return <Details />;
      case 3:
        return <Payment />;
      case 4:
        return <Final />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <div className="horizontal container mt-5 ">
        <Stepper steps={steps} currentStep={currentStep} />

        <div className="my-10 p-10 ">
          <UseContextProvider>{displayStep(currentStep)}</UseContextProvider>
        </div>
      </div>

      {/* navigation button */}
      {currentStep !== steps.length && (
        <StepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          steps={steps}
        />
      )}
    </div>
  );
}


export default TestimonialsCarrier;