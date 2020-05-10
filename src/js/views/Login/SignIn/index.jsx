import React from 'react';
import { useDispatch } from 'react-redux';
import { signInEmail } from 'js/redux/auth/actions';
import Button from 'js/components/Button';
import Input from 'js/components/Input';

const SignIn = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    dispatch(signInEmail(username, password));
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email" name="username" required />
        <Input type="password" placeholder="Contraseña" name="password" required />
        <Button className="primary" type="submit">
          <span>Login</span>
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
