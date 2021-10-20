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

const addressModel = require('../../src/models/Address');
const userModel = require('../../src/models/User');

describe('The address model', () => {
  const Address = addressModel(sequelize, dataTypes);
  const User = userModel(sequelize, dataTypes);
  const address = new Address();
  it('should have the name "Address"', () => {
    checkModelName(Address, 'Address');
  });

  it('should have the right properties', () => {
    context('properties', () => {
      ['country', 'state', 'city', 'street', 'number'].forEach(checkPropertyExists(address))
    });
  });
});
