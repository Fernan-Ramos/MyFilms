import axios from 'axios/index';

import MovieConfig from './MovieConfig';

export default class MovieBaseService {
  static endpoint = null;
  

  static list(filters, page, sortBy) {
    return new Promise((resolve, reject) => {
      let params = Object.assign({}, filters);

      if (page) {
        params['page'] = page + 1;
      }

      if (sortBy) {
        params = Object.assign(params, this.getSortByQueryParams(sortBy));
      }
      axios({
        method: 'GET',
        url: MovieConfig.generateURI(this.endpoint, params),
      }).then(
        (response) => {
          resolve(response.data);
        },
        (error) => {
          reject(error);
        },
      );
    });
  }

  static detail(pk) {
    return new Promise((resolve, reject) => {
      const endpoint = `${this.endpoint}${ pk }`;
      axios({
        method: 'GET',
        url: MovieConfig.generateURI(endpoint),
      }).then(
        (response) => {
          resolve(response.data);
        },
        (error) => {
          reject(error);
        },
      );
    });
  }

}
