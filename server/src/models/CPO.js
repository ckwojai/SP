const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const CPOSchema = new Schema({
	CPO_num: String,
	salesperson: Schema.ObjectId
});

// Create the model class
const ModelClass = mongoose.model('CPO', CPOSchema);

// Export the model
module.exports = ModelClass;
