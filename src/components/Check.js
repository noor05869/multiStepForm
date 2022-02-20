import React, { useState, useEffect } from "react";
import AppForm from "./AppForm";
import TellUsScreen from "./TellUsScreen";

let initialValues1 = {
  firstName: "",
  secondName: "",
  Solutions: "",
  acountType: "",
  startDate: "",
};

function Check({ steps, props }) {
  const [, setValues] = useState({});
  const { navigation } = props;

  const handleSubmit = ({ formValues }) => {
    console.log(formValues);
    navigation.next();
    // localStorage.setItem("first", JSON.stringify(data));
  };

  useEffect(() => {
    // async function fetchData() {
    //   const data = JSON.parse(localStorage.getItem("first"));
    //   if (data) {
    //     initialValues1 = data;
    //    f setValues((prev) => ({ ...prev, ...data }));
    //   }
    // }
    // fetchData();
  }, []);
  return (
    <div>
      {" "}
      <AppForm initialValues={initialValues1} handleSubmit={handleSubmit}>
        <TellUsScreen steps={steps} />
      </AppForm>
    </div>
  );
}

export default Check;
