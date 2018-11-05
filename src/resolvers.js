import { CookieApi } from '../store';

const resolvers = {
  Query: {
    getFortuneCookie() {
      return CookieApi.getOne();
    },
  },
};

export default resolvers;
