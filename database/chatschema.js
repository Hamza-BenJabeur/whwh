const mongoose = require('mongoose');
const db = require('./connect.js');
mongoose.Promise = global.Promise;

const Chatschema = new mongoose.Schema(
  {
    msg: String,
  },
  {
    timestamps: true,
  }
);


const Chat = mongoose.model("Chat", Chatschema);

module.exports = Chat;