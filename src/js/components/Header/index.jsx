import React from 'react';
import routeManager from 'js/services/routeManager';
import FilmSelect from 'js/components/FilmSelect';
import { routeCodes } from 'js/constants/routes';
import './style.scss';

const Header = () => {
  const handleOnChange = (film) => {
    routeManager.push(`${routeCodes.FILM}/${film.value}`);
  };

  return (
    <header className="AppHeader">
      <div className="AppHeader__select">
        <FilmSelect placeholder="Buscar" onChange={handleOnChange} />
      </div>
    </header>
  );
};
export default Header;
