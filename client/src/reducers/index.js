import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import people from './people';
import CPO from './CPO';

export default combineReducers({
	auth: auth,
	form: formReducer,
	people: people,
	CPO: CPO
});
