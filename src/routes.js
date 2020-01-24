const express = require('express')
const routes = express.Router()
const Dashboard = require('./controllers/controllers')


routes.get('/', Dashboard.index)
routes.get('/tudo', Dashboard.indexT)
module.exports = routes