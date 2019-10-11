
const db = require('./restClient');
const firebaseClient = require('./firebaseClient');
const mockClient = require('./mockClient');
export default {
  db: db,
  mock: mockClient
}

//const stripe = require('stripe')("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
