const Dash = require('../model/model')
const MongoClient = require('mongodb').MongoClient

class Dashboard {
  async index(req, res) {

    const dados = await Dash.find()
    return res.status(200).json(dados)
  }
  async store(req, res) {
    const data = await Dash.create(req.body)
    return res.status(201).json(data)
  }
}

module.exports = new Dashboard()