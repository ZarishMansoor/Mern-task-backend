<<<<<<< HEAD
const express = require('express');
const Task = require('../models/Task');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get all tasks
router.get('/', authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create task
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, category, dueDate, priority, progress } = req.body;
  try {
    const task = new Task({
      title,
      description,
      category,
      dueDate,
      priority,
      progress,
      user: req.user.userId,
    });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update task
router.put('/:id', authMiddleware, async (req, res) => {
  const { title, description, completed, category, dueDate, priority, progress } = req.body;
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    if (task.user.toString() !== req.user.userId) return res.status(401).json({ msg: 'Unauthorized' });

    task.title = title || task.title;
    task.description = description || task.description;
    task.completed = completed !== undefined ? completed : task.completed;
    task.category = category || task.category;
    task.dueDate = dueDate || task.dueDate;
    task.priority = priority || task.priority;
    task.progress = progress !== undefined ? progress : task.progress;
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete task
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    if (task.user.toString() !== req.user.userId) return res.status(401).json({ error: 'Unauthorized' });

    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

=======
const express = require('express');
const Task = require('../models/Task');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get all tasks
router.get('/', authMiddleware, async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.userId });
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create task
router.post('/', authMiddleware, async (req, res) => {
  const { title, description, category, dueDate, priority, progress } = req.body;
  try {
    const task = new Task({
      title,
      description,
      category,
      dueDate,
      priority,
      progress,
      user: req.user.userId,
    });
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update task
router.put('/:id', authMiddleware, async (req, res) => {
  const { title, description, completed, category, dueDate, priority, progress } = req.body;
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });
    if (task.user.toString() !== req.user.userId) return res.status(401).json({ msg: 'Unauthorized' });

    task.title = title || task.title;
    task.description = description || task.description;
    task.completed = completed !== undefined ? completed : task.completed;
    task.category = category || task.category;
    task.dueDate = dueDate || task.dueDate;
    task.priority = priority || task.priority;
    task.progress = progress !== undefined ? progress : task.progress;
    await task.save();
    res.json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete task
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) return res.status(404).json({ error: 'Task not found' });
    if (task.user.toString() !== req.user.userId) return res.status(401).json({ error: 'Unauthorized' });

    await Task.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

>>>>>>> b126bcc62967878e8aec81f6d5a034d6e2b4be01
module.exports = router;