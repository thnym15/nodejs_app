const express = require('express');
const app = express()

app.get('/', (req, res) => {
  res.send("Web Hello at " + PORT)
  console.log('AppDividend'.toLocaleLowerCase());
  console.log('KrunalLathiya'.toLowerCase());
})

app.get('/test', (req, res) => {
  res.send('this is nodejs')
})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})