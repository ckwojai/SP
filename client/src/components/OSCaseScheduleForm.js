import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from "../actions";

import { withStyles } from '@material-ui/core/styles';
import MenuItem from 'material-ui/MenuItem';
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import {
	SelectField,
	TextField,
	DatePicker
} from 'redux-form-material-ui';
import TrainingItemsFieldArray from './TrainingItemsFieldArray.js';

const styles = theme => ({
	button: {
		margin: theme.spacing.unit,
	},
	leftIcon: {
		marginRight: theme.spacing.unit,
	},
	rightIcon: {
		marginLeft: theme.spacing.unit,
	},
	iconSmall: {
		fontSize: 20,
	},
});
const required = value => (value == null ? 'Required' : undefined);
// const email = value =>
// 	  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
//       ? 'Invalid email'
//       : undefined;
// const tooManyPizzas = value => (value > 15 ? 'Are you mad?' : undefined);


class OSCaseScheduleForm extends Component {
	componentDidMount() {
		// this.props.fetchOSCases();
		this.ref // the Field
			.getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
			.getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
			.focus(); // on TextField		
	}
	onSubmit = (formProps) => {
		console.log("Inside OSCaseScheduleForm onSubmit");
		console.log(formProps);
		const objectId = this.props.OSCase._id;
		this.props.updateOSCases(formProps, objectId);
	};
	saveRef = ref => (this.ref = ref)		
	render() {
        console.log("Logging InitialValues");
	    console.log(this.props.initialValues);
     	const { classes, handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
			  <div>
				<Field
				  name="training_details.start_date"
				  component={DatePicker}                  
				  hintText="Training Start Date"
				  floatingLabelText="Start Date"
				  format={value => value ? new Date(value) : null}				
				  validate={required}
				  />
				<Field
				  name="training_details.end_date"
				  component={DatePicker}
				  format={value => value ? new Date(value) : null}				
				  floatingLabelText="Issue Date"
				  hintText="Issue Date?"
				  validate={required}
				  />
				<Field
				  name="training_details.trainer"
				  component={TextField}
				  hintText="Trainer"
				  floatingLabelText="Trainer"
				  validate={required}
			    />
				<Field
				  name="training_details.poc"
				  component={TextField}
				  hintText="Contact Name"
				  floatingLabelText="Point of Contact"
				  validate={required}
			    />                
			  <div>
				<Field
				  name="training_details.location.name"
				  hintText="Name"
				  floatingLabelText="Bill-to Address"
				  validate={required}
				  ref={this.saveRef}
				  withRef
				  component={TextField}					 				  
				  />
				<Field
				  name="training_details.location.street"
				  hintText="Street"
				  validate={required}
				  ref={this.saveRef}
				  withRef
				  component={TextField}					 				  
				  />
				<Field
				  name="training_details.location.city"
				  hintText="City"
				  validate={required}
				  ref={this.saveRef}
				  withRef
				  component={TextField}					 				  
				  />
				<Field
				  name="training_details.location.state"
				  hintText="State"
				  validate={required}
				  ref={this.saveRef}
				  withRef
				  component={TextField}					 				  
				  />
				<Field
				  name="training_details.location.zip"
				  hintText="Zip"
				  validate={required}
				  ref={this.saveRef}
				  withRef
				  component={TextField}					 				  
				  />							
			  </div>
			  </div>
			  <div>
				<Field
				  name="billing.srm.spo_num"
				  component={TextField}
				  hintText="SRM PO# for Trainer"
				  floatingLabelText="SRM PO#"
				  validate={required}
				  >
       			</Field>
				<Field
				  name="billing.srm.tq_num"
				  component={TextField}
				  hintText="Trainer's Quote#"
				  floatingLabelText="Trainer's Quote#"
				  validate={required}
				  >
       			</Field>
				<Field
				  name="billing.srm.proposed_amount"
				  component={TextField}
				  hintText="Trainer's Proposed Amount"
				  floatingLabelText="Trainer's Proposed Amount"
				  validate={required}
				  >
       			</Field>				  				                
			  </div>
				<Button type="submit" color="primary">
				  Save
				</Button>              
			</form>
		);
	}
};
function mapStateToProps(state, ownProps) {
	return {
		OSCase: state.OSCase[ownProps.arrIndex],
		initialValues: state.OSCase[ownProps.arrIndex],
		enableReinitialize: true
	};
};
export default compose(
	withStyles(styles),
	connect(mapStateToProps, actions),
    reduxForm()
)(OSCaseScheduleForm);
