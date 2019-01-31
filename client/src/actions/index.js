import axios from 'axios';
import { NEW_PERSON, NEW_CPO, FETCH_PEOPLE, FETCH_CPO, UPDATE_CPO, FETCH_OSCASES, UPDATE_OSCASES, NEW_OSCASE } from './types.js';

const instance = axios.create({baseURL: process.env.REACT_APP_BASE_URL});

export const newOSCase = (formProps) => async dispatch => {
	console.log("Inside new OS Case Action Creator");
	console.log(process.env.REACT_APP_BASE_URL);
	const response = await instance.post('/api/OSCase', formProps);
	dispatch(
		{
			type: NEW_OSCASE,
			payload: response.data
		}
	);
	dispatch(fetchOSCases());
};
export const newCPO = (formProps) => async dispatch => {
	const response = await instance.post('/api/CPO', formProps);
	dispatch(
		{
			type: NEW_CPO,
			payload: response.data
		}
	);
	dispatch(fetchCPO());
};
export const fetchOSCases = () => async dispatch => {
	console.log("inside fetchCases");	
	const response = await instance.get('/api/OSCase');
	console.log(response.data);
	dispatch(
		{
			type: FETCH_OSCASES,
			payload: response.data
		}
	);
};

export const updateOSCases = (formProps, id) => async dispatch => {
	const response = await instance.put('/api/OSCase/' + id, formProps);
	dispatch(
		{
			type: UPDATE_OSCASES,
			payload: response.data
		}
	);
	dispatch(fetchOSCases());	
};


export const fetchCPO = () => async dispatch => {
	console.log("inside fetchCPO");	
	const response = await instance.get('/api/cpo');
	console.log(response.data);
	dispatch(
		{
			type: FETCH_CPO,
			payload: response.data
		}
	);
};
export const updateCPO = (formProps, id) => async dispatch => {
	const response = await instance.put('/api/CPO/' + id, formProps);
	dispatch(
		{
			type: UPDATE_CPO,
			payload: response.data
		}
	);
	dispatch(fetchCPO());	
};

export const newperson = (formProps) => async dispatch => {
	const response = await instance.post('/api/person', formProps);
	dispatch(
		{
			type: NEW_PERSON,
			payload: response.data
		}
	);
	dispatch(fetchPeople());
};

export const fetchPeople = () => async dispatch => {
	console.log("inside fetchPeople");	
	const response = await instance.get('/api/person');
	console.log(response.data);
	dispatch(
		{
			type: FETCH_PEOPLE,
			payload: response.data
		}
	);
};

