import React, { useState } from "react";
import { Form, Button, Header } from "semantic-ui-react";
import "../styles/Login2.css";
import bg from "../assets/images/login-bg2.jpg";

function Login() {
  const [authenticating, isAuthenticating] = useState(false);

  const handleSubmit = (e) => {
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
          <Form onSubmit={handleSubmit}>
            <Form.Input
              aria-describedby="Maric number"
              placeholder="Matric Number"
              type="text"
              default
              label="Matric Number"
            ></Form.Input>
            <Form.Input
              aria-describedby="password"
              placeholder="Password"
              type="password"
              label="Password"
            ></Form.Input>
            <Button loading={authenticating} color="teal" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Login;
