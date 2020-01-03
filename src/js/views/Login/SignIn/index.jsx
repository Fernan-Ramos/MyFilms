import React, * as react from 'react';
import { connect } from 'react-redux';
import Button from 'js/components/Button';
import Input from 'js/components/Input';
import { signInEmail } from 'js/redux/actions/auth';

class SignIn extends react.Component {
  handleSubmit = async (event) => {
    const { loginFunction } = this.props;
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    loginFunction(username, password);
    event.preventDefault();
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
  loginFunction: (username, password) => dispatch(signInEmail(username, password))
});

export default connect(null, mapDispatchToProps)(SignIn);
