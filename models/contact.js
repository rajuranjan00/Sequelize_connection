// const { DataTypes } = require('sequelize');
// const sequelize = require('./index')

module.exports = (sequelize, DataTypes)=> {



    const Contact = sequelize.define('Contacts', {
        // Model attributes are defined here
        permanent_address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        current_address: {
            type: DataTypes.STRING
            // allowNull defaults to true
        }
    }, {

    });
    return Contact;

    // `sequelize.define` also returns the model
}