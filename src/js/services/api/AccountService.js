// import axios from 'axios';
import BaseService from './BaseService';
// import Config from './Config';

export default class AccountService extends BaseService {
  static endpoint = 'account';

  static getAccount(sessionID) {
    // const params = {
    //   session_id: sessionID
    // };
    // console.warn(params)
    // return axios({
    //   method: 'get',
    //   url: Config.generateURL(this.endpoint),
    //   data: Config.formatParams(params),
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   }
    // });
  }
}
