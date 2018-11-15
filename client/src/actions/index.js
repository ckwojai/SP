import axios from 'axios';
import { NEW_PERSON, NEW_CPO, FETCH_PEOPLE, FETCH_CPO } from './types.js';

export const newperson = (formProps) => async dispatch => {
	const response = await axios.post('http://localhost:3090/api/person', formProps);
	dispatch(
		{
			type: NEW_PERSON,
			payload: response.data
		}
	);
};


export const newCPO = (formProps) => async dispatch => {
	const response = await axios.post('http://localhost:3090/api/CPO', formProps);
	dispatch(
		{
			type: NEW_CPO,
			payload: response.data
		}
	);
};

export const fetchPeople = () => async dispatch => {
	console.log("inside fetchPeople");	
	const response = await axios.get('http://localhost:3090/api/person');
	console.log(response.data);
	dispatch(
		{
			type: FETCH_PEOPLE,
			payload: response.data
		}
	);
};
export const fetchCPO = () => async dispatch => {
	console.log("inside fetchCPO");	
	const response = await axios.get('http://localhost:3090/api/cpo');
	console.log(response.data);
	dispatch(
		{
			type: FETCH_CPO,
			payload: response.data
		}
	);
};
