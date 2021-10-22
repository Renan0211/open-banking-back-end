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

const bankModel = require('../../src/models/Bank');

describe('The bank model', () => {
  const Bank = bankModel(sequelize, dataTypes);
  const bank = new Bank();
  it('should have the name "Bank"', () => {
    checkModelName(Bank, 'Bank');
  });

  it('should have the right properties', () => {
    context('properties', () => {
      ['name', 'country'].forEach(checkPropertyExists(bank))
    });
  });
});
