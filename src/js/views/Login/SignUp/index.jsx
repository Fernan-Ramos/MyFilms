import React, * as react from 'react';
import { connect } from 'react-redux';
import Button from 'js/components/Button';
import Input from 'js/components/Input';
import { login } from 'js/actions/auth';
import { addAsync, deleteAsync } from 'js/actions/async';

class SignUp extends react.PureComponent {
  handleSubmit = async (event) => {
    const {
      addAsyncFunction,
      deleteAsyncFunction,
      loginFunction,
      firebase
    } = this.props;


    event.preventDefault();

    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    addAsyncFunction();
    try {
      const response = await firebase.doCreateUserWithEmailAndPassword(username, password);
      await loginFunction({ username, request_token: response.user.refreshToken });
    } catch (error) {
      console.error(error);
    }
    event.preventDefault();
    deleteAsyncFunction();
  };


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input
            type="text"
            placeholder="First Name"
            name="firstname"
            required
          />
          <Input
            type="text"
            placeholder="Last Name"
            name="lastname"
            required
          />
          <Input
            type="email"
            placeholder="Email"
            name="username"
            required
          />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <Input
            type="password"
            placeholder="Confirm Password"
            name="confirmpassword"
            required
          />
          <Button className="primary" type="submit">
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
