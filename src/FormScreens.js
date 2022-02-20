import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import PresonalInfo from "./components/PresonalInfo";
import ReviewApp from "./components/ReviewApp";
import Terms from "./components/Terms";
import IncomeDetails from "./components/IncomeDetails";
import Documentation from "./components/Documentation";
import Check from "./components/Check";
import TellUs from "./components/TellUsScreen";
import Thanks from "./components/Thanks";
const defaultData = {
  firstName: "",
  lastName: "",
  solution: "",
  acountType: "",
};

const steps = [
  { id: "Tell Us more" },

  { id: "Income Details" },
  { id: "documentation" },

  { id: "Terms &condition" },
  { id: "Review Application" },
  { id: "Thanks" },
];

function FormScreens() {
  const [formData, setForm] = useForm(defaultData);

  const { step, navigation } = useStep({ initialStep: 0, steps });
  console.log(step);

  const props = { formData, setForm, navigation };
  switch (step.id) {
    case "Tell Us more":
      return (
        <TellUs
          defaultData={defaultData}
          steps={steps}
          props={props}
          props={props}
        />
      );

    case "Income Details":
      return <IncomeDetails steps={steps} props={props} />;
    case "documentation":
      return <Documentation steps={steps} props={props} />;
    case "Terms &condition":
      return <Terms steps={steps} props={props} />;
    case "Review Application":
      return <ReviewApp steps={steps} props={props} />;
    case "Thanks":
      return <Thanks />;
  }

  return <div>FormScreens</div>;
}

export default FormScreens;
