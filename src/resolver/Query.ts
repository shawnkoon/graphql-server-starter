import { IResolvers } from 'graphql-tools';
import { cookieApi } from '../store';
import { Query } from '../type/Query';

export const queryResolvers: IResolvers = {
  Query: {
    getFortuneCookie() {
      return cookieApi.getOne();
    },
  } as Query,
};
