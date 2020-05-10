import React from 'react'; 
import { useDispatch } from 'react-redux';
import { logout } from 'js/redux/auth/actions';
import Button from 'js/components/Button';
import SignOutIcon from '../../../../assets/icons/logout.svg';
import './style.scss';

const SignOut = () => {
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(logout());
  };
  return (
    <Button type="button" onClick={handleOnClick} className="Button__signOut">
      <img src={SignOutIcon} alt="icon" />
    </Button>
  );
};

export default SignOut;
