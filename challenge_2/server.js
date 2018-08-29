var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// let store = [];

app.use(bodyParser.json());
app.use(express.static('client'));

app.get('/data', (req, res) =>
  res.send(store)
)

app.post('/data', (req, res) => {
  let newData = deconstructor((req.body));
  let headers = [];
  for (var key in req.body) {
      if (key !== 'children') {
          headers.push(key);
      }
  }
  newData.unshift(headers);
  res.send(newData);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'))

let deconstructor = function(data) {
  let results = arguments[1] || [];
  let arr = [];
  for (var key in data) {
    if (key !== 'children') {
      arr.push(data[key]);
    }
  }
  results.push(arr);
  if (data.children.length === 0 || data.children === undefined) {
    return;
  } else {
    data.children.forEach((child)=>{
      deconstructor(child, results)
    })
  }
  return results
}