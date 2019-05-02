import axios from 'axios';

import Config from './Config';

export default class BaseService {
  static endpoint = null;


  static list(filters, page, sortBy) {
    return new Promise((resolve, reject) => {
      let params = Object.assign({}, filters);

      if (page) {
        params.page = page + 1;
      }

      if (sortBy) {
        params = Object.assign(params, this.getSortByQueryParams(sortBy));
      }
      axios({
        method: 'GET',
        url: Config.generateURI(this.endpoint, params),
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
      const endpoint = `${this.endpoint}${pk}`;
      axios({
        method: 'GET',
        url: Config.generateURI(endpoint),
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
