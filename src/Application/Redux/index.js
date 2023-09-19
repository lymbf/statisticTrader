import { combineReducers } from 'redux';
import config from './Reducers/config';
import auth from './Reducers/auth';
import error from './Reducers/error';
import actions from './Reducers/actions';
import ui from './Reducers/ui';

export default combineReducers({config, auth, error, actions, ui})