<<<<<<< HEAD
const mongoose = require('mongoose');

     const UserSchema = new mongoose.Schema({
       username: {
         type: String,
         required: true,
         unique: true,
       },
       password: {
         type: String,
         required: true,
       },
     }, { timestamps: true });

=======
const mongoose = require('mongoose');

     const UserSchema = new mongoose.Schema({
       username: {
         type: String,
         required: true,
         unique: true,
       },
       password: {
         type: String,
         required: true,
       },
     }, { timestamps: true });

>>>>>>> b126bcc62967878e8aec81f6d5a034d6e2b4be01
     module.exports = mongoose.model('User', UserSchema);