const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define our model
const PersonSchema = new Schema({
	name: { type: String, required: [true, "A name is required" ] },
	gender: { type: String, enum: {values: ['M', 'F'], message: "Gender must be either 'M' or 'F'" }},
	company: { type: String, required: [true, "Comapny is required"], default: 'Sony' },
	position: { type: String, required: true, default: "N/A" },
	cell_num: { type: String },
	office_num: { type: String, default: "(510) 458-3511" },
	email_address: { type: String, required: true }
});

// Create the model class
const ModelClass = mongoose.model('Person', PersonSchema);

// Export the model
module.exports = ModelClass;
