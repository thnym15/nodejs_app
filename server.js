const express = require('express')
const app = express()

app.use(express.static(__dirname + '/view'))

app.get('/', (req, res) => {
  res.send("Web Hello at " + PORT)
  console.log('AppDividend'.toLocaleLowerCase());
  console.log('KrunalLathiya'.toLowerCase());
})

app.get('/test', (req, res) => {
  res.send('this is nodejs')
})


app.get('/index', function (req, res) {
  res.sendFile(__dirname + '/view/index.html');
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})