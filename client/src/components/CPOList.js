import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from "../actions";

class CPOList extends Component {
	componentDidMount() {
		this.props.fetchCPO();
	}
	renderCPOList() {
		if (Object.keys(this.props.CPO).length === 0) {
			console.log("no people");
			console.log(this.props.CPO);							
			return <li>Loading</li>;
		} else {
			console.log("else CPO");			
			console.log(this.props.CPO);							
		// return (<li>idk</li>);
		// return <li>idk</li>;
		return this.props.CPO.map((temp_cpo) => {
			return (
				<li
				  key={temp_cpo._id}
				  className="list-group-item">{temp_cpo.CPO_num}
				</li>
			);
		});			
		}
	}
	render() {
		return (
			<div>
			  <ul>
				{this.renderCPOList()}
			  </ul>
			</div>
		);
	}
};
function mapStateToProps(state) {
	return {CPO: state.CPO};
};

export default compose(
	connect(mapStateToProps, actions),
)(CPOList);
