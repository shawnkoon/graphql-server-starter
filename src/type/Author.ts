import { Post } from './Post';

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  posts: Post[];
}

export const authorTypeDef = `
type Author {
  id: Int
  firstName: String
  lastName: String
  posts: [Post]
}
`;
