import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import App from './components/App.js';
import Test from './components/Test.js';
import PersonForm from './components/PersonForm.js';
import CPOForm from './components/CPOForm.js';
import PersonList from './components/PersonList.js';
import CPOList from './components/CPOList.js';
import CPOTable from './components/CPOTable.js';
import CPOUpdateForm from './components/CPOUpdateForm.js';
import SideBar from './components/SideBar.js';
import OSCasePanel from './components/OSCasePanel.js';
import OSCaseTable from './components/OSCaseTable.js';
import TrainingItemsFieldArray from './components/TrainingItemsFieldArray.js';
import reducers from './reducers';
import OSCaseContent from './components/OSCaseContent.js';
import OSCaseScheduleForm from './components/OSCaseScheduleForm.js';
import OSCaseReport from './components/OSCaseReport.js';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(
	reducers,
	{},
	applyMiddleware(reduxThunk)
);

ReactDOM.render(
	<Provider store = { store }>
	  <MuiThemeProvider muiTheme={getMuiTheme()}>
		<BrowserRouter>
		  <App>
			{console.log(process.env.REACT_APP_BASE_URL)}
			<Route path="/" exact component={OSCaseTable} />			
			<Route path="/newperson" component={PersonForm} />
			<Route path="/newcpo" component={CPOForm} />		  
			<Route path="/personlist" component={PersonList} />		  
			<Route path="/CPOList" component={CPOList} />
			<Route path="/CPOTable" component={CPOTable} />		  		  
			<Route path="/sidebar" component={SideBar} />
			<Route path="/test" component={OSCaseTable} />
		  </App>
		</BrowserRouter>
	  </MuiThemeProvider>	  
	</Provider>	
		,
	document.querySelector('#root')
);

