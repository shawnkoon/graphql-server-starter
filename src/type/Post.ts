import { Author } from './Author';

export interface Post {
  id: number;
  title: string;
  text: string;
  views: number;
  author: Author;
}

export const postTypeDef = `
type Post {
  id: Int
  title: String
  text: String
  views: Int
  author: Author
}
`;
