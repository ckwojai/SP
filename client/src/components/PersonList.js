import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import * as actions from "../actions";

class PersonList extends Component {
	componentDidMount() {
		this.props.fetchPeople();
	}
	renderPersonList() {
		if (Object.keys(this.props.people).length === 0) {
			console.log("no people");
			console.log(this.props.people);							
			return <li>Loading</li>;
		} else {
			console.log("else people");			
			console.log(this.props.people);							
		// return (<li>idk</li>);
		// return <li>idk</li>;
		return this.props.people.map((person) => {
			return (
				<li
				  key={person._id}
				  className="list-group-item">{person.name}
				</li>
			);
		});			
		}
	}
	render() {
		return (
			<div>
			  <ul>
				{this.renderPersonList()}
			  </ul>
			</div>
		);
	}
};
function mapStateToProps(state) {
	return {people: state.people};
};

export default compose(
	connect(mapStateToProps, actions),
)(PersonList);
