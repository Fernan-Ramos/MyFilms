import React from 'react';
import { Link } from 'react-router-dom';

const MenuLink = ({ route, label, handleOnClick }) => (
  <Link to={route} onClick={handleOnClick}>
    {label}
  </Link>
);

export default MenuLink;
