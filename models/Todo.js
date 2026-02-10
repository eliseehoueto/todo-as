const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
  priority: {type: String, required: true},
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date, default: null }
});

module.exports = mongoose.model('Todo', todoSchema);