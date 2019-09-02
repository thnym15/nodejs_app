const express = require('express');
const app = express()

app.get('/', (req, res) => {
  res.send('helloworld')
})

app.get('/test', (req, res) => {
  res.send('this is nodejs')
})

const port = process.env.port || 8000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})