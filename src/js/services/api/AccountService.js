import axios from 'axios';
import BaseService from './BaseService';
import Config from './Config';

export default class AccountService extends BaseService {
  static endpoint = 'account';

  // static getAccount(sessionID) {
  //   return axios({
  //     method: 'get',
  //     url: Config.generateURL(this.endpoint),
  //     // params: Config.formatParams(sessionID),
  //   });
  // }


  static getCreatedLists(sessionID) {
    const endpoint = `${this.endpoint}/${sessionID}/lists`;
    return axios({
      method: 'get',
      url: Config.generateURL(endpoint),
      // data: Config.formatParams(params),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    });
  }
}
