import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App.js';  
import PersonForm from './components/PersonForm.js';
import CPOForm from './components/CPOForm.js';
import PersonList from './components/PersonList.js';
import reducers from './reducers';

const store = createStore(
	reducers,
	{},
	applyMiddleware(reduxThunk)
);

ReactDOM.render(
	<Provider store = { store }>
	  <BrowserRouter>
		<App>
		  <Route path="/newperson" component={PersonForm} />
		  <Route path="/newcpo" component={CPOForm} />		  
		  <Route path="/personlist" component={PersonList} />		  
		</App>
	  </BrowserRouter>
	</Provider>	
		,
	document.querySelector('#root')
);

