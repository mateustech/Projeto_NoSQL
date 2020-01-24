const express = require('express')
const routes = express.Router()
const Dashboard = require('./controllers/controllers')


routes.get('/', Dashboard.index)

module.exports = routes