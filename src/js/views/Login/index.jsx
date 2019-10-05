import React, { PureComponent } from 'react';
import { withFirebase } from 'js/components/Firebase';
import LoginForm from './Form';
import './style.scss';
import GoogleForm from './GoogleForm';
import SignIn from './SignIn';

const SignUpForm = withFirebase(GoogleForm);
const SignInForm = withFirebase(SignIn);

class LoginView extends PureComponent {
  render() {
    return (
      <div className="LoginWrapper">
        <div className="LoginWrapper__form">
          <div className="LoginWrapper__form-content">
            <h1>Welcome back!</h1>
            <p>Start the adventure</p>
            {/* <LoginForm /> */}
            <SignInForm />
            <SignUpForm />
          </div>
          <div className="LoginWrapper__form-image" />
        </div>
      </div>
    );
  }
}

export default LoginView;
