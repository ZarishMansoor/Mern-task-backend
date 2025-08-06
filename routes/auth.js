<<<<<<< HEAD
const express = require('express');
     const bcrypt = require('bcryptjs');
     const jwt = require('jsonwebtoken');
     const User = require('../models/User');

     const router = express.Router();

     // Register
     router.post('/register', async (req, res) => {
       const { username, password } = req.body;
       try {
         let user = await User.findOne({ username });
         if (user) return res.status(400).json({ msg: 'User already exists' });

         user = new User({
           username,
           password: await bcrypt.hash(password, 10),
         });
         await user.save();

         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
         res.json({ token });
       } catch (err) {
         res.status(500).json({ error: err.message });
       }
     });

     // Login
     router.post('/login', async (req, res) => {
       const { username, password } = req.body;
       try {
         const user = await User.findOne({ username });
         if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

         const isMatch = await bcrypt.compare(password, user.password);
         if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
         res.json({ token });
       } catch (err) {
         res.status(500).json({ error: err.message });
       }
     });

=======
const express = require('express');
     const bcrypt = require('bcryptjs');
     const jwt = require('jsonwebtoken');
     const User = require('../models/User');

     const router = express.Router();

     // Register
     router.post('/register', async (req, res) => {
       const { username, password } = req.body;
       try {
         let user = await User.findOne({ username });
         if (user) return res.status(400).json({ msg: 'User already exists' });

         user = new User({
           username,
           password: await bcrypt.hash(password, 10),
         });
         await user.save();

         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
         res.json({ token });
       } catch (err) {
         res.status(500).json({ error: err.message });
       }
     });

     // Login
     router.post('/login', async (req, res) => {
       const { username, password } = req.body;
       try {
         const user = await User.findOne({ username });
         if (!user) return res.status(400).json({ msg: 'Invalid credentials' });

         const isMatch = await bcrypt.compare(password, user.password);
         if (!isMatch) return res.status(400).json({ msg: 'Invalid credentials' });

         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
         res.json({ token });
       } catch (err) {
         res.status(500).json({ error: err.message });
       }
     });

>>>>>>> b126bcc62967878e8aec81f6d5a034d6e2b4be01
     module.exports = router;