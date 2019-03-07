import axios from 'axios/index';

import Config from './Config';

export default class BaseService {
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
      const endpoint = `${this.endpoint}${ pk }/`;
      axios({
        method: 'GET',
        url: Config.generateURL(endpoint),
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

  static create(data) {
    return new Promise((resolve, reject) => {
      axios({
        method: 'POST',
        url: Config.generateURL(this.endpoint),
        data: data,
        headers: {
          'x-requested-with': 'XMLHttpRequest',
        },
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

  static update(pk, data) {
    return new Promise((resolve, reject) => {
      const endpoint = `${this.endpoint}${ pk }/`;
      axios({
        method: 'PATCH',
        url: Config.generateURL(endpoint),
        data: data,
        headers: {
          'x-requested-with': 'XMLHttpRequest',
        },
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

  static delete(pk, data) {
    return new Promise((resolve, reject) => {
      const endpoint = `${this.endpoint}${ pk }/`;
      axios({
        method: 'DELETE',
        url: Config.generateURL(endpoint),
        data: data,
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
