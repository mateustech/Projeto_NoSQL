const Brpm = require('../model/brpm')


class BrpmControllers {
  //Permanente
  async areacol(req, res) {
    const data = await Brpm.find({}, { Indicador: 1, areacol: 1 }).sort('-areacol').limit(10)
    return res.status(200).json(data)
  }
  async qtdprod(req, res) {
    const data = await Brpm.find({}, { _id: 0, Indicador: 1, qtdprod: 1 }).sort({ qtdprod: -1 }).limit(10)
    return res.status(200).json(data)
  }
  async numest(req, res) {
    const data = await Brpm.find({}, { _id: 0, Indicador: 1, numest: 1 }).sort({ numest: -1 }).limit(10)
    return res.status(200).json(data)
  }
  async valorprod(req, res) {
    const data = await Brpm.find({}, { _id: 0, Indicador: 1, valorprod: 1 }).sort({ valorprod: -1 }).limit(10)
    return res.status(200).json(data)
  }
  async qtdprodA(req, res) {
    const data = await Brpm.aggregate([{ $match: {} }, { $group: { _id: null, qtdprodbrpm: { $sum: "$qtdprod" } } }])
    return res.status(200).json(data)
  }

}

module.exports = new BrpmControllers()