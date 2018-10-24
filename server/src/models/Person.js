const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const PersonSchema = new Schema({
	name: String,
	gender: String,
	company: String,
	position: String,
	cell_num: String,
	office_num: String,
	email_address: String
});

// Create the model class
const ModelClass = mongoose.model('Person', PersonSchema);

// Export the model
module.exports = ModelClass;
