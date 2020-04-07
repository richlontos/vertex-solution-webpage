import React, { useState } from "react";
import Slider from "react-slick"
import { testimonials } from "../components/data/dummydata"
import FormatQuoteIcon from "@mui/icons-material/FormatQuote"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {
  Typography,
  TextField,
  Button,
  Stepper,
  Step,
  StepLabel
} from "@material-ui/core"

import { makeStyles } from "@material-ui/core";
import { Col, Row } from "react-bootstrap";



const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Personal information",
    "Company Information",
    "Equipment",
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <TextField
            id="first-name"
            label="First Name"
            variant="outlined"
            placeholder="Enter Your First Name"
            fullWidth
            margin="normal"
            name="firstName"
          />
          <TextField
            id="last-name"
            label="Last Name"
            variant="outlined"
            placeholder="Enter Your Last Name"
            fullWidth
            margin="normal"
            name="lastName"
          />
          <TextField
            id="phoneNumber"
            label="Phone No."
            variant="outlined"
            fullWidth
            margin="normal"
            name="phoneNumber"
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            margin="normal"
            name="email"
          />
        </>
      );

    case 1:
      return (
        <>
          <Row>

            <Col>

              <TextField
                id="company"
                label="Company Name"
                variant="outlined"
                fullWidth
                margin="normal"
                name="company"
              />
            </Col>
            <Col>

              <TextField
                id="mailingAddress"
                label="Mailing Address"
                variant="outlined"
                fullWidth
                margin="normal"
                name="mailingAddress"
              />
            </Col>
          </Row>
          <Row>
            <Col>

              <TextField
                id="federalId"
                label="Federal ID #"
                variant="outlined"
                fullWidth
                margin="normal"
                name="cityStateZip"
              />
            </Col>

            <Col>

              <TextField
                id="mcdot"
                label="MC or DOT"
                variant="outlined"
                fullWidth
                margin="normal"
                name="mcdot"
              />
            </Col>

          </Row>
          <Row>
            <Col>

              <TextField
                id="cityStateZip"
                label="City/State/Zip"
                variant="outlined"
                fullWidth
                margin="normal"
                name="cityStateZip"
              />
            </Col>
            <Col>

              <TextField
                id="fleet"
                label="Fleet Size"
                variant="outlined"
                fullWidth
                type="number"
                margin="normal"
                name="alternatePhone"
              />
            </Col>
          </Row>


        </>
      );
    case 2:
      return (
        <>
          <Row>
            <Col>
              <TextField
                id="dryVan"
                label="# Of Dry Vans"
                variant="outlined"
                fullWidth
                type="number"
                margin="normal"
                name="dryVan"
              />

            </Col>
            <Col>
              <TextField
                id="refeers"
                label="# Of Reefers"
                variant="outlined"
                fullWidth
                type="number"
                margin="normal"
                name="refeers"
              />

            </Col>
            </Row>
            <Row>
            <Col>
              <TextField
                id="flatBed"
                label="# Of Flat Beds"
                variant="outlined"
                fullWidth
                type="number"
                margin="normal"
                name="flatBed"
              />

            </Col>
            <Col>
              <TextField
                id="lowboy"
                label="# Of Lowboys"
                variant="outlined"
                fullWidth
                type="number"
                margin="normal"
                name="lowboy"
              />

            </Col>

          </Row>
          <Row>
            <Col>
              <TextField
                id="dropDeck"
                label="# Of Drop Decks"
                variant="outlined"
                fullWidth
                type="number"
                margin="normal"
                name="dropDeck"
              />

            </Col>
            <Col>
              <TextField
                id="other"
                label="Other"
                variant="outlined"
                fullWidth
                margin="normal"
                name="other"
              />

            </Col>

          </Row>
          <br />
          <Row>
            <Col>

              <select
                style={{ "paddingLeft": "20px" }}
                name="hazmat"
                className="pickupAccesorials"
              >
                <option value="">Hazmat Endorsed?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>

              </select>
              <select
                style={{ "paddingLeft": "20px" }}
                name="satellite"
                className="pickupAccesorials"
              >
                <option value="">Sattelite Equipped?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>

              </select>
              <select
                style={{ "paddingLeft": "20px" }}
                name="dropTrailer"
                className="pickupAccesorials"
              >
                <option value="">Ability to Drop Trailers?</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>

              </select>
            </Col>
          </Row>
          <br />
        </>
      );
    // case 3:
    //   return (
    //     <>
    //       <TextField
    //         id="cardNumber"
    //         label="Card Number"
    //         variant="outlined"
    //         placeholder="Enter Your Card Number"
    //         fullWidth
    //         margin="normal"
    //         name="cardNumber"
    //       />
    //       <TextField
    //         id="cardMonth"
    //         label="Card Month"
    //         variant="outlined"
    //         placeholder="Enter Your Card Month"
    //         fullWidth
    //         margin="normal"
    //         name="cardMonth"
    //       />
    //       <TextField
    //         id="cardYear"
    //         label="Card Year"
    //         variant="outlined"
    //         placeholder="Enter Your Card Year"
    //         fullWidth
    //         margin="normal"
    //         name="cardYear"
    //       />
    //     </>
    //   );
    default:
      return "unknown step";
  }
}


export const TestimonialsCarrier = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };

  return (
    <div>
      <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <form className="formStyle">{getStepContent(activeStep)}

            <Button
              className={classes.button}
              disabled={activeStep === 0}
              color="secondary"
              onClick={handleBack}
            >
              back
            </Button>
            {/* {isStepOptional(activeStep) && (
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSkip}
            >
              skip
            </Button> */}
          )}
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </form>
        </>
      )}
    </div>
  )
}


export default TestimonialsCarrier;