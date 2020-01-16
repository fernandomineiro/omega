var express = require('express');
var router = express.Router();
var model = require('../models/index');
const { Op } = require("sequelize");


router.get('/', function(req, res, next) {
    model.banco.findAll({})
        .then(todos => res.json({
            data: todos
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

router.get('/encontre/:valor', function(req, res, next) {
    const valor = req.params.valor;
    model.banco.findAll({
        where: {
            [Op.or]: [
                {
                  nome: {
                    [Op.like]: `%${valor}%`
                  }
                },
                {
                  tipo: {
                    [Op.like]: `%${valor}%`
                  }
                }
              ]
          }
    })
        .then(todos => res.json({
            data: todos
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});
 
 
 
router.post('/', function(req, res, next) {
    const {
        nome,
        numero,
        tipo
    } = req.body;
    model.banco.create({
            nome: nome,
            numero: numero,
            tipo: tipo
        })
        .then(todo => res.status(201).json({ 
            message: 'Criado com sucesso.'
        }))
        .catch(error => res.json({
            error: true,
            data: [],
            error: error
        }));
});

router.put('/:id', function(req, res, next) {
 
});
 
 
router.delete('/:id', function(req, res, next) {
 
});
 
 
module.exports = router;