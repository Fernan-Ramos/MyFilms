import React from 'react';
import AsyncSelect from 'react-select/async';
import SearchService from '../../services/api/SearchService';



const filterFilm = response => response.map(item => ({ value: item.id, label: item.title, poster: item.poster_path }));

const loadOptions = async (inputValue, callback) => {
  const response = await SearchService.list({ query: inputValue });
  callback(filterFilm(response.results));
};

export default class FilmSelect extends React.Component {
  render() {
    const { placeholder, onChange } = this.props;
    return (
      <AsyncSelect
        placeholder={placeholder}
        cacheOptions
        loadOptions={loadOptions}
        defaultOptions
        onChange={onChange}
      />);
  }
}
