const Sequelize = require('sequelize');
const sequelize = new Sequelize("postgres://lfdnbezl:ysgoBqVqJ1sJrhYMWHo5MFSgvwA7CrX2@john.db.elephantsql.com:5432/lfdnbezl");

const { User } = require('./sqlSchema');

const _User = sequelize.define('user', User);

sequelize.sync();//{force: true});

module.exports = {
  _User, sequelize
}
