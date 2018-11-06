import { NEW_PERSON, FETCH_PEOPLE } from '../actions/types.js';

const INITIAL_STATE = {
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case FETCH_PEOPLE:
		console.log(action.payload);
		return action.payload;
	case NEW_PERSON:
		return {...state};
	default:
		return state;
	}		
};
