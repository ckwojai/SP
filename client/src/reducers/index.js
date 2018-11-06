import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import auth from './auth';
import people from './people';

export default combineReducers({
	auth: auth,
	form: formReducer,
	people: people
});
