<<<<<<< HEAD
const jwt = require('jsonwebtoken');

     module.exports = function (req, res, next) {
       const token = req.header('Authorization')?.replace('Bearer ', '');
       if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

       try {
         const decoded = jwt.verify(token, process.env.JWT_SECRET);
         req.user = decoded;
         next();
       } catch (err) {
         res.status(401).json({ msg: 'Token is not valid' });
       }
=======
const jwt = require('jsonwebtoken');

     module.exports = function (req, res, next) {
       const token = req.header('Authorization')?.replace('Bearer ', '');
       if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

       try {
         const decoded = jwt.verify(token, process.env.JWT_SECRET);
         req.user = decoded;
         next();
       } catch (err) {
         res.status(401).json({ msg: 'Token is not valid' });
       }
>>>>>>> b126bcc62967878e8aec81f6d5a034d6e2b4be01
     };