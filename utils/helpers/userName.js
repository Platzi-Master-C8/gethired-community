const faker = require('faker');

const getUserName = () => {
  return faker.name.findName();
};

export { getUserName };
