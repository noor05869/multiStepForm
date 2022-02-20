import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import "./step.css";

import MobileStepper from "@material-ui/core/MobileStepper";
import Button from "@material-ui/core/Button";
// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 200,
//     flexGrow: 1,
//     colorPrimary: {
//       backgroundColor: "red",
//     },
//     progress: {
//       color: "red",
//       backgroundColor: "green",
//       "& *": {
//         backgroundColor: "red",
//       },
//     },
//   },
// });

export default function ProgressMobileStepper({ activeStep }) {
  //   const classes = useStyles();
  //   const [step, setstep] = useState();
  //   if (activeStep === 1) {
  //     setstep("step1");
  //   }
  //   if (activeStep === 2) {
  //     setstep("step2");
  //   }
  //   const theme = useTheme();
  //   const [activeStep, setActiveStep] = React.useState(0);

  //   const handleNext = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   };

  //   const handleBack = () => {
  //     setActiveStep((prevActiveStep) => prevActiveStep - 1);
  //   };

  return (
    // <MobileStepper
    //   variant="progress"
    //   steps={5}
    //   //   color="secondary"
    //   position="static"
    //   style={{ borderColor: "#f73378 !important", color: "#f73378 !important" }}
    //   activeStep={activeStep}
    //   className={classes.stepIcon}
    //   //   nextButton={
    //   //     <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
    //   //       Next
    //   //       {/* {theme.direction === "rtl" ? (
    //   //         <KeyboardArrowLeft />
    //   //       ) : (
    //   //         <KeyboardArrowRight />
    //   //       )} */}
    //   //     </Button>
    //   //   }
    //   //   backButton={
    //   //     <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
    //   //       {/* {theme.direction === "rtl" ? (
    //   //         <KeyboardArrowRight />
    //   //       ) : (
    //   //         <KeyboardArrowLeft />
    //   //       )} */}
    //   //       Back
    //   //     </Button>
    //   //   }
    // />
    <div class="box">
      <div
        class={`${activeStep === 1 ? "step1" : "step0"} ${
          activeStep === 4 ? "step4" : "step0"
        } ${activeStep === 3 ? "step3" : "step0"} ${
          activeStep === 2 ? "step2" : "step0"
        }`}
        style={{
          height: "4px",
          //   width: "100%",
          backgroundColor: "#f50057",
        }}
      ></div>
    </div>
  );
}
