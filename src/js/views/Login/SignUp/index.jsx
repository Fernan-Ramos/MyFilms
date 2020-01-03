import React, * as react from 'react';
import { connect } from 'react-redux';
import Button from 'js/components/Button';
import Input from 'js/components/Input';
import { signUp } from 'js/redux/actions/auth';

class SignUp extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null
    };
  }

  handleSubmit = async (event) => {
    const { boundSignUp } = this.props;
    const { username, email, passwordOne } = this.state;
    event.preventDefault();
    boundSignUp(email, passwordOne, username);
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const {
      username, email, passwordOne, passwordTwo
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
  boundSignUp: (email, password, username) => dispatch(signUp(email, password, username))
});

export default connect(null, mapDispatchToProps)(SignUp);
