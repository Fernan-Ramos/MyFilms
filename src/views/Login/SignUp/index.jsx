import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'components/Button';
import Input from 'components/Input';
import { signUp } from 'redux/auth/actions';

const initialState = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const SignUp = () => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { username, email, passwordOne } = values;
    dispatch(signUp(email, passwordOne, username));
  };

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const { username, email, passwordOne, passwordTwo } = values;
  const isInvalid =
    passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={username}
          placeholder="First Name"
          name="username"
          onChange={onChange}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          name="passwordOne"
          value={passwordOne}
          onChange={onChange}
          required
        />
        <Input
          type="password"
          placeholder="Confirm Password"
          name="passwordTwo"
          value={passwordTwo}
          onChange={onChange}
          required
        />
        <Button className="primary" type="submit" disabled={isInvalid}>
          <span>Sign Up</span>
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
