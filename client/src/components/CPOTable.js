import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from "../actions";

const CustomTableCell = withStyles(theme => ({
	head: {
		backgroundColor: theme.palette.common.black,
		color: theme.palette.common.white,
	},
	body: {
		fontSize: 14,
	},
}))(TableCell);
const styles = theme => ({
	root: {
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
	},
	table: {
		minWidth: 700,
	},
	row: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.background.default,
		},
	},
});

function Address2Str(obj) {
	return obj.name + ", " + obj.street + ", " + obj.city + ", " + obj.state + " " + obj.zip;
}

class CPOTable extends Component {
	componentDidMount() {
		this.props.fetchCPO();
	}
	createTable() {
		const { classes } = this.props;
		if (Object.keys(this.props.CPO).length === 0) {
			return (
				<TableRow>
				  <CustomTableCell>Loading</CustomTableCell>
				</TableRow>
			);
		} else {
		return this.props.CPO.map( (temp_cpo) => {
			return (
				<TableRow className={classes.row} key={temp_cpo._id}>
				  <CustomTableCell>{temp_cpo.CPO_num}</CustomTableCell>
				  <CustomTableCell>{temp_cpo.issue_date}</CustomTableCell>
				  <CustomTableCell>{temp_cpo.salesperson}</CustomTableCell>
				  <CustomTableCell>{temp_cpo.company_name}</CustomTableCell>
				  <CustomTableCell>{Address2Str(temp_cpo.bill_to_address)}</CustomTableCell>							
				</TableRow>
			);

		});
		}
	};
	render() {
		const { classes } = this.props;
		{console.log(this.props.CPO)}
		return (
			<Paper className={classes.root}>
			  <Table className={classes.table}>
				<TableHead>
				  <TableRow>
					<CustomTableCell>CPO#</CustomTableCell>
					<CustomTableCell>Issue Date</CustomTableCell>
					<CustomTableCell>Salesperson</CustomTableCell>
					<CustomTableCell>Company</CustomTableCell>
					<CustomTableCell>Bill to Address</CustomTableCell>
				  </TableRow>
				</TableHead>
				<TableBody>
				  {this.createTable()}
			</TableBody>
				</Table>
				</Paper>
		);		
	}
}

CPOTable.propTypes = {
	classes: PropTypes.object.isRequired,
};
function mapStateToProps(state) {
	return {CPO: state.CPO};
};
export default compose (
	withStyles(styles),
	connect(mapStateToProps, actions)
)
(CPOTable);
