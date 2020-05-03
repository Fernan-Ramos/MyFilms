import React from 'react';
import AsyncSelect from 'react-select/async';
import PropTypes from 'prop-types';
import SearchService from 'js/services/api/SearchService';

const filterFilm = response => response.map(item => ({ value: item.id, label: item.title, poster: item.poster_path }));

const loadOptions = async (inputValue, callback) => {
  const response = await SearchService.list({ query: inputValue });
  callback(filterFilm(response.results));
};

const FilmSelect = ({
  placeholder, onChange, isMulti, options
}) => (
  <AsyncSelect
    value={options.filter(option => option.label)}
    placeholder={placeholder}
    cacheOptions
    loadOptions={loadOptions}
    defaultOptions
    onChange={onChange}
    isMulti={isMulti}
    options={options}
  />
);

FilmSelect.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape),
};

FilmSelect.defaultProps = {
  options: [],
};

export default FilmSelect;
