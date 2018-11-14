import { IResolverOptions } from 'graphql-tools';
import { Author } from './Author';

export interface Query extends IResolverOptions {
  author?: (firstName: string, lastName: string) => Promise<Author>;
  allAuthors?: () => Promise<Author[]>;
  getFortuneCookie: () => Promise<string>;
}

export const queryTypeDef = `
type Query {
  author(firstName: String, lastName: String): Author
  allAuthors: [Author]
  getFortuneCookie: String
}
`;
