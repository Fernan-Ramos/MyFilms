import React, * as react from "react";
import {connect} from 'react-redux';
import Button from "js/components/Button";
import Input from "js/components/Input";
import AuthService from "js/services/api/AuthService";
import {setInfo} from 'js/actions/auth';

class LoginForm extends react.PureComponent {
  handleSubmit = async event => {
    const {setInfo} = this.props;
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    try {
      const token = await AuthService.token();
      await AuthService.login({
        password: password,
        username: username,
        request_token: token.data.request_token
      });
      setInfo(token.data.request_token);
      AuthService.goToLoggedInInitialPage();
    } catch (error) {}
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

const mapDispatchToProps = (dispatch) => {
  return {
    setInfo: (info) => dispatch(setInfo(info)),
  };
};

export default connect(null,mapDispatchToProps)(LoginForm);
