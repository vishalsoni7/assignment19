const Income = require('../model/incomes.model');

const getAllIncomes = async () => {
  try {
    const data = await Income.find()
    console.log('All incomes: ', data)
    return data
  } catch (error) {
    console.error('Error while fetching all incomes!', error);
    throw error;
  }
}

const addIncome = async (incomeDetails) => {
  try {
    const newIncome = new Income(incomeDetails);
    const savedIncome = await newIncome.save();
    console.log(`New income added: ${savedIncome.description}`)
    return savedIncome;
  } catch (error) {
    console.error('Error while adding income!', error);
    throw error;
  }
};

module.exports = { getAllIncomes, addIncome };