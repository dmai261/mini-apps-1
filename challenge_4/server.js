var express = require('express');
var app = express();

app.use(express.static('./client/dist'));

app.get('/', (req,res)=> {
    res.send('Hello world')
})

app.listen(3000, ()=> {
    console.log('Listening on port 3000')
})

