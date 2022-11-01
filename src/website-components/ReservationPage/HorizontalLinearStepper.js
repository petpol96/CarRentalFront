import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CollisionDamageWaiver from "./CollisionDamageWaiver";
import { Divider } from "@mui/material";
import Extras from "./Extras";
import ReservationForm from "./ReservationForm";
import React, { useState } from "react";

const steps = ["Coverage & Extras", "Personal Details", "Confirmation"];

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [flightNumber, setflightNumber] = useState("");
  const [phone, setPhone] = useState("");

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };
  const sendRequest = async () => {
    let json = {
      vehicleId: 18,
      pickUpLocation: "Agios Gordis Carental",
      dropOffLocation: "Airport",
      pickupDate: "2023-09-04T18:27:46.000+00:00",
      dropOffDate: "2023-09-01T18:27:46.000+00:00",
      customerName: name,
      customerLastName: lastName,
      customerMail: email,
      customerPhone: "+" + phone,
      customerAddress: address,
      customerCountry: country,
      comments: "Test reservation2",
    };
    fetch("http://142.93.96.161:8080/reservation/create", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(json),
    });
  };
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }
    if (activeStep === 2) {
      sendRequest();
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleStepRender = () => {
    switch (activeStep) {
      case 0:
        return (
          <Box
            sx={{
              gridRow: 2,
              width: "900px",
              display: "grid",
              gridRowGap: "15px",
            }}
          >
            <Box sx={{ display: "grid", gridRowGap: "5px" }}>
              <Typography>Coverage</Typography>
              <Divider />
            </Box>
            <CollisionDamageWaiver />
            <Box sx={{ display: "grid", gridRowGap: "5px" }}>
              <Typography>Extras</Typography>
              <Divider />
            </Box>
            <Extras />
          </Box>
        );
        break;
      case 1:
        return (
          <Box
            sx={{
              width: "900px",
              display: "grid",
              gridRowGap: "15px",
            }}
          >
            <Box sx={{ display: "grid", gridRowGap: "5px" }}>
              <Typography>Driver Details</Typography>
              <Divider />
            </Box>
            <ReservationForm
              setName={setName}
              setLastName={setLastName}
              setEmail={setEmail}
              setAddress={setAddress}
              setCountry={setCountry}
              setPhone={setPhone}
              setflightNumber={setflightNumber}
            />
          </Box>
        );
        break;
      case 2:
        return (
          <div style={{ marginLeft: "10px" }}>
            <Typography>
              Full Name:{name} {lastName}
            </Typography>
            <Typography>E-mail:{email}</Typography>
            <Typography>Address:{address}</Typography>
            <Typography>Country:{country}</Typography>
            <Typography>Phone:{phone}</Typography>
          </div>
        );

      default:
        break;
    }
  };

  return (
    <Box sx={{ width: "100%", display: "grid", gridRowGap: "15px" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          {handleStepRender()}
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="primary"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext} variant="outlined">
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
