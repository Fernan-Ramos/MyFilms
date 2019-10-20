import React, * as react from 'react';
import { connect } from 'react-redux';
import Button from 'js/components/Button';
import Input from 'js/components/Input';
import { login } from 'js/actions/auth';
import { addAsync, deleteAsync } from 'js/actions/async';

class SignUp extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null,
    };
  }

  handleSubmit = async (event) => {
    const {
      addAsyncFunction,
      deleteAsyncFunction,
      loginFunction,
      firebase
    } = this.props;

    const {
      username,
      email,
      passwordOne,
    } = this.state;
    event.preventDefault();
    addAsyncFunction();

    try {
      const authUser = await firebase.doCreateUserWithEmailAndPassword(email, passwordOne);
      await firebase.user(authUser.user.uid).set({ username, email }, { merge: true });
      await firebase.doSendEmailVerification();
      await loginFunction({ username, request_token: authUser.user.refreshToken });
    } catch (error) {
      console.error(error);
    }
    event.preventDefault();
    deleteAsyncFunction();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };


  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
    } = this.state;

    const isInvalid = passwordOne !== passwordTwo
    || passwordOne === ''
    || email === ''
    || username === '';
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            value={username}
            placeholder="First Name"
            name="username"
            onChange={this.onChange}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.onChange}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            name="passwordOne"
            value={passwordOne}
            onChange={this.onChange}
            required
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            name="passwordTwo"
            value={passwordTwo}
            onChange={this.onChange}
            required
          />
          <Button className="primary" type="submit" disabled={isInvalid}>
            <span>Sign Up</span>
          </Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginFunction: tokenData => login(tokenData, dispatch),
  addAsyncFunction: () => dispatch(addAsync('login')),
  deleteAsyncFunction: () => dispatch(deleteAsync('login'))
});

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
