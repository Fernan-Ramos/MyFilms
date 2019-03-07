import URI from 'urijs';

const baseURL = 'http://localhost:8080/';

class BaseConfig {

  static generateURL(path) {
    return baseURL + path;
  }

  static generateURI(path, query) {
    const uri = new URI(this.generateURL(path));
    return uri.toString();
  }
}

export default BaseConfig;