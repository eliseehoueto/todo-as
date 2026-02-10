var express = require('express');
const Todo = require('../models/Todo');
const mongoose = require('mongoose');
var router = express.Router();

router.get('/',async function(req, res) {
    try{
        const todos = await Todo.find({deletedAt: null});
        res.status(200).json(todos);
    }catch (e) {
        res.status(500).json({ message: "Erreur serveur", error: e.message });
    }
});

router.post('/create',async function(req, res) {
    doc = new Todo({
        title: req.body.title,
        priority: req.body.priority,
    });

    try {
        const results = await doc.save();
        res.status(201).send(results);
    }catch(e){
        res.status(404);
    }
});

router.patch('/:id', async function(req, res) {
    try{
        const newDoc =await Todo.findByIdAndUpdate(
        req.params.id,
        { $set : req.body},
        { new: true}
    );

    if(!newDoc){
        res.status(404).send('Ressource introuvable');
    }
    res.status(200).json(newDoc);
    }catch(e){
        res.status(404).json({ message: e.message });
    }
    
})




router.put('/:id/delete', async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { deletedAt: Date.now()},
      { new: true } 
    );
    
    if (!updatedTodo) return res.status(404).json({ message: "Tache placée dans la corbeille" });
    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.put('/:id/complete', async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { completed: true },
      { new: true } 
    );
    
    if (!updatedTodo) {
        return res.status(404).json({ message: "Tâche introuvable" });
    }

    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


module.exports = router;


