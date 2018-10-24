import axios from 'axios';
import { NEW_PERSON } from './types.js';

export const newperson = (formProps) => (dispatch) => {
	axios.post('http://localhost:3090/api/person', formProps);
	};
