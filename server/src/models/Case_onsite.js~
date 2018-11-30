const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];

const address_object = {
	name: String,
    street: String,
    city: String,
    state: {
        type: String,
        uppercase: true,
        required: true,
        enum: statesArray
    },
    zip: String
};
// Define our model
const CPOSchema = new Schema({
	CPO_num: { type: String, required: true },
	issue_date: { type: Date, required: true },
	salesperson: Schema.ObjectId,
	company_name: { type: String, required: [true, "company name is required" ]},
	bill_to_address: address_object
});

// Create the model class
const ModelClass = mongoose.model('CPO', CPOSchema);

// Export the model
module.exports = ModelClass;
