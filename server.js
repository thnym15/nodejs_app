const express = require('express');
const app = express()

app.get('/', (req, res) => {
  res.send('helloworld')
})

const port = process.env.port || 8000

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})