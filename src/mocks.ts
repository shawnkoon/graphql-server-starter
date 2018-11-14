import * as faker from 'faker';

const mocks = {
  Author: () => ({ firstName: () => faker.name.firstName(), lastName: () => faker.name.lastName }),
  Post: () => ({ title: faker.lorem.sentence(), text: faker.lorem.text() }),
  Query: () => ({
    author: (_: any, args: any) => ({
      firstName: args.firstName,
      lastName: args.lastName,
    }),
  }),
  String: () => 'It works!',
};

export default mocks;
