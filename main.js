const express = require('express')
const app = express()
const port = process.env.PORT || 3001;

app.use(express.static("./front"));

app.get('/', (req, res) => {
  res.send("hola");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
