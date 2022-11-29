const express = require('express')
const app = express()
const port = 4000

app.get('/say', (req, res) => {
  res.send('Hello 4000 World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})