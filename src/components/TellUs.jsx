import React, { useState, useEffect } from "react";
import TellUsScreen from "./TellUsScreen";

let initialValues1 = {
  irstName: "",
  secondName: "",
  Solutions: "",
  acountType: "",
};

function Tellus({ steps, props }) {
  const [, setValues] = useState({});
  const { formData, navigation, setForm } = props;

  const onSubmit = (data) => {
    console.log(data);
    navigation.next();
    localStorage.setItem("first", JSON.stringify(data));
  };

  useEffect(() => {
    async function fetchData() {
      const data = JSON.parse(localStorage.getItem("first"));
      if (data) {
        FormValues = data;
        setValues((prev) => ({ ...prev, ...data }));
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <TellUsScreen
        step={steps}
        initialValues={initialValues1}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default Tellus;
