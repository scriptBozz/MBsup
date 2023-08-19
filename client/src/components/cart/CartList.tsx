import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Alert, Button, Snackbar } from "@mui/material";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import { Typography } from "@mui/material";




import { RootState } from "../../redux/store";
import CartItem from "./CartItem";

const steps = [
  {
    label: "Register Account",
    description: `Create an account`,
  },
  {
    label: "Purchase Membership",
    description: "Upgrade to premium",
  },
  {
    label: "Consult",
    description: "Reach All Landlords and Agents",
  },
];

export default function CartList() {

  

  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };
  const cartList = useSelector((state: RootState) => state.cartList.cartList);

  // const total = cartList.reduce<number>((accumulator, current) => {
  //   const productTotal = current.price * current.quantity;
  //   return accumulator + productTotal;
  // }, 0);

  // successful
  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  function onSuccessHandler() {
    setOpen(true);
  }

  // cancel
  const [openCancel, setOpenCancel] = useState(false);

  const handleCloseCancel = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenCancel(false);
  };

  function onCancelHandler() {
    setOpenCancel(true);
  }

  if (cartList.length === 0) {
    return (
      <div style={{ height: "" }}>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          <Paper
            sx={{
              width: 400,
              height: 200,
            }}
          >
            <Typography>
              <p>
                <span>€0.00/Monthly</span>
              </p>
              <li>Benefit 1</li>
              <li>Benefit 2</li>
              <li>Benefit 3</li>
              <Button variant="contained">Buy membership</Button>
            </Typography>
          </Paper>

          <Paper
            sx={{
              width: 400,
              height: 200,
            }}
          >
            <Typography>
              <p>
                <span>€0.00/Annually</span>
              </p>
              <li>Benefit 1</li>
              <li>Benefit 2</li>
              <li>Benefit 3</li>
              <Button variant="contained">Buy membership</Button>
            </Typography>
          </Paper>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="Stepper-Div">
        <Box className="Stepper-Box" sx={{ maxWidth: 600, ml: 7 }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    index === 2 ? (
                      <Typography variant="caption">
                        Reach All Landlords and Agents
                      </Typography>
                    ) : null
                  }
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1 }}
                      >
                        Back
                      </Button>
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>
                You can now reach Landlords directly and also consult with our
                agents
              </Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Go to listings..
              </Button>
            </Paper>
          )}
        </Box>
      </div>
      <Typography>
  
        <h1> Activity</h1>
      </Typography>

      <div className="cartList">
        {cartList.map((item) => (
          <CartItem item={item} />
        ))}
      </div>
      <Typography>
        {/* <h3> Total:{total} </h3> */}
        <h3> Write to the Agent or LandLord</h3>
      </Typography>

      <div>
        <Button
          variant="contained"
          sx={{ mt: 1, mr: 1 }}
          onClick={onSuccessHandler}
        >
          Reach-Out
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 1, mr: 1 }}
          onClick={onCancelHandler}
        >
          Cancel
        </Button>
      </div>

      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Thank you!
        </Alert>
      </Snackbar>
      <Snackbar open={openCancel} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleCloseCancel}
          severity="error"
          sx={{ width: "100%" }}
        >
          The order has been canceled. Please try again !
        </Alert>
      </Snackbar>
    </div>
  );
}
