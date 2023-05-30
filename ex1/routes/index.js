
var express = require('express');
var router = express.Router();
var Planta = require('../controllers/planta')


router.get('/plantas', function(req, res, next) {
  
  const especie = req.query.especie //=== 'EEEE'; // especie=EEEE
  const implant = req.query.implant // === "AAA"; // implant=AAA
  
  if(especie){
    Planta.listEspecie(especie)
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch(erro => {
      res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de plantas"})
    })
  }
  else if (implant){
    Planta.listImplant(implant)
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch(erro => {
      res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de plantas"})
    })
  }
  else{
    Planta.list()
    .then(dados => {
      res.status(200).json(dados)
    })
    .catch(erro => {
      res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de plantas"})
    })
  }
});

router.get('/plantas/freguesias', function(req, res, next) {
  Planta.getFreguesias()
  .then(dados => {
    res.status(200).json(dados)
  })
  .catch(erro => {
    res.status(520).json({erro: erro, mensagem: "Não consegui obter a lista de plantas"})
  })
});

router.get('/plantas/especies', function(req, res, next) {
  Planta.getEspecies()
  .then(dados => {
    res.status(200).json(dados)
  })
  .catch(erro => {
    res.status(521).json({erro: erro, mensagem: "Não consegui obter o aluno"})
  })
});


router.get('/plantas/:id', function(req, res, next) {
  Planta.getPlanta(req.params.id)
  .then(dados => {
    res.status(200).json(dados)
  })
  .catch(erro => {
    res.status(521).json({erro: erro, mensagem: "Não consegui obter a planta"})
  })
});

router.delete('/plantas/:id', function(req, res, next) {
  Planta.deletePlanta(req.params.id)
  .then(dados => {
    res.status(200).json(dados)
  })
  .catch(erro => {
    res.status(521).json({erro: erro, mensagem: "Não consegui apagar a planta"})
  })
});

router.post('/plantas', function(req, res, next) {
  Planta.insertPlanta(req.body)
  .then(dados => {
    res.status(200).json(dados)
  })
  .catch(erro => {
    res.status(521).json({erro: erro, mensagem: "Não consegui inserir a planta"})
  })
});

module.exports = router;