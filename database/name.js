const mongoose = require('mongoose');
const db = require('./connect.js');
mongoose.Promise = global.Promise;

const nameSchema = new mongoose.Schema(
  {
hashem: String,
key: String
  },
  {
    timestamps: true,
  }
);


const NameChine = mongoose.model("NameChine", nameSchema);

module.exports = NameChine;