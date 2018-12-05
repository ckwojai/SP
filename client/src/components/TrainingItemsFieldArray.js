import React, { Component } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from "../actions";

import { withStyles } from '@material-ui/core/styles';

import { Field, FieldArray, reduxForm } from 'redux-form'
import { TextField } from 'redux-form-material-ui';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';

const styles = theme => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
	dense: {
		marginTop: 16,
	},
	menu: {
		width: 200,
	},
});


class TrainingItemsFieldArray extends Component {
	componentDidMount() {
	}
	renderMembers ({ fields, meta: { error, submitFailed } }) {
		return (
			<div>
			  <Button onClick={() => fields.push({})}>
				Add Training Items
			  </Button>
			  {fields.map((training_items, index) => 
						  <div>
								<Button variant="outlined" disabled>Item # {index + 1}</Button>				  									<Field
										  name={`${training_items}.SKU_num`}
										  hintText="SKU#"
										  floatingLabelText="SKU#"
										  component={TextField}				  
										  />
										<Field
											  name={`${training_items}.description`}
											  hintText="Description"
											  floatingLabelText="Description"
											  component={TextField}				  
											  />
											{console.log("Logging Training Items")}
											{console.log(training_items)}
											<Field
												  name={`${training_items}.cost`}
												  hintText="Cost"
												  floatingLabelText="Cost"
												  margin="normal"
												  variant="outlined"				
												  component={TextField}
												  />
												<Button onClick={() => fields.remove(index)} color="secondary">Remove</Button>
							  </div>				  
						 )}
			</div>
		);
	}
	render() {
		const { handleSubmit, pristine, reset, submitting } = this.props;		
		return (
			  <FieldArray name="cpo.training_items" component={this.renderMembers} />
		);
	}		
};

export default compose (
	withStyles(styles),
)
(TrainingItemsFieldArray);
