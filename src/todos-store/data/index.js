import { createReduxStore, register } from '@wordpress/data';
import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';
import * as resolvers from './resolvers';
import controls from './controls'
const store = createReduxStore( 'create-block/todos-store', {
	reducer, //reducer is to update date
	actions, //actions is to create data
	selectors, // selector is to retrive data
    resolvers, // we can run some sideEffect in resolvers
    controls
} );

register( store );
