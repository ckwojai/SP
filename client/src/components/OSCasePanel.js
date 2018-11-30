import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from "../actions";

import OSCaseStepper from './OSCaseStepper.js';
import CPOUpdateForm from './CPOUpdateForm.js';

const styles = theme => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
});

class OSCasePanel extends Component {
	render() {
		const { classes } = this.props;
		return (
			<ExpansionPanel>
			  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
				<Typography className={classes.heading}>{this.props.OSCase.state}</Typography>
			  </ExpansionPanelSummary>
			  <ExpansionPanelDetails>
				<div>
				  <OSCaseStepper arrIndex={this.props.arrIndex} />				  
				</div>
				<div>
				  <CPOUpdateForm arrIndex={this.props.arrIndex} />
				</div>
			  </ExpansionPanelDetails>
			</ExpansionPanel>
		);
	}
}


OSCasePanel.propTypes = {
	classes: PropTypes.object.isRequired,
};
function mapStateToProps(state, ownProps) {
	return {OSCase: state.OSCase[ownProps.arrIndex]};
};
export default compose (
	withStyles(styles),
	connect(mapStateToProps, actions)
)
(OSCasePanel);


