const express = require('express')
const routes = express.Router()
const Brpm = require('./controllers/brpm')
const Brtemp = require('./controllers/brtemp')

//Dados Permanentes
routes.get('/areacol/brpm', Brpm.areacol)
routes.get('/qtdprod/brpm', Brpm.qtdprod)
routes.get('/numest/brpm', Brpm.numest)
routes.get('/valorprod/brpm', Brpm.valorprod)
routes.get('/qtdprod/brpmA', Brpm.qtdprodA)

//Dados Temporarios
routes.get('/qtdprod/brtemp', Brtemp.qtdprodT)
routes.get('/numest/brtemp', Brtemp.numestT)
routes.get('/valorprod/brtemp', Brtemp.valorprodT)
routes.get('/areacol/brtemp', Brtemp.areacolT)
routes.get('/qtdprod/brtempA', Brtemp.qtdprodA)





// db.agriesttt.find({ Indicador: "Lavoura permanente" }, { _id: 0, estado: 1, numest: 1 })
//   / numestestpm
// db.agriesttt.find({ Indicador: "Lavoura permanente" }, { _id: 0, estado: 1, valorprod: 1 })
//   / valorprodestpm
// db.agriesttt.find({ Indicador: "Lavoura permanente" }, { _id: 0, estado: 1, areacol: 1 })
//   / areacolestpm
// db.agriesttt.find({ Indicador: "Lavoura temporária" }, { _id: 0, estado: 1, numest: 1 })
//   / numestesttemp
// db.agriesttt.find({ Indicador: "Lavoura temporária" }, { _id: 0, estado: 1, valorprod: 1 })
//   / valorprodesttemp
// db.agriesttt.find({ Indicador: "Lavoura temporária" }, { _id: 0, estado: 1, areacol: 1 })
//   / areacolesttemp


module.exports = routes