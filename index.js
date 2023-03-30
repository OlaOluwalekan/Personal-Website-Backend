const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello, Personal</h1>')
})

const port = process.env.PORT || 9000

app.listen(port, console.log(`server is listening on port ${port}...`))
