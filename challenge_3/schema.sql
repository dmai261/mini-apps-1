var Sequelize = require('sequelize')

//create database n stuff with sequelizer
const db = new Sequelize('users', 'student', 'student', {
    dialect: 'mysql',
})

const Accounts = db.define('accounts', {
    Name: Sequelize.STRING,
    Email: Sequelize.STRING,
    Password: Sequelize.STRING,

})

const Addresses = db.define('addresses', {
    Line1: Sequelize.STRING,
    Line2: Sequelize.STRING,
    City: Sequelize.STRING,
    State: Sequelize.STRING,
    'Zip Code': Sequelize.STRING,

})  

const Cards = db.define('cards', {
    'Credit Card Number': Sequelize.STRING,
    'Date Of Expire': Sequelize.STRING,
    CVV: Sequelize.STRING,
    'Billing Zip Code': Sequelize.STRING,

})

db.sync();

exports.db = db;