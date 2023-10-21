const mongoose = require ('mongoose');

const chatSession = new mongoose.Schema ({
    interactions: [{
        query: {
          type: String,
          required: true,
        },
        answer: {
          type: String,
          required: true,
        },
        timestamp: {
          type: Date,
          default: Date.now,
        },
    }]
});

const userSchema = new mongoose.Schema ({
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    chatSessions: [chatSession],
});

module.exports = mongoose.model ('mitra', userSchema, 'mitra-users');