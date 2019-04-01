import React, { PureComponent } from "react";
import LoginForm from "./Form";
import "./style.scss";

class LoginView extends PureComponent {
  render() {
    return (
      <div className="LoginWrapper">
        <div className="LoginWrapper__form">
          <div className="LoginWrapper__form-content">
            <h1>Welcome back!</h1>
            <p>Start the adventure</p>
            <LoginForm />
          </div>
          <div className="LoginWrapper__form-image" />
        </div>
      </div>
    );
  }
}

export default LoginView;
