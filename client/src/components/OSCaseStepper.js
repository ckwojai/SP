import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from "../actions";

function getSteps() {
	return ['Create CPO', 'Schedule Training Details', 'SAP and SRM Billing'];
}

function getStepContent(step) {
	switch (step) {
    case 0:
		return '';
    case 1:
		return '';
    case 2:
		return '';
    default:
		return 'Unknown step';
	}
}
const styles = theme => ({
	root: {
		width: '90%',
	},
	button: {
		marginTop: theme.spacing.unit,
		marginRight: theme.spacing.unit,
	},
	actionsContainer: {
		marginBottom: theme.spacing.unit * 2,
	},
	resetContainer: {
		padding: theme.spacing.unit * 3,
	},
});
class OSCaseStepper extends React.Component {
	state = {
		activeStep: this.props.OSCase.state,
	};
	handleNext = () => {
		const formProps = {state: this.state.activeStep + 1};
		this.props.updateOSCases(formProps, this.props.OSCase._id);
		this.setState(state => ({
			activeStep: state.activeStep + 1,
		}));		
	};

	handleBack = () => {
		const formProps = {state: this.state.activeStep - 1};
		this.props.updateOSCases(formProps, this.props.OSCase._id);		
		this.setState(state => ({
			activeStep: state.activeStep - 1,
		}));
	};

	handleReset = () => {
		this.setState({
			activeStep: 0,
		});
	};

	render() {
		const { classes } = this.props;
		const steps = getSteps();
		const { activeStep } = this.state;

		return (
			<div className={classes.root}>
			  <Stepper activeStep={activeStep} orientation="vertical">
				{steps.map((label, index) => {
					return (
						<Step key={label}>
						  <StepLabel>{label}</StepLabel>
						  <StepContent>
							<Typography>{getStepContent(index)}</Typography>
							<div className={classes.actionsContainer}>
							  <div>
								<Button
								  disabled={activeStep === 0}
								  onClick={this.handleBack}
								  className={classes.button}
								  >
								  Back
								</Button>
								<Button
								  variant="contained"
								  color="primary"
								  onClick={this.handleNext}
								  className={classes.button}
								  >
								  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
								</Button>
							  </div>
							</div>
						  </StepContent>
						</Step>
					);
				})}
			</Stepper>
				{activeStep === steps.length && (
					<Paper square elevation={0} className={classes.resetContainer}>
					  <Typography>All steps completed - you&apos;re finished</Typography>
					  <Button onClick={this.handleReset} className={classes.button}>
						Reset
					  </Button>
					</Paper>
				)}
			</div>
		);
	}
}  

OSCaseStepper.propTypes = {
	classes: PropTypes.object,
};

function mapStateToProps(state, ownProps) {
	return {OSCase: state.OSCase[ownProps.arrIndex]};
};
export default compose (
	withStyles(styles),
	connect(mapStateToProps, actions)
)
(OSCaseStepper);
