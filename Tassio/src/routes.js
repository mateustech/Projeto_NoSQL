const express = require('express')

const routes = express.Router()

routes.get('/', (req, res) => {
  return res.json({ message: "Esta é a base da API" })
})

module.exports = routes