import { NEW_OSCASE, FETCH_OSCASES } from '../actions/types.js';

const INITIAL_STATE = {
}

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
    case NEW_OSCASE:
        return state;
	case FETCH_OSCASES:
		console.log("Previous State");
		console.log(state);
		console.log("Returning new state form action payload");
		console.log(action.payload);
		return action.payload;		
		// console.log(Object.assign({}, state, {state: action.payload}));
		// return Object.assign({}, state, {state: action.payload});
	default:
		return state;
	}		
};
