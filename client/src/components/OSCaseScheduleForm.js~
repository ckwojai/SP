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

import DialogActions from '@material-ui/core/DialogActions';
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


class OSCaseCPOForm extends Component {
	componentDidMount() {
		this.props.fetchOSCases();
		this.ref // the Field
			.getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
			.getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
			.focus(); // on TextField		
	}
	onSubmit = (formProps) => {
		console.log("Inside OSCaseCPOForm onSubmit");
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
			<form  onSubmit={handleSubmit(this.onSubmit)}>
			  <div>
				<Field
				  name="cpo.cpo_num"
				  hintText="CPO#"
				  floatingLabelText="CPO#"
				  validate={required}
				  ref={this.saveRef}
				  withRef
				  component={TextField}
				  />
				<Field
				  name="cpo.issue_date"
				  component={DatePicker}
				  format={value => value ? new Date(value) : null}				
				  floatingLabelText="Issue Date"
				  hintText="Issue Date?"
				  validate={required}
				  />
				<Field
				  name="cpo.AM"
				  component={TextField}
				  hintText="Account Manager"
				  floatingLabelText="Accouont Manager"
				  validate={required}
				  >
       			</Field>				  
			  </div>
			  <div>
				<Field
				  name="cpo.company"
				  component={TextField}
				  hintText="Company"
				  floatingLabelText="Company"
				  validate={required}
				  >
       			</Field>
				<Field
				  name="cpo.end_user"
				  component={TextField}
				  hintText="End User"
				  floatingLabelText="End User"
				  validate={required}
				  >
       			</Field>				  				
			  </div>
			  <TrainingItemsFieldArray />
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
)(OSCaseCPOForm);
