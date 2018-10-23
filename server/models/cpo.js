const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const cpoSchema = new Schema({
	num: String,
	issuedDate: { type: Date, default: Date.now }
});

// Create the model class
const ModelClass = mongoose.model('cpo', cpoSchema);

// Export the model
module.exports = ModelClass;
