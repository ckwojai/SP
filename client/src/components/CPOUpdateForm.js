import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from "../actions";
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

const DayPickerComponent = (props) => {
	console.log(props);
	return (
		<DayPickerInput
		  value = {props.input.value}
		  onDayChange={props.input.onChange}							
		  />
	);
};

class CPOUpdateForm extends Component {
	componentDidMount() {
		this.props.fetchPeople();
		this.props.fetchCPO();		
	}
	onSubmit = (formProps) => {
		console.log(formProps);
		const objectId = this.props.CPO[this.props.arrIndex]._id;
		console.log("logging objectid");
		console.log(objectId);
		this.props.updateCPO(formProps, objectId);
	};
	createPeopleOptions() {
		if (Object.keys(this.props.people).length === 0) {
			return <option />;
		} else {
			console.log(this.props.people);							
			return this.props.people.map((person) => {
				return (
					<option key={person._id} value={person._id}>{person.name + "," + person.position}</option>
				);
			});			
		}
		
	}
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
				  component = { DayPickerComponent }
				  />
			  </fieldset>
			  <fieldset>
				<label>Salesperson</label>
				<Field name="salesperson" component="select">
				  <option key="something" value=""></option>
				  {this.createPeopleOptions()}
       			</Field>
			  </fieldset>
			  <fieldset>
				<label>Company</label>
				<Field name="company_name" component="input" />
			  </fieldset>
			  <fieldset>
				<label>bill-to-address</label>
				<Field
				  name="bill_to_address.name"
				  type="text"
				  component="input"
				  autoComplete="none"
				  placeholder="name"
				  />
				<Field
				  name="bill_to_address.street"
				  type="text"
				  component="input"
				  autoComplete="none"
				  placeholder="street"
				  />
				<Field
				  name="bill_to_address.city"
				  type="text"
				  component="input"
				  autoComplete="none"
				  placeholder="city"
				  />
				<Field
				  name="bill_to_address.state"
				  type="text"
				  component="input"
				  autoComplete="none"
				  placeholder="state"
				  />
				<Field
				  name="bill_to_address.zip"
				  type="number"
				  component="input"
				  autoComplete="none"
				  placeholder="zip"
				  />							
			  </fieldset>			
			  <button>Saved</button>
			</form>
		);
	}
};
function mapStateToProps(state, ownProps) {
	return {CPO: state.CPO,
			people: state.people,
			initialValues: state.CPO[ownProps.arrIndex],
			enableReinitialize: true
		   };
};
export default compose(
	connect(mapStateToProps, actions),
	reduxForm({ form: 'CPOUpdateForm'})
)(CPOUpdateForm);
