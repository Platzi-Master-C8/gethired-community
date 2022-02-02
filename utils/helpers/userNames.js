

const faker = require('faker');

const getUserNames = (discussions) => {
  let userNames = [];
  discussions.map((index) => {
    userNames.push({
      id: index.userId,
      name: faker.name.findName(),
    });
  });
  return userNames;
};

export { getUserNames };
