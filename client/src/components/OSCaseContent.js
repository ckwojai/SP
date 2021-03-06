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
import OSCaseCPOForm from './OSCaseCPOForm.js';
import OSCaseScheduleForm from './OSCaseScheduleForm.js';
import OSCaseBillForm from './OSCaseBillForm.js';
import OSCaseReportDialog from './OSCaseReportDialog.js';

const styles = theme => ({
	root: {
		width: '100%',
	},
	heading: {
		fontSize: theme.typography.pxToRem(15),
		fontWeight: theme.typography.fontWeightRegular,
	},
});

class OSCaseContent extends Component {
	render() {
		const { classes } = this.props;
        switch (this.props.OSCase.state) {
        case 0:
		return (
			<div>
			  <OSCaseCPOForm form={`OSCaseCPOForm_${this.props.arrIndex}`} arrIndex={this.props.arrIndex}/>
			</div>
		);
        case 1:
            return (
				<div>
				  <OSCaseScheduleForm form={`OSCaseScheduleForm_${this.props.arrIndex}`} arrIndex={this.props.arrIndex}/>
				</div>                
            );
        case 2:
            return (
				<div>
				  <OSCaseBillForm form={`OSCaseBillForm_${this.props.arrIndex}`} arrIndex={this.props.arrIndex}/>
				</div>                
            );
        case 3:
            return (
				<div>				
				  <h3>All done. Please select what you want to do below.</h3>
				  <OSCaseReportDialog arrIndex={this.props.arrIndex} />
				</div>                
            );			
			
        default:
            return (
                <div>
                  Default Case man
                </div>
            );
        }
	}
}


OSCaseContent.propTypes = {
	classes: PropTypes.object.isRequired,
};
function mapStateToProps(state, ownProps) {
	return {OSCase: state.OSCase[ownProps.arrIndex]};
};
export default compose (
	withStyles(styles),
	connect(mapStateToProps, actions)
)
(OSCaseContent);


