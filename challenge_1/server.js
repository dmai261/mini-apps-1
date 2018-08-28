var express = require('express');
var app = express();
app.use(express.static('.'));
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(3000, ()=> console.log('Listening on port 3000'))
