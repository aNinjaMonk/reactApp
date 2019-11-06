const Sequelize = require('sequelize');

const User = {
  id: {
    allowNull: false,
    type: Sequelize.UUID,
    primaryKey: true
  },
  name: {
   type: Sequelize.STRING
  },
  period: {
    type: Sequelize.DATE
  },
  phone: {
    type: Sequelize.STRING(15),
    allowNull: false
  },
  syncState: {
     type: Sequelize.INTEGER,
     defaultValue: 1
  }
};

module.exports = {
  User
}
