const express = require('express')
const app = express()
const port = 3000
const axios = require("axios")
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('http://node2:4000/say')
    res.send(response.data)
  }
  catch (err) {
    console.log(err);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})