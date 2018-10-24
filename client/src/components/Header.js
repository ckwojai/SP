import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div>
			  <Link to="/newperson">New Person</Link>
			  <Link to="/newcpo">New CPO</Link>
			</div>
		);
	}
}

export default Header;
