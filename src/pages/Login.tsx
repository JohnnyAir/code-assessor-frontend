import React, { useState } from "react";
import { Form, Button, FormProps } from "semantic-ui-react";
import bg from "../images/login-bg2.jpg";

function Login() {
  const [authenticating, isAuthenticating] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>, data: FormProps) => {
    e.preventDefault();
    console.log(data)
    isAuthenticating(true);
  };

  return (
    <div className="login login-container">
      <div className="login-image">
        <div className="img-con" style={{ backgroundImage: `url(${bg})` }}></div>
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
