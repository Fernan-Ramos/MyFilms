import React, { Component } from 'react';
import { routeCodes } from '../../constants/routes';
import routeManager from '../../services/routeManager';
import FilmSelect from '../FilmSelect';
import './style.scss';


class Header extends Component {
  handleOnChange = (film) => {
    routeManager.push(`${routeCodes.FILM}/${film.value}`);
  };

  render() {
    return (
      <header className="AppHeader">
        <div className="AppHeader__select">
          <FilmSelect placeholder="Buscar" onChange={this.handleOnChange} />
        </div>

        {/* <SignOut /> */}
      </header>
    );
  }
}
export default Header;
