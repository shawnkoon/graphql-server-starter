import { cookieApi } from './store';

const resolvers = {
  Query: {
    getFortuneCookie() {
      return cookieApi.getOne();
    },
  },
};

export default resolvers;
