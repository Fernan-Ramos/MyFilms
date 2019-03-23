import URI from "urijs";

const baseURL = "https://api.themoviedb.org/3/";
const API_Key = { api_key: "6d263bbd9d77ec9e07d377c76bf70f0a" };

class MovieConfig {
  static generateURL(path) {
    return baseURL + path;
  }

  static generateURI(path, query) {
    const uri = new URI(this.generateURL(path));
    uri.query(API_Key);
    if (query) {
      uri.query(query);
    }
    return uri.toString();
  }
}

export default MovieConfig;
