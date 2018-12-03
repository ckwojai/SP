import React, { Component } from 'react';
import OSCasePanel from '../components/OSCasePanel.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from "../actions";

import Button from '@material-ui/core/Button';

function Address2Str(obj) {
	return obj.name + ", " + obj.street + ", " + obj.city + ", " + obj.state + " " + obj.zip;
}
const styles = theme => ({
  root: {
    width: '100%',
  }
});

class OSCaseTable extends Component {
	componentDidMount() {
		this.props.fetchOSCases();
	}
	createOSCasePanel() {
		return (
			this.props.OSCase.map((tempCase, index) => {
				return ( <OSCasePanel key = {index} arrIndex={index} />
					   );
			})
		);
	}
    newOSCase = () => {
        console.log(this.props);
        this.props.newOSCase({state: "0"});
    }
	render() {
		const { classes } = this.props;
		console.log("This.props.OSCase");
		console.log(this.props.OSCase);
		console.log(Object.keys(this.props.OSCase).length);
		if (Object.keys(this.props.OSCase).length === 0) {
			console.log("Inside == 0");
			return (
				<div>
                  <Button color="primary" onClick = {this.newOSCase}>New Case</Button>
                </div>

			);
		}
		else {
			console.log("Inside =!= 0");
		return (
			<div className={classes.root}>
              <Button color="primary" onClick = {this.newOSCase}>New Case</Button>
			  {this.createOSCasePanel()}
			</div>
		);
		}
	}
}
OSCaseTable.propTypes = {
	classes: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
	return {OSCase: state.OSCase};
};
export default compose (
	withStyles(styles),
	connect(mapStateToProps, actions)
)
(OSCaseTable);
