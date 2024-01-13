const Expense = require('../model/expenses.model');

const getAllExpenses = async () => {
  try {
    const data = await Expense.find()
    console.log('All expenses: ', data)
    return data
  } catch (error) {
    console.error('Error while fetching all expenses!', error);
    throw error;
  }
}

const addExpense = async (expenseDetails) => {
  try {
    const newExpense = new Expense(expenseDetails);
    const savedExpense = await newExpense.save();
    console.log(`New expense added: ${savedExpense.description}`)
    return savedExpense;
  } catch (error) {
    console.error('Error while adding expense!', error);
    throw error;
  }
};



module.exports = { getAllExpenses, addExpense }