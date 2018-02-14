const express = require('express')

const app = express()
app.use(express.static('client'))
app.use(express.urlencoded())

var returnData = [];

app.get('/', (req, res) => {
  res.end(JSON.stringify(returnData));
})

app.post('/', (req, res) => {
  convert(req.body)
  res.json(returnData);
  res.end(express.static('client'))
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

convert = (data) => {
  var person = data.textarea;
   format(JSON.parse(person))
}

format = (obj) => {
  returnData.push(`${obj.firstName},${obj.lastName},${obj.county},${obj.role},${obj.sales}`);
  if(obj.children !== undefined) {
    obj.children.forEach((obj) => format(obj))
  }
}
