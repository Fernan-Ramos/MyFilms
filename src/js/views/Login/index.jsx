import React, { PureComponent } from 'react';
import { withFirebase } from 'js/components/Firebase';
import Button from 'js/components/Button';
import classNames from 'classnames';
import GoogleForm from './GoogleForm';
import SignIn from './SignIn';
import SignUp from './SignUp';
import './style.scss';

const GoogleSignInForm = withFirebase(GoogleForm);
const SignInForm = withFirebase(SignIn);
const SignUpForm = withFirebase(SignUp);

const Login = ({ showRegister }) => (
  <>
    <h1>Welcome back!</h1>
    <SignInForm />
    <GoogleSignInForm />
    <span className="">You dont have a account ? <button className="Button" type="button" onClick={showRegister}>Sign Up now!</button></span>
  </>
);

const Register = ({ showRegister }) => (
  <>
    <h1>Welcome back!</h1>
    <SignUpForm />
    <span className=""><button className="Button" type="button" onClick={showRegister}>Sign In</button></span>
  </>
);

class LoginView extends PureComponent {
  state = {
    signUp: false,
    showRegister: false,
    initialState: true,
  };

  showRegister = () => {
    const { signUp, showRegister } = this.state;
    this.setState({ signUp: !signUp, initialState: false });
    setTimeout(() => {
      this.setState({ showRegister: !showRegister });
    }, 300);
  }

 
  render() {
    const { signUp, showRegister, initialState } = this.state;
    const contenClassNames = classNames('LoginWrapper__form-content', {
      translate: signUp && !initialState,
    });
    const imageClassNames = classNames('LoginWrapper__form-image', {
      translate: signUp && !initialState,
    });
    return (
      <div className="LoginWrapper">
        <div className="LoginWrapper__form">
          <div className={contenClassNames}>
            {!showRegister ? <Login showRegister={this.showRegister} /> : <Register showRegister={this.showRegister} />}
          </div>
          <div className={imageClassNames} />
        </div>
      </div>
    );
  }
}

export default LoginView;
