const Saving = require('../model/savings.model');

const getAllSavings = async () => {
  try {
    const data = await Saving.find()
    console.log('All savings: ', data)
    return data
  } catch (error) {
    console.error('Error while fetching all savings!', error);
    throw error;
  }
}

const addSaving = async (savingDetails) => {
  try {
    const newSaving = new Saving(savingDetails);
    const savedSaving = await newSaving.save();
    console.log(`New saving added: ${savedSaving.description}`)
    return savedSaving;
  } catch (error) {
    console.error('Error while adding saving!', error);
    throw error;
  }
};

module.exports = { getAllSavings, addSaving }