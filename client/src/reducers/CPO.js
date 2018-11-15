import { NEW_PERSON, FETCH_PEOPLE, FETCH_CPO } from '../actions/types.js';

const INITIAL_STATE = {
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case FETCH_CPO:
		console.log(action.payload);
		return action.payload;
	default:
		return state;
	}		
};
