const Todo = require('../models/Todo');
const mongoose = require('mongoose');

exports.getTodo=async function(req, res) {
    try{
        const todos = await Todo.find({deletedAt: null});
        res.status(200).json(todos);
    }catch (e) {
        res.status(500).json({ message: "Erreur serveur", error: e.message });
    }
}

exports.createTodo=async function(req, res) {
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
};

exports.updateTodo= async function(req, res) {
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
    
};

exports.deleteTodo = async (req, res) => {
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
};

/*
exports.completeTodo =  async (req, res) => {
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
};*/


exports.completeTodo = async (req, res) => {
  try {
    // 1. On cherche d'abord la tâche pour connaître son état actuel
    const todo = await Todo.findById(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Tâche introuvable" });
    }

    // 2. On inverse la valeur de 'completed' (!todo.completed)
    todo.completed = !todo.completed;
    
    // 3. On sauvegarde les modifications
    const updatedTodo = await todo.save();

    res.json(updatedTodo);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};