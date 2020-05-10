import React from 'react';
import './style.scss';

const MenuButton = () => {
  const handleOnClick = (e) => {
    e.currentTarget.classList.toggle('is-open');
    e.currentTarget.nextSibling.classList.toggle('active');
  };

  return (
    <button id="burger" type="button" className="MenuButton" onClick={(e) => handleOnClick(e)}>
      <span className="burger" />
    </button>
  );
};

export default MenuButton;
