import React, * as react from 'react';
import { connect } from 'react-redux';
import Button from 'js/components/Button';
import Input from 'js/components/Input';
import { login } from 'js/redux/actions/auth';
import { addAsync, deleteAsync } from 'js/redux/actions/async';

class SignIn extends react.PureComponent {
  handleSubmit = async (event) => {
    const {
      addAsyncFunction,
      deleteAsyncFunction,
      loginFunction,
      firebase
    } = this.props;
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    addAsyncFunction();
    try {
      const authUser = await firebase.doSignInWithEmailAndPassword(username, password);
      await loginFunction({ username, request_token: authUser.user.refreshToken });
    } catch (error) {
      console.error(error.message);
    }
    event.preventDefault();
    deleteAsyncFunction();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input type="email" placeholder="Email" name="username" required />
          <Input
            type="password"
            placeholder="Contraseña"
            name="password"
            required
          />
          <Button className="primary" type="submit">
            <span>Login</span>
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
)(SignIn);
