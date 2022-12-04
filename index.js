const express = require('express')
const app = express()
const port = 3000
const axios = require("axios")

app.get('/', (req, res) => {
  try {
    // const response = await axios.get('http://node2:4000/say')
    console.log('get')
    res.send('get request 1')
  }
  catch (err) {
    console.log(err);
  }
})

app.post('/', (req, res) => {
  const body = req.body
  console.log('post 1')
  console.log(body)
  res.json({body,msg:'post 1'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})