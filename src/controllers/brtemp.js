const Brtemp = require('../model/brtemp')

class BrtempControllers {

  //Temporario
  async qtdprodT(req, res) {
    const data = await Brtemp.find({}, { _id: 0, Indicador: 1, qtdprod: 1 }).sort({ qtdprod: -1 }).limit(10)
    return res.status(200).json(data)
  }
  async numestT(req, res) {
    const data = await Brtemp.find({}, { _id: 0, Indicador: 1, numest: 1 }).sort({ numest: -1 }).limit(10)
    return res.status(200).json(data)
  }
  async valorprodT(req, res) {
    const data = await Brtemp.find({}, { _id: 0, Indicador: 1, valorprod: 1 }).sort({ valorprod: -1 }).limit(10)
    return res.status(200).json(data)
  }
  async qtdprodA(req, res) {
    const data = await Brtemp.aggregate([{ $match: {} }, { $group: { _id: null, sum: { $sum: "$qtdprod" } } }])
    return res.status(200).json(data)
  }
  async areacolT(req, res) {
    const data = await Brtemp.find({}, { _id: 0, Indicador: 1, areacol: 1 }).sort({ areacol: -1 }).limit(10)
    return res.status(200).json(data)
  }


}

module.exports = new BrtempControllers()