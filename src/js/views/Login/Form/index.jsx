import React, * as react from 'react';
import { connect } from 'react-redux';
import Button from 'js/components/Button';
import Input from 'js/components/Input';
import AuthService from 'js/services/api/AuthService';
import { login } from 'js/redux/actions/auth';
import { addAsync, deleteAsync } from 'js/redux/actions/async';
import AccountService from 'js/services/api/AccountService';

class LoginForm extends react.PureComponent {
  handleSubmit = async (event) => {
    const {
      addAsyncFunction,
      deleteAsyncFunction,
      loginFunction,
    } = this.props;
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    addAsyncFunction();
    const token = await this.getToken();
    const tokenData = await this.login(username, password, token);
    if (tokenData) {
      const session = await this.getSession(token);
      const accountData = await this.getAccount(session);
      await loginFunction(this.getAuthData(tokenData.data, session.data, accountData));
    }

    deleteAsyncFunction();
  };

   getToken = async () => {
     try {
       return await AuthService.getToken();
     } catch (tokenData) {
       console.error(tokenData.status_message);
     }
   };

  login = async (username, password, token) => {
    try {
      return await AuthService.login({
        password,
        username,
        request_token: token.data.request_token
      });
    } catch (tokenData) {
      console.error(tokenData.status_message);
    }
  };

  getSession = async (token) => {
    try {
      return await AuthService.getSession({
        request_token: token.data.request_token
      });
    } catch (tokenData) {
      console.error(tokenData.status_message);
    }
  };

  getAccount = async (session) => {
    try {
      return await AccountService.list({
        session_id: session.data.session_id
      });
    } catch (tokenData) {
      console.error(tokenData.status_message);
    }
  };

  getAuthData = (tokenData, session, accountData) => {
    const authData = {};
    authData.request_token = tokenData.request_token;
    authData.expires_at = tokenData.expires_at;
    authData.session_id = session.session_id;
    authData.username = accountData.username;
    authData.avatar = accountData.avatar;
    authData.iso_3166_1 = accountData.iso_3166_1;
    return authData;
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
          <Button className="primary" type="submit">Login</Button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loginFunction: tokenData => login(tokenData, dispatch),
  addAsyncFunction: () => dispatch(addAsync('login')),
  deleteAsyncFunction: () => dispatch(deleteAsync('login')),
});

export default connect(
  null,
  mapDispatchToProps
)(LoginForm);
