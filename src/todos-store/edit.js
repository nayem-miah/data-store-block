import { useBlockProps } from '@wordpress/block-editor';
import './editor.scss';
import { useSelect, useDispatch } from '@wordpress/data';
import { CheckboxControl, TextControl, Button } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
export default function Edit() {
	const [ newToDo, setNewToDo ] = useState( '' );

	const todos = useSelect( ( select ) => {
		const toDoStore = select( 'create-block/todos-store' );
		return toDoStore && toDoStore.getTodos();
	}, [] );
	const actions = useDispatch( 'create-block/todos-store' );
	const addTodo = actions && actions.addTodo;

	const handleForm = async( e ) => {
		e.preventDefault();
		if ( addTodo ) {
			await addTodo({
				title: newToDo,
				completed: false,
				id: 1
			} );
			setNewToDo('')
		}
	};

	return (
		<div { ...useBlockProps() }>
			<ul>
				{ todos?.map( ( todo ) => (
					<li
						key={ todo?.id }
						className={ todo?.completed && 'todo-completed' }
					>
						<CheckboxControl
							label={ todo?.title }
							checked={ todo?.completed }
							onChange={ ( value ) => console.log( value ) }
						/>
					</li>
				) ) }
			</ul>
			<form onSubmit={ handleForm } className="addtodo-form">
				<TextControl
					value={ newToDo }
					onChange={ ( v ) => setNewToDo( v ) }
				/>
				<Button type="submit" isPrimary>
					{ __( 'Add To Do', 'todos-store' ) }
				</Button>
			</form>
		</div>
	);
}
