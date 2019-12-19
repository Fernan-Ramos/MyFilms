import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import AsyncSelect from 'react-select/async';
import SearchService from '../../services/api/SearchService';
import './style.scss';
import routeManager from '../../services/routeManager';
import { routeCodes } from '../../constants/routes';


const filterFilm = response => response.map(item => ({ value: item.id, label: item.title }));

const loadOptions = async (inputValue, callback) => {
  const response = await SearchService.list({ query: inputValue });
  callback(filterFilm(response.results));
};

class Header extends Component {
  handleChange = (film) => {
    routeManager.push(`${routeCodes.FILM}/${film.value}`);
  };

  render() {
    return (
      <header className="AppHeader">
        <div className="AppHeader__select">
          <AsyncSelect
            cacheOptions
            loadOptions={loadOptions}
            defaultOptions
            onChange={this.handleChange}
          />
        </div>

        {/* <SignOut /> */}
      </header>
    );
  }
}
export default Header;
