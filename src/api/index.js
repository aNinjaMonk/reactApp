
const restClient = require('./restClient');
const firebaseClient = require('./firebaseClient');
const mockClient = require('./mockClient');
const sqlClient = require('./sqlClient');
const mongoClient = require('./mongoClient');

export default {
  db: restClient,
  sql: sqlClient,
  mock: mockClient
}

//const stripe = require('stripe')("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
