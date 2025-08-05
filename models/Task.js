const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  category: {
    type: String,
    enum: ['Work', 'Personal', 'Urgent', 'Other'], // Predefined categories
    default: 'Other',
  },
  dueDate: {
    type: Date,
  },
  priority: {
    type: String,
    enum: ['High', 'Medium', 'Low'],
    default: 'Medium',
  },
  progress: {
    type: Number,
    min: 0,
    max: 100,
    default: 0,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

module.exports = mongoose.model('Task', taskSchema);