import { NEW_PERSON } from '../actions/types.js';

const INITIAL_STATE = {
	authenticated: '',
	errorMessage: ''
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case NEW_PERSON:
		return {...state};
	default:
		return state;
	}		
};
