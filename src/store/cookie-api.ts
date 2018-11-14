import axios from 'axios';

export class FortuneCookie {
  private baseUrl: string;

  constructor() {
    this.baseUrl = 'http://fortunecookieapi.herokuapp.com/v1/cookie';
  }

  public async getOne(): Promise<string> {
    return await axios.get(this.baseUrl).then(({ data }): string => data[0].fortune.message);
  }
}
