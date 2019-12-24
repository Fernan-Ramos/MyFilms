import BaseService from './BaseService';

export default class MovieService extends BaseService {
  static endpoint = 'movie/';


  // static async getImages(pk) {
  //   const endpoint = `${this.endpoint}${pk}/images`;
  //   const response = await axios({ method: 'GET', url: Config.generateURI(endpoint, null, true) });
  //   try {
  //     return response.data;
  //   } catch (error) {
  //     return error;
  //   }
  // }
}
