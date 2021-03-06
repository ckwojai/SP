import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from "../actions";

import { withStyles } from '@material-ui/core/styles';
import MenuItem from 'material-ui/MenuItem';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
import classNames from 'classnames';
import {
	SelectField,
	TextField,
	DatePicker
} from 'redux-form-material-ui';

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
class OSCaseForm extends Component {
	componentDidMount() {
		this.props.fetchPeople();
		this.ref // the Field
			.getRenderedComponent() // on Field, returns ReduxFormMaterialUITextField
			.getRenderedComponent() // on ReduxFormMaterialUITextField, returns TextField
			.focus(); // on TextField				
	}
	onSubmit = (formProps) => {
		console.log(formProps);
		this.props.newCPO(formProps);
	};
	createPeopleOptions() {
		if (Object.keys(this.props.people).length === 0) {
			return <MenuItem value="" primaryText="" />;
		} else {
			console.log(this.props.people);							
			return this.props.people.map((person) => {
				return (
					<MenuItem key={person._id} value={person._id} primaryText={person.name} />
				);
			});			
		}
		
	}
	saveRef = ref => (this.ref = ref)			
	render() {
		const { classes, handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
			  <div>
			  <Field
				name="CPO_num"
				hintText="CPO#"
				floatingLabelText="CPO#"
				validate={required}
				ref={this.saveRef}
				withRef
				component={TextField}
				/>
			  </div>
			  <div>
			  <Field
				name="issue_date"
				component={DatePicker}
				format={null}
				floatingLabelText="Issue Date"
				hintText="Issue Date?"
				validate={required}
				/>
			  </div>
			  <div>
			  <Field
				name="salesperson"
				component={SelectField}
				hintText="Salesperson"
				floatingLabelText="Salesperson"
				validate={required}
				>
				  {this.createPeopleOptions()}
       		  </Field>
			  </div>
			  <div>
			  <Field name="company_name"
					 hintText="Company"
					 floatingLabelText="Company"
					 validate={required}
					 ref={this.saveRef}
					 withRef
					 component={TextField}					 
					 />
			  </div>
			  <div>
				<Field
				  name="bill_to_address.name"
				  hintText="Name"
				  floatingLabelText="Bill-to Address"
				  validate={required}
				  ref={this.saveRef}
				  withRef
				  component={TextField}					 				  
				  />
				<Field
				  name="bill_to_address.street"
				  hintText="Street"
				  validate={required}
				  ref={this.saveRef}
				  withRef
				  component={TextField}					 				  
				  />
				<Field
				  name="bill_to_address.city"
				  hintText="City"
				  validate={required}
				  ref={this.saveRef}
				  withRef
				  component={TextField}					 				  
				  />
				<Field
				  name="bill_to_address.state"
				  hintText="State"
				  validate={required}
				  ref={this.saveRef}
				  withRef
				  component={TextField}					 				  
				  />
				<Field
				  name="bill_to_address.zip"
				  hintText="Zip"
				  validate={required}
				  ref={this.saveRef}
				  withRef
				  component={TextField}					 				  
				  />							
			  </div>
			  <Button type="submit" variant="contained" size="small" className={classes.button}>
				<SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
				Submit
			  </Button>			  
			</form>
		);
	}
};
function mapStateToProps(state) {
	return {people: state.people};
};
export default compose(
	withStyles(styles),
	connect(mapStateToProps, actions),
	reduxForm({ form: 'OSCaseForm'})
)(OSCaseForm);
