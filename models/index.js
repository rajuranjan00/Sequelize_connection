const { Sequelize, DataTypes, Model } = require('sequelize');

const sequelize = new Sequelize('erp', 'root', 'Cyberium@123', {
    host: 'localhost',
    dialect: 'mysql' /*| 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const db = {}
  db.Sequelize = Sequelize;
  db.sequelize = sequelize;

  db.contact = require('./contact')(sequelize,DataTypes)  /// because we define function for that , so we not using model
  db.User = require('./user')(sequelize,DataTypes,Model)
  db.sequelize.sync({force : false});


  module.exports=db
