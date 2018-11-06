const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const CPOSchema = new Schema({
	CPO_num: { type: String, required: true },
	issue_date: { type: Date, required: true },
	// salesperson: Schema.ObjectId
});

// Create the model class
const ModelClass = mongoose.model('CPO', CPOSchema);

// Export the model
module.exports = ModelClass;
