import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from "../actions";

function stringToDate(date_string) {
	const date_object = new Date(date_string);
	return date_object.getFullYear() + "-" + date_object.getMonth() + "-" + date_object.getDate();
};

class OSCaseReport extends Component {
	componentDidMount() {
		this.props.fetchOSCases();
	}
	render() {
		const {sap, srm} = this.props.OSCase.billing;
		const {training_details, cpo} = this.props.OSCase;
		return (
			<div className="container">
			  <div className="row">
				<div className="col">
				  <div className="text-center"> <i className="fa fa-search-plus float-left icon"></i>
					<h2>Invoice for purchase #33221</h2>
				  </div>
				  <div className="row">
					<div className="col float-left">
					  <div className="card height">
						<div className="card-header">SAP Details</div>
						<div className="card-body">
						  <strong>SAP#: </strong>{sap.sap_num}<br />
						  <strong>PO#: </strong>{cpo.cpo_num}<br />
						  <strong>Entry Date: </strong>{stringToDate(sap.processed_date)}<br />					  						  						  
						  <strong>Sold-To#: </strong>{sap.sold_to_num}<br />
						  <strong>Ship-To#: </strong>{sap.ship_to_num}<br />
						</div>
					  </div>
					</div>
					<div className="col">
					  <div className="card height">
						<div className="card-header">Training Details</div>
						<div className="card-body">
						  <strong>Company: </strong>{cpo.company}<br />
						  <strong>Date: </strong>{stringToDate(training_details.start_date) + " to " + stringToDate(training_details.end_date)}<br />
						  <strong>Location: </strong>{training_details.location.city}<br />					  						  						  						  						  
						  <strong>PoC: </strong>{training_details.poc}<br />
						  <strong>Trainer: </strong>{training_details.trainer}<br />					  						  						  
						</div>
					  </div>
					</div>
					<div className="col float-right">
					  <div className="card height">
						<div className="card-header">SRM Details</div>
						<div className="card-body">
						  <strong>SPO#: </strong>{srm.spo_num}<br />
						  <strong>GR#: </strong>{srm.gr_num}<br />
						  <strong>Processed Date: </strong>{stringToDate(srm.processed_date)}<br />					  						  						  						  
						  <strong>Quote Amount: </strong>{"$" + srm.proposed_amount}<br />
						  <strong>Invoice Amount: </strong>{"$" + srm.invoiced_amount}<br />
						</div>						  
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			  <div className="row">
				<div className="col-lg-12">
				  <div className="card">
					<div className="card-header">
					  <h3 className="text-center"><strong>Order summary</strong></h3>
					</div>
					<div className="card-body">
					  <div className="table-responsive">
						<table className="table table-sm">
						  <thead>
							<tr>
							  <td><strong>Item Name</strong>
							  </td>
							  <td className="text-center"><strong>Item Number</strong>
							  </td>
							  <td className="text-right"><strong>Total</strong>
							  </td>
							</tr>
						  </thead>
						  <tbody>
							<tr>
							  <td>Samsung Galaxy S5</td>
							  <td className="text-center">$900</td>
							  <td className="text-right">$900</td>
							</tr>
							<tr>
							  <td>Samsung Galaxy S5 Extra Battery</td>
							  <td className="text-center">$30.00</td>
							  <td className="text-right">$30.00</td>
							</tr>
							<tr>
							  <td className="highrow"></td>
							  <td className="highrow text-center"><strong>Subtotal</strong>
							  </td>
							  <td className="highrow text-right">$958.00</td>
							</tr>
							<tr>
							  <td className="emptyrow"></td>
							  <td className="emptyrow text-center"><strong>Shipping</strong>
							  </td>
							  <td className="emptyrow text-right">$20</td>
							</tr>
							<tr>
							  <td className="emptyrow"><i className="fa fa-barcode iconbig"></i>
							  </td>
							  <td className="emptyrow text-center"><strong>Total</strong>
							  </td>
							  <td className="emptyrow text-right">$978.00</td>
							</tr>
						  </tbody>
						</table>
					  </div>
					</div>
				  </div>
				</div>
			  </div>
			</div>			  
		);
	}
};
function mapStateToProps(state, ownProps) {
	return {
		OSCase: state.OSCase[ownProps.arrIndex],
		initialValues: state.OSCase[ownProps.arrIndex],
		enableReinitialize: true
	};
};
export default compose(
	connect(mapStateToProps, actions),
)(OSCaseReport);


