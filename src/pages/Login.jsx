import React, { useState } from "react";
import { Row, FormGroup, Input, Button } from "reactstrap";

import "../styles/Login.css";
import bg from "../assets/images/login-bg2.jpg";
import LoaderIcon from "../assets/svg/Loader";

function Login() {
  const [authenticating, isAuthenticating] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    isAuthenticating(true);
  };

  return (
    <div className="login login-container">
      <div className="login-image">
        <div
          className="img-con"
          style={{ backgroundImage: `url(${bg})` }}
        ></div>
        <div className="login-img-overlay"></div>
      </div>
      <div className="login-form">
        <div className="form-contianer">
          <form onSubmit={handleSubmit}>
            <Row>
              <FormGroup>
                <label htmlFor="exampleInputEmail1">Matric Number</label>
                <Input
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Matric Number"
                  type="text"
                  default
                ></Input>
              </FormGroup>
            </Row>
            <Row>
              <FormGroup>
                <label htmlFor="2">Password</label>
                <Input
                  id="2"
                  aria-describedby="emailHelp"
                  placeholder="Password"
                  type="password"
                ></Input>
              </FormGroup>
            </Row>
            <Row>
              <Button color="success" type="submit">
                {!authenticating ? "Login" : "Please wait"}
                {authenticating && <LoaderIcon width="40px" height="18px" />}
              </Button>
            </Row>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
