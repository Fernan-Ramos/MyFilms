import React, * as react from 'react';
import { connect } from 'react-redux';
import Button from 'js/components/Button';
import Input from 'js/components/Input';
import AuthService from 'js/services/api/AuthService';
import { login } from 'js/actions/auth';
import { addAsync, deleteAsync } from 'js/actions/async';

class LoginForm extends react.PureComponent {
  handleSubmit = async (event) => {
    const {
      addAsyncFunction, deleteAsyncFunction, loginFunction
    } = this.props;
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    try {
      addAsyncFunction();
      const token = await AuthService.getToken();
      const tokenData = await AuthService.login({
        password,
        username,
        request_token: token.data.request_token
      });
      await loginFunction(tokenData.data);
    } catch (tokenData) {
      console.error(tokenData.status_message);
    }
    deleteAsyncFunction();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Input type="text" placeholder="Usuario" name="username" required />
          <Input
            type="password"
            placeholder="Contraseña"
            name="password"
            required
          />
          <Button type="submit">Login</Button>
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

export default connect(null, mapDispatchToProps)(LoginForm);
