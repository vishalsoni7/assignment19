const express = require('express');
const expenseRouter = express.Router();

const { getAllExpenses, addExpense } = require('../sevices/expense.service')

expenseRouter.get('/', async (req, res) => {
  try {
    const expenses = await getAllExpenses();
    res.status(200).json({ success: true, message: 'All expenses', data: expenses });

  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch all expenses', details: error });

  }
});

expenseRouter.post('/', async (req, res) => {
  try {
    const newExpense = await addExpense(req.body);
    res.status(201).json({ success: true, message: 'New expense added', data: newExpense });

  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to add new expense', details: error });
  }
})

module.exports = expenseRouter