const express = require('express')
const routes = express.Router()

const Brpm = require('./controllers/brpm')
const Brtemp = require('./controllers/brtemp')
const Agriesttt = require('./controllers/agriesttt')

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
// routes.get('/qtdprod/brtempA', Brtemp.qtdprodA)

//TODO: Dados por estados Permanentes
routes.get('/numest/estpm', Agriesttt.numest)
routes.get('/valorprod/estpm', Agriesttt.valorprod)
routes.get('/areacol/estpm', Agriesttt.areacol)

//TODO: Dados por estados Temporarios
routes.get('/numest/esttemp', Agriesttt.numestEST)
routes.get('/valorprod/esttemp', Agriesttt.valorprodEST)
routes.get('/areacol/esttemp', Agriesttt.areacolEST)

module.exports = routes