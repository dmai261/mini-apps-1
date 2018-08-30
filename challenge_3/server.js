var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var Sequelize = require('sequelize')

//create database n stuff with sequelizer
const db = new Sequelize('user', 'student', 'student', {
    dialect: 'mysql',
    define: {
        timestamps: false
    }
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
    'Billing Zip Code': Sequelize.STRING
})
Accounts.sync()
Addresses.sync()
Cards.sync();

//server static index.html
app.use(express.static('public'));

//set header?
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//parse request body
app.use(bodyParser.json());

//request handlers
app.get('/', (req, res)=> {
    db.Users.sync().then(()=>{
       res.send(JSON.stringify(db.Users.findAll()));
    })
    // res.send({con:'connection'})
})

app.post('/account', (req, res)=> {
    let body = (req.body);
    console.log(Accounts);
    Accounts.create({
        Name: body.Name,
        Email: body.Email,
        Password: body.Password
    })
    res.send(req.body);
})

app.post('/address', (req, res)=> {
    Addresses.create({
        Line1: req.body['Line1'],
        Line2: req.body['Line2'],
        City: req.body['City'],
        State: req.body['State'],
        'Zip Code': req.body['Zip Code'],
    })
    res.send(req.body);
})

app.post('/card', (req, res)=> {
    Cards.create({
        'Credit Card Number': req.body['Credit Card Number'],
        'Date Of Expire': req.body['Date Of Expire'],
        CVV: req.body['CVV'],
        'Billing Zip Code': req.body['Billing Zip Code']
    })
    res.send(req.body);
})

//listener
app.listen(8080, ()=> console.log('Example app listening on port 8080!'));




