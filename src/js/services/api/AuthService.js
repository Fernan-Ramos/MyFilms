import axios from 'axios';
import cookies from 'js/services/cookies';
import routeManager from 'js/services/routeManager';
import Config from './Config';
import BaseService from './BaseService';

export default class AuthService extends BaseService {
  static endpoint = 'authentication/token/';

  static cookieName = 'myFilms_session';

  static getToken() {
    const endpoint = 'authentication/token/new?';
    return axios.get(Config.generateURI(endpoint));
  }

  static initToken(tokenData) {
    cookies.set(this.cookieName, tokenData, { expires: new Date(tokenData.expires_at), path: '/' });
  }

  static getCookie() {
    return cookies.get(this.cookieName);
  }

  static isLoggedIn() {
    return cookies.get(this.cookieName) === this.cookieName;
  }

  static login(query) {
    const endpoint = 'authentication/token/validate_with_login';
    return axios.post(Config.generateURI(endpoint, query));
  }

  static logout() {
    const endpoint = 'authentication/session';
    return axios.delete(Config.generateURI(endpoint));
  }

  static goToLoggedInInitialPage() {
    routeManager.push('/movies');
  }
}
