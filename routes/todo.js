var express = require('express');
const Todo = require('../models/Todo');
const mongoose = require('mongoose');
const todoController = require('../controllers/todoController');
var router = express.Router();


router.get('/',todoController.getTodo);

router.post('/',todoController.createTodo);

router.patch('/:id', todoController.updateTodo);

router.delete('/:id', todoController.deleteTodo);

router.put('/:id/complete',todoController.completeTodo);

module.exports = router;