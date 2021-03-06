const mongoose = require('mongoose');
const db = require('./connect.js');
mongoose.Promise = global.Promise;

const CompanySchema = new mongoose.Schema(
  {
    name: String,
    password: String,
    imageUrl: String,
    key: String,
    todos: {
      type: [
        {
          name: String,
          todo: String,
        },
      ], default: []
    },
    type: { type: String, default: "company" },
  },
  {
    timestamps: true,
  }
);


const Company = mongoose.model("Company", CompanySchema);

module.exports = Company;
