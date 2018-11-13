import axios from 'axios';

export class FortuneCookie {
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'http://fortunecookieapi.herokuapp.com/v1/cookie';
  }

  public async getOne() {
    return axios.get(this.baseUrl).then(({ data }) => data[0].fortune.message);
  }
}
