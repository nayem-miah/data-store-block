import { createReduxStore, register } from '@wordpress/data';
import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';
import * as resolvers from './resolvers';
const store = createReduxStore( 'create-block/todos-store', {
	// we get data store 'create-block/todos-store' with the name
	reducer, //reducer is to update date
	actions, //actions is to create data
	selectors, // selector is to retrive data
	resolvers, // we can run some sideEffect in resolvers
	controls: {
		FETCH_TODO() {
			//the function has to be same as your types name
			return window
				.fetch( 'https://jsonplaceholder.typicode.com/todos?_limit=10' )
				.then( ( response ) => response.json() );
		},
		CREATE_TODO( { title } ) {
			console.log( 'title.................', title );
			return window
				.fetch( 'https://jsonplaceholder.typicode.com/todos', {
					method: 'POST',
					body: JSON.stringify( {
						title,
						completed: false,
						userId: 1,
					} ),
					headers: {
						'Content-type': 'application/json; charset=UTF-8',
					},
				} )
				.then( ( response ) => {
					if ( response.ok ) {
						return response.json();
					}
					throw new Error( 'Could not create todo.' );
				} );
		},
	},
} );

register( store );
