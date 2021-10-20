const chai = require('chai');
const sinonChai = require('sinon-chai');
const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists
} = require('sequelize-test-helpers');

chai.should();
chai.use(sinonChai);

const userModel = require('../../src/models/User');

describe('The User model', () => {
  const User = userModel(sequelize, dataTypes);
  const user = new User();
  it('should have the name "User"', () => {
    checkModelName(User, 'User');
  });

  it('should have the right properties', () => {
    context('properties', () => {
      ['firstName', 'lastName', 'password', 'addressId'].forEach(checkPropertyExists(user));
    });
  });
});
