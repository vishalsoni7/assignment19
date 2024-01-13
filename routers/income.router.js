const express = require('express');
const incomeRouter = express.Router();

const { getAllIncomes, addIncome } = require('../sevices/income.sevice')

incomeRouter.get('/', async (req, res) => {
  try {
    const incomes = await getAllIncomes();
    res.status(200).json({ success: true, message: 'All incomes', data: incomes });

  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch all incomes', details: error });

  }
});

incomeRouter.post('/', async (req, res) => {
  try {
    const newIncome = await addIncome(req.body);
    res.status(200).json({ success: true, message: 'New income added', data: newIncome });

  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to add new income', details: error });
  }
})

module.exports = incomeRouter
