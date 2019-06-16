import React from 'react';
import { Link } from 'react-router-dom';

const MenuLink = ({ route, label }) => (
  <Link to={route}>{label}</Link>
);

export default MenuLink;
