const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statesArray = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
const training_item = {
	description: { type: String},
	SKU_num: { type: String},
	cost: { type: Number }
};

const cpo_object = {
	cpo_num: { type: String},
	issue_date: { type: String},
	AM: { type: String},
	company: { type: String},
	end_user: { type: String},
	training_items: [training_item]
};
const address_object = {
	name: String,
    street: String,
    city: String,
    state: {
        type: String,
        uppercase: true,
        enum: statesArray
    },
    zip: String
};

const training_details_object = {
	start_date: { type: Date},
    end_date: { type: Date},
	trainer: { type: String},
	location: address_object,
	poc: { type: String}
};

const srm_object = {
	spo_num: { type: String},
	tq_num: { type: String},
	proposed_amount: { type: Number},
	invoiced_num: { type: String},	
	invoiced_amount: { type: Number},
	gr_num: { type: Number},
	processed_date: { type: String}
};

const sap_object = {
	sap_num: { type: String},
	ship_to_num: { type: String},
	sold_to_num: { type: String},
	exact_TE: { type: Number},
	processed_date: { type: String}
};

const billing_object = {
	sap: sap_object,
	srm: srm_object
};



// Define our model
const OSCase_schema = new Schema({
	state: { type: Number },
	cpo: cpo_object,
	training_details: training_details_object,
	billing: billing_object
	
});

// Create the model class
const ModelClass = mongoose.model('OSCase', OSCase_schema);

// Export the model
module.exports = ModelClass;
