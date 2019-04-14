import axios from "axios";
import Config from "./Config";
import BaseService from "./BaseService";

export default class AuthService extends BaseService {
  static endpoint = "authentication/token/";

  static token() {
    const endpoint = "authentication/token/new?";
    return axios.get(Config.generateURI(endpoint));
  }

  static login(query) {
    const endpoint = "authentication/token/validate_with_login";
    return axios.post(Config.generateURI(endpoint, query));
  }

  static logout() {
    const endpoint = "authentication/session";
    return axios.delete(Config.generateURI(endpoint));
  }
}
