import React from 'react';
import Header from './Header.js';

export default ({ children }) => {
	return (
		<div>
		  <Header />
		  {children}
		</div>
	);
};
