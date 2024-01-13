const mongoose = require('mongoose')

const expenseSchema = new mongoose.Schema({
  description: String,
  amount: Number,
  category: String
}, { timestamps: true })

const Expense = mongoose.model('Expense', expenseSchema);

module.exports = Expense;