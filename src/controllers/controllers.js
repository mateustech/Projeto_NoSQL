const Dash = require('../model/model')
const MongoClient = require('mongodb').MongoClient

class Dashboard {
  async index(req, res) {

    const dados = await Dash.find({}, { Indicador: 1, areacol: 1 }).sort('-areacol').limit(10)
    return res.status(200).json(dados)
  }

}

module.exports = new Dashboard()