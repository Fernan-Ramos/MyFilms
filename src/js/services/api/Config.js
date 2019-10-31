import URI from 'urijs';

const baseURL = '/api/3/';
const APIkey = '6d263bbd9d77ec9e07d377c76bf70f0a';

class Config {
  static generateURL(path) {
    return baseURL + path;
  }

  static formatParams(params) {
    const newParams = params;
    newParams.api_key = APIkey;
    return newParams;
  }

  static generateURI(path, query) {
    const uri = new URI(this.generateURL(path));
    uri.query({ api_key: APIkey });
    if (query) {
      uri.addQuery(query);
    }
    return uri.toString();
  }
}

export default Config;
