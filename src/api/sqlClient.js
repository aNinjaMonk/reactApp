
const { User, sequelize } = require('./sqlModel');

export function getUser () {
  return User.findOne();
}
