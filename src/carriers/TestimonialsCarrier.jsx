import React, { useState, useRef } from "react";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Stepper from "./Stepper";
import StepperControl from "./StepperControl";
import { UseContextProvider } from "../contexts/StepperContext";
import emailjs from '@emailjs/browser';


import Account from "./steps/Account";
import Details from "./steps/Details";
import Payment from "./steps/Payment";
import Final from "./steps/Final";



export const TestimonialsCarrier = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [buttonText, setButtonText] = useState('Send');


  const steps = [
    "Personal Information",
    "Company Information",
    "Equipment",
    "Complete",
  ];

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Verify form data
    console.log(form.current);

    emailjs.sendForm('service_buds8es', 'template_si886ho', form.current, 'iKlbYuVeqikztfOPx')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };





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

  const handleClick = (direction, e) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    // check if steps are within bounds
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);


    // Prevent form submission
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    //

  };


  const handleFinalSubmit = (e) => {
    e.preventDefault();
    if (currentStep >= 3) {
      sendEmail(e);
    }
  };

  return (
    <div className="mx-auto rounded-2xl bg-white pb-2 shadow-xl md:w-1/2">
      {/* Stepper */}
      <form ref={form}
      >
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

        {/* submit button in the last step */}
        {currentStep >= 3 && (
          <button type="submit" onClick={handleFinalSubmit}>
            Submit
          </button>
        )}
      </form>
    </div >
  );
}


export default TestimonialsCarrier;