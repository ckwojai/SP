import { NEW_PERSON, FETCH_PEOPLE, FETCH_CPO, UPDATE_CPO } from '../actions/types.js';

const INITIAL_STATE = {
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
	case FETCH_CPO:
		console.log("Previous State");
		console.log(state);
		console.log("Returning new state form action payload")
		console.log(action.payload);
		return action.payload;		
		// console.log(Object.assign({}, state, {state: action.payload}));
		// return Object.assign({}, state, {state: action.payload});
	case UPDATE_CPO:
		return state;
	default:
		return state;
	}		
};
