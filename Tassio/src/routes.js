const express = require('express')
const routes = express.Router()
const Dashboard = require('./controllers/controllers')


routes.get('/', Dashboard.index)
routes.post('/', Dashboard.store)

module.exports = routes