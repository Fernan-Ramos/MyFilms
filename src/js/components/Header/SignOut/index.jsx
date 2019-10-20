import React from 'react';
import Button from 'js/components/Button';
import { withFirebase } from 'js/components/Firebase';
import SignOutIcon from '../../../../assets/icons/logout.svg';
import './style.scss';

const SignOutButton = ({ firebase }) => (
  <Button type="button" onClick={firebase.doSignOut} className='Button__signOut'>
    <img src={SignOutIcon} alt="icon" />
  </Button>
);
export default withFirebase(SignOutButton);
