import React from 'react';
import { useDispatch } from 'react-redux';
import Button from 'components/Button';
import { logout } from 'redux/auth/actions';
import SignOutIcon from 'assets/icons/logout.svg';
import './style.scss';

const SignOut = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(logout());
  };
  return (
    <Button type="button" onClick={handleOnClick} className="Button__signOut">
      Cerrar sesión
      <img src={SignOutIcon} alt="icon" />
    </Button>
  );
};

export default SignOut;
