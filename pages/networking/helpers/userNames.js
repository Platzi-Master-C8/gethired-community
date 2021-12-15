const faker = require('faker');

const getUserNames = (discussions) => {
  var userNames = [];
  discussions.map((index) => {
    userNames.push({
      id: index.created_by,
      name: faker.name.findName(),
    });
  });
  return userNames;
};

export { getUserNames };
