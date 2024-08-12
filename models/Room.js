const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomId: { type: String, required: true, unique: true },
  content: { type: String, default: '' },
  lastModified: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Room', roomSchema);