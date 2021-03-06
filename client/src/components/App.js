import React from 'react';
import Header from './Header.js';
import SideBar from './SideBar.js';

export default ({ children }) => {
	return (
		<div>
		  <SideBar children={children}/>
		</div>
	);
};
