import React from "react";
import { TextField, Button, Card } from "@material-ui/core";

function PresonalInfo({ props }) {
  const { formData, navigation, setForm } = props;

  return (
    <div>
      {" "}
      <div className="container">
        <div className="row">
          <label className="mt-2 mb-2">Account type</label>
          <div className="col">
            <TextField
              id="outlined-secondary"
              // label="firstName"
              placeholder="firstName"
              variant="outlined"
              color="secondary"
              size="small"
            />
          </div>
        </div>
        <div className="row mt-5">
          <label className="mt-2 mb-2">Solution</label>

          <div className="col">
            <TextField
              id="outlined-secondary"
              // label="firstName"
              placeholder="firstName"
              variant="outlined"
              color="secondary"
              size="small"
            />
          </div>

          <div className="col">
            <TextField
              id="outlined-secondary"
              // label="firstName"
              placeholder="firstName"
              variant="outlined"
              color="secondary"
              size="small"
            />
          </div>
          <div className="col">
            <TextField
              id="outlined-secondary"
              // label="firstName"
              placeholder="firstName"
              variant="outlined"
              color="secondary"
              size="small"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-8"></div>
          <div className="col-4  mt-5">
            {" "}
            <Button
              onClick={() => navigation.next()}
              style={{ marginLeft: "70px" }}
              variant="contained"
              color="secondary"
            >
              next
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PresonalInfo;
