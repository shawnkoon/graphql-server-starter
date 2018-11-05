import axios from 'axios';

export default class FortuneCookie {
  constructor() {
    this.baseUrl = 'http://fortunecookieapi.herokuapp.com/v1/cookie';
  }

  async getOne() {
    return axios.get(this.baseUrl).then(({ data }) => data[0].fortune.message);
  }
}
