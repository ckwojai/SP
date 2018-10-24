import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from "../actions";

class PersonForm extends Component {
	onSubmit = (formProps) => {
		this.props.newperson(formProps);
	};
	render() {
		const { handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit(this.onSubmit)}>
			  <fieldset>
				<label>name</label>
				<Field
				  name="name"
				  type="text"
				  component="input"
				  autoComplete="none"
				  />
			  </fieldset>
			  <fieldset>
				<label>gender</label>
				<Field
				  name="gender"
				  type="text"
				  component="select"
				  autoComplete="none"				  
				  >
				  <option value=""></option>
				  <option value="M">Male</option>
				  <option value="F">Female</option>
				</Field>				
			  </fieldset>
			  <fieldset>
				<label>company</label>
				<Field
				  name="company"
				  type="text"
				  component="input"
				  placeholder="Sony"
				  autoComplete="none"
				  />
			  </fieldset>
			  <fieldset>
				<label>position</label>
				<Field
				  name="position"
				  type="text"
				  component="input"
				  autoComplete="none"
				  />
			  </fieldset>
			  <fieldset>
				<label>cell_num</label>
				<Field
				  name="cell_num"
				  type="text"
				  component="input"
				  autoComplete="none"
				  />
			  </fieldset>
			  <fieldset>
				<label>office_num</label>
				<Field
				  name="office_num"
				  type="text"
				  component="input"
				  autoComplete="none"
				  />p
			  </fieldset>
			  <fieldset>
				<label>email address</label>
				<Field
				  name="email_address"
				  type="text"
				  component="input"
				  autoComplete="none"
				  />
			  </fieldset>			  			  
			  <button>Submit</button>
			</form>
		);
	}
};
export default compose(
	connect(null, actions),
	reduxForm({ form: 'PersonForm'})
)(PersonForm);
