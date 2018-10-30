import * as faker from 'faker';

const mocks = {
  String: () => 'It works!',
  Query: () => ({
    author: (_root, args) => ({ firstName: args.firstName, lastName: args.lastName }),
  }),
  Author: () => ({ firstName: () => faker.name.firstName(), lastName: () => faker.name.lastName }),
  Post: () => ({ title: faker.lorem.sentence(), text: faker.lorem.text() }),
};

export default mocks;
