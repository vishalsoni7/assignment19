const express = require('express');
const savingRouter = express.Router();

const { getAllSavings, addSaving } = require('../sevices/saving.service');

savingRouter.get('/', async (req, res) => {
  try {
    const savings = await getAllSavings();
    res.status(200).json({ success: true, message: 'All savings', data: savings });

  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to fetch all savings', details: error });

  }
});

savingRouter.post('/', async (req, res) => {
  try {
    const newSaving = await addSaving(req.body);
    res.status(200).json({ success: true, message: 'New saving added', data: newSaving });

  } catch (error) {
    res.status(500).json({ success: false, error: 'Failed to add new saving', details: error });
  }
})

module.exports = savingRouter
