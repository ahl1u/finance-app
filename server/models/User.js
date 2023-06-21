const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  accessKey: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('User', userSchema);
