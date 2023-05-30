var express = require('express');
var router = express.Router();
var axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16);
  axios.get('http://localhost:15030/plantas')
    .then(resposta => {
      res.render('index', {plantas: resposta.data, d: data});
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});


router.get('/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16);
  axios.get('http://localhost:15030/plantas/' + req.params.id)
    .then(resposta => {
      res.render('planta', {planta: resposta.data, d: data});
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});

router.get('/especies/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16);
  axios.get('http://localhost:15030/plantas/?especie=' + req.params.id)
    .then(resposta => {
      var nome = resposta.data[0]['Espécie'];
      var nomeCientifico = resposta.data[0]['Nome Científico'];
      res.render('especie', {especies: resposta.data, nome: nome, nomeCientifico: nomeCientifico, d: data});
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});

/* 
router.get('/especies/:id', function(req, res, next) {
  var data = new Date().toISOString().substring(0, 16);
  axios.get('http://localhost:15030/especies/' + req.params.id)
    .then(resposta1 => {
      // Se esta chamada correr bem, chamamos agora as ligações da planta
      axios.get('http://localhost:15030/plantas/especies/' + req.params.id)
        .then(resposta2 => {
          res.render('planta', {planta: resposta1.data, caminhos: resposta2.data, d: data});
        })
        .catch(erro => {
          res.render('error', {error: erro})
        })
    })
    .catch(erro => {
      res.render('error', {error: erro})
    })
});
 */
module.exports = router;
