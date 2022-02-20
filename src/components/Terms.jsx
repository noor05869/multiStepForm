import { TextField, Button, Card } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import ProgressMobileStepper from "./progressBar";
import { useForm } from "react-hook-form";
function Terms({ steps, props, defaultData }) {
  const { navigation, formData, setForm } = props;

  const [firstname3, setfirstname] = useState();
  const [LastName3, setLastname] = useState();

  const [Acc3, setAcc] = useState();

  const [Sol3, setsol] = useState();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(formData);
  const [activeStep, setActiveStep] = React.useState(0);
  const { firstName, lastName, solution, acountType } = formData;
  const onSubmit = (data) => {
    navigation.next();
    localStorage.setItem("first", JSON.stringify(data));

    console.log(data);
  };
  const [, setValues] = useState({});

  useEffect(() => {
    const firstname3 = localStorage.getItem("firstName3");
    if (firstname3) {
      setActiveStep(4);
      setfirstname(firstname3);
    }
    const LastName3 = localStorage.getItem("lastName3");
    if (LastName3) {
      setLastname(LastName3);
    }
    const Acc3 = localStorage.getItem("accountType3");
    if (Acc3) {
      setAcc(Acc3);
    }
  }, []);
  function handleFirst(e) {
    setfirstname(e.target.value);
    localStorage.setItem("firstName3", e.target.value);
    if (e.target.value.length > 0) {
      setActiveStep(1);
    } else {
      setActiveStep(0);
    }
  }
  function handleSecond(e) {
    setLastname(e.target.value);
    localStorage.setItem("lastName3", e.target.value);
    if (e.target.value.length > 0) {
      setActiveStep(4);
    } else {
      setActiveStep(3);
    }
  }
  function handlethird(e) {
    setAcc(e.target.value);
    localStorage.setItem("accountType3", e.target.value);
    if (e.target.value.length > 0) {
      setActiveStep(2);
    } else {
      setActiveStep(1);
    }
  }
  function handlefourth(e) {
    if (e.target.value.length > 0) {
      setActiveStep(2);
    } else {
      setActiveStep(1);
    }
  }
  const currencies = [
    {
      value: "",
      label: "Select",
    },
    {
      value: "asd",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  return (
    <div>
      <div className="container justify-content-around d-flex ">
        {steps.map((step) => (
          <>
            <ul className="stups">
              <li
                className={`${
                  step.id === "Terms &condition" ? "stepsss " : ""
                } `}
              >
                {step.id}
                <ProgressMobileStepper
                  activeStep={step.id === "Terms &condition" ? activeStep : 0}
                />
              </li>
            </ul>
          </>
        ))}
      </div>
      <div className="container justify-content-center">
        <h2>Dcumentation</h2>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="row">
            <label className="mt-2 mb-2">Account type</label>
            <div className="col">
              <TextField
                // required
                value={firstname3}
                name="firstName"
                {...register("firstName", { required: true })}
                onChange={handleFirst}
                id="outlined-secondary"
                // label="firstName"
                placeholder="firstName"
                variant="outlined"
                color="secondary"
                size="small"
              />
              {firstname3 && firstname3.length > 0 ? (
                ""
              ) : (
                <p style={{ color: "red" }}>
                  {" "}
                  {errors.firstName?.type === "required" &&
                    "AcountType is required"}
                </p>
              )}
              {/* <button onClick={handleClick}>check</button> */}
            </div>
          </div>
          <div className="row mt-5">
            <label className="mt-2 mb-2">Solution</label>

            <div className="col">
              <TextField
                {...register("Solutions", { required: true })}
                name="Solution"
                required
                onChange={handlefourth}
                size="small"
                fullWidth
                color="secondary"
                id="outlined-select-currency-native"
                select
                SelectProps={{
                  native: true,
                }}
                variant="outlined"
              >
                <option>label</option>
                <option value="currrent">current</option>
              </TextField>
            </div>

            <div className="col">
              <TextField
                {...register("AcountType", { required: true })}
                id="outlined-secondary"
                onChange={handlethird}
                value={Acc3}
                fullWidth
                // label="firstName"
                placeholder="firstName"
                variant="outlined"
                color="secondary"
                size="small"
              />{" "}
              {Acc3 && Acc3.length > 0 ? (
                ""
              ) : (
                <p style={{ color: "red" }}>
                  {" "}
                  {errors.AcountType?.type === "required" &&
                    "FirstName is required"}
                </p>
              )}
            </div>
            <div className="col">
              <TextField
                {...register("secondName", { required: true })}
                id="outlined-secondary"
                onChange={handleSecond}
                fullWidth
                // label="firstName"
                value={LastName3}
                placeholder="firstName"
                variant="outlined"
                color="secondary"
                size="small"
              />
              {LastName3 && LastName3.length > 0 ? (
                ""
              ) : (
                <p style={{ color: "red" }}>
                  {" "}
                  {errors.AcountType?.type === "required" &&
                    "SecondName is required"}
                </p>
              )}
            </div>
          </div>
          <div class="row">
            <div class="col-8"></div>
            <div className="col-4  mt-5">
              {" "}
              <Button
                onClick={() => navigation.previous()}
                // style={{ marginLeft: "70px" }}
                variant="contained"
                color="secondary"
              >
                back
              </Button>{" "}
              <Button
                // onClick={() => navigation.next()}
                style={{ marginLeft: "70px" }}
                variant="contained"
                color="secondary"
                type="submit"
              >
                continue
              </Button>{" "}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Terms;
