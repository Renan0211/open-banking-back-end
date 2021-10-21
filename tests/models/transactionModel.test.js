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

const transactionModel = require('../../src/models/Transaction');

describe('The bank model', () => {
  const Transaction = transactionModel(sequelize, dataTypes);
  const transaction = new Transaction();
  it('should have the name "Transaction"', () => {
    checkModelName(Transaction, 'Transaction');
  });

  it('should have the right properties', () => {
    context('properties', () => {
      ['sendingAccountId', 'receivingAccountId', 'value', 'transactionType'].forEach(checkPropertyExists(transaction))
    });
  });
});
