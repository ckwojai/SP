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


class OSCaseBillForm extends Component {
	componentDidMount() {
		this.props.fetchOSCases();
		// this.ref // the Field
		// 	.getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
		// 	.getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
		// 	.focus(); // on TextField		 
	}
	onSubmit = (formProps) => {
		console.log("Inside OSCaseBillForm onSubmit");
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
				  name="billing.srm.invoiced_num"
				  component={TextField}
				  hintText="SRM Invoiced#"
				  floatingLabelText="SRM Invoiced Amount#"
				  validate={required}
				  >
       			</Field>				
				<Field
				  name="billing.srm.invoiced_amount"
				  component={TextField}
				  hintText="SRM Invoiced Amount"
				  floatingLabelText="SRM Invoiced Amount"
				  validate={required}
				  >
       			</Field>
				<Field
				  name="billing.srm.gr_num"
				  component={TextField}
				  hintText="SRM GR#"
				  floatingLabelText="Good Receipt# "
				  validate={required}
				  >
       			</Field>
				<Field
				  name="billing.srm.processed_date"
				  component={DatePicker}
				  format={value => value ? new Date(value) : null}								  
				  hintText="SRM Processed Date"
				  floatingLabelText="SRM Processed Date"
				  validate={required}
				  >
       			</Field>				  				                
			  </div>
			  <div>
				<Field
				  name="billing.sap.sold_to_num"
				  component={TextField}
				  hintText="SAP Sold-To #"
				  floatingLabelText="SAP Sold-To #"
				  validate={required}
				  >
       			</Field>
				<Field
				  name="billing.sap.ship_to_num"
				  component={TextField}
				  hintText="SAP Ship-To #"
				  floatingLabelText="SAP Ship-To #"
				  validate={required}
				  >
       			</Field>												
				<Field
				  name="billing.sap.sap_num"
				  component={TextField}
				  hintText="SAP#"
				  floatingLabelText="SAP#"
				  validate={required}
				  >
       			</Field>				
				<Field
				  name="billing.sap.exact_TE"
				  component={TextField}
				  hintText="Exact T&E"
				  floatingLabelText="Exact T&E"
				  validate={required}
				  >
       			</Field>
				<Field
				  name="billing.sap.processed_date"
				  component={DatePicker}
				  format={value => value ? new Date(value) : null}								  
				  hintText="SAP Processed Date"
				  floatingLabelText="SAP Processed Date"
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
)(OSCaseBillForm);
