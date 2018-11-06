import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from "../actions";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

class CPOForm extends Component {
	onSubmit = (formProps) => {
		console.log(formProps);
		this.props.newCPO(formProps);
	};
	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
			  <fieldset>
				<label>CPO#</label>
				<Field
				  name="CPO_num"
				  type="text"
				  component="input"
				  autoComplete="none"
				  />
			  </fieldset>
			  <fieldset>
				<label>Issue Date</label>
				<Field
				  name="issue_date"
				  autoComplete="none"
				  type="text"
				  component = {
					  (props) => {
						  console.log(props);
						  return (
							  <DayPickerInput
								value = {props.input.value}
								onDayChange={props.input.onChange}							
								/>
						  );
					  }}
				/>
				</fieldset>
				<button>Submit</button>
				</form>
		);
	}
};
export default compose(
	connect(null, actions),
	reduxForm({ form: 'CPOForm'})
)(CPOForm);
