const Agriesttt = require('../model/agriesttt')

class AgriestttControllers {
  //?Permanentes - Brasil
  async numest(req, res) {
    const data = await Agriesttt.find({ Indicador: "Lavoura permanente" }, { _id: 0, estado: 1, numest: 1 })
    return res.status(200).json(data)
  }
  async valorprod(req, res) {
    const data = await Agriesttt.find({ Indicador: "Lavoura permanente" }, { _id: 0, estado: 1, valorprod: 1 })
    return res.status(200).json(data)
  }
  async areacol(req, res) {
    const data = await Agriesttt.find({ Indicador: "Lavoura permanente" }, { _id: 0, estado: 1, areacol: 1 })
    return res.status(200).json(data)
  }
  //?Temporários - Brasil
  async numestEST(req, res) {
    const data = await Agriesttt.find({ Indicador: "Lavoura temporária" }, { _id: 0, estado: 1, numest: 1 })
    return res.status(200).json(data)
  }
  async valorprodEST(req, res) {
    const data = await Agriesttt.find({ Indicador: "Lavoura temporária" }, { _id: 0, estado: 1, valorprod: 1 })
    return res.status(200).json(data)
  }
  async areacolEST(req, res) {
    const data = await Agriesttt.find({ Indicador: "Lavoura temporária" }, { _id: 0, estado: 1, areacol: 1 })
    return res.status(200).json(data)
  }

  async todosdados(req,res){
    const data = await Agriesttt.find()
    return res.json(data)
  }
}

module.exports = new AgriestttControllers()