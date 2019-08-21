const axios = require('axios');
const STRIPE_BASE = "https://api.stripe.com";
const API_BASE = "http://1bba75fe.ngrok.io";
//const stripe = require('stripe')("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

export function getData() {
  axios.get("https://cors-anywhere.herokuapp.com/"+ API_BASE + '/hello', function(data,error) {
    console.log("Info" + " " + data + " " + error);
  });
}
