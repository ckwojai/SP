import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from "../actions";

class OSCaseReport extends Component {
	componentDidMount() {
		this.props.fetchOSCases();
	}
	render() {
		const {sap, srm} = this.props.OSCase.billing;
		const {cpo} = this.props.OSCase;
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
						  <strong>Entry Date: </strong>12/19/2018<br />					  						  						  
						  <strong>Sold-To#: </strong>1111<br />
						  <strong>Ship-To#: </strong>2222<br />
						</div>
					  </div>
					</div>
					<div className="col">
					  <div className="card height">
						<div className="card-header">Training Details</div>
						<div className="card-body">
						  <strong>Type: </strong>MVS3000 3-Day Ops<br />
						  <strong>Date: </strong>12/01/2019 - 12/04/2019<br />
						  <strong>Location: </strong>San Francisco<br />					  						  						  						  						  
						  <strong>PoC: </strong>Joe Durant<br />
						  <strong>Trainer: </strong>Glenn Hill<br />					  						  						  
						</div>
					  </div>
					</div>
					<div className="col float-right">
					  <div className="card height">
						<div className="card-header">SRM Details</div>
						<div className="card-body">
						  <strong>SPO#: </strong>{srm.spo_num}<br />
						  <strong>GR#: </strong>{srm.gr_num}<br />
						  <strong>Processed Date: </strong>12/16/2019<br />					  						  						  						  
						  <strong>Quote Amount: </strong>$3240<br />
						  <strong>Invoice Amount: </strong>$3000<br />
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
							  <td className="text-center"><strong>Item Price</strong>
							  </td>
							  <td className="text-center"><strong>Item Quantity</strong>
							  </td>
							  <td className="text-right"><strong>Total</strong>
							  </td>
							</tr>
						  </thead>
						  <tbody>
							<tr>
							  <td>Samsung Galaxy S5</td>
							  <td className="text-center">$900</td>
							  <td className="text-center">1</td>
							  <td className="text-right">$900</td>
							</tr>
							<tr>
							  <td>Samsung Galaxy S5 Extra Battery</td>
							  <td className="text-center">$30.00</td>
							  <td className="text-center">1</td>
							  <td className="text-right">$30.00</td>
							</tr>
							<tr>
							  <td>Screen protector</td>
							  <td className="text-center">$7</td>
							  <td className="text-center">4</td>
							  <td className="text-right">$28</td>
							</tr>
							<tr>
							  <td className="highrow"></td>
							  <td className="highrow"></td>
							  <td class="highrow text-center"><strong>Subtotal</strong>
							  </td>
							  <td class="highrow text-right">$958.00</td>
							</tr>
							<tr>
							  <td class="emptyrow"></td>
							  <td class="emptyrow"></td>
							  <td class="emptyrow text-center"><strong>Shipping</strong>
							  </td>
							  <td class="emptyrow text-right">$20</td>
							</tr>
							<tr>
							  <td class="emptyrow"><i class="fa fa-barcode iconbig"></i>
							  </td>
							  <td class="emptyrow"></td>
							  <td class="emptyrow text-center"><strong>Total</strong>
							  </td>
							  <td class="emptyrow text-right">$978.00</td>
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


