const express = require('express')
const routes = express.Router()
const c = require('./model/brpm')
const Brpm = require('./controllers/brpm')
const Brtemp = require('./controllers/brtemp')
const Agriesttt = require('./controllers/agriesttt')
const Agrirnppm = require('./controllers/agrirnppm')
const Agrirntemp = require('./controllers/agrirntemp')

//TODO: ROTA PARA TESTE DE DISPONIBILIDADE DA API
routes.get('/', (req, res) => {
  return res.status(200).json({message: 'Ola, Esta API Esta Funcionando Com Sucesso!'})
})
//TODO:Dados Permanentes
routes.get('/areacol/brpm', Brpm.areacol)
// routes.get('/qtdprod/brpm', Brpm.qtdprod)
routes.get('/numest/brpm', Brpm.numest)
routes.get('/valorprod/brpm', Brpm.valorprod)
// routes.get('/qtdprod/brpmA', Brpm.qtdprodA)

//TODO: Dados Temporarios
// routes.get('/qtdprod/brtemp', Brtemp.qtdprodT)
routes.get('/numest/brtemp', Brtemp.numestT)
routes.get('/valorprod/brtemp', Brtemp.valorprodT)
routes.get('/areacol/brtemp', Brtemp.areacolT)
routes.get('/tudo/brtemp', Brtemp.todosdados)
// routes.get('/qtdprod/brtempA', Brtemp.qtdprodA)

//TODO: Dados por estados Permanentes
routes.get('/numest/estpm', Agriesttt.numest)
routes.get('/valorprod/estpm', Agriesttt.valorprod)
routes.get('/areacol/estpm', Agriesttt.areacol)
routes.get('/tudo/estpm', Agriesttt.todosdados)

//TODO: Dados por estados Temporarios
routes.get('/numest/esttemp', Agriesttt.numestEST)
routes.get('/valorprod/esttemp', Agriesttt.valorprodEST)
routes.get('/areacol/esttemp', Agriesttt.areacolEST)

//Graficos permanentes do RN
routes.get('/numest/arrnpm', Agrirnppm.numestrnpm)
routes.get('/areacol/arrnpm', Agrirnppm.areacolrnpm)
routes.get('/valorprod/arrnpm', Agrirnppm.valorprodrnpm)

//Graficos temporarios do RN
routes.get('/numest/arrntemp', Agrirntemp.numestrntemp)
routes.get('/areacol/arrntemp', Agrirntemp.areacolrntemp)
routes.get('/valorprod/arrntemp', Agrirntemp.valorprodrntemp)

module.exports = routes