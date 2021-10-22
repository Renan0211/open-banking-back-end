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

const accountModel = require('../../src/models/Account');

describe('The Account model', () => {
  const Account = accountModel(sequelize, dataTypes);
  const account = new Account();
  it('should have the name "Account"', () => {
    checkModelName(Account, 'Account');
  });

  it('should have the right properties', () => {
    context('properties', () => {
      ['user_id', 'bank_id', 'balance'].forEach(checkPropertyExists(account));
    });

  });
});
