import React from 'react';
import { useDispatch } from 'react-redux';
import { signInGoogle } from 'js/redux/auth/actions';
import GoogleIcon from 'js/icons/GoogleIcon';
import Button from 'js/components/Button';

const GoogleForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(signInGoogle());
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Button className="google" type="submit">
        <>
          <span className="google__icon">
            <GoogleIcon />
          </span>
          Sign In with Google
        </>
      </Button>
    </form>
  );
};

export default GoogleForm;
