import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Form({
	input,
	setInput,
	todos,
	setTodos,
	editTodo,
	setEditTodo,
}) {
	function updateTodo(title, id, completed) {
		const newTodo = todos.map(todo =>
			todo.id === id ? { title, id, completed } : todo
		);
		setTodos(newTodo);
		setEditTodo("");
	}
	useEffect(() => {
		if (editTodo) {
			setInput(editTodo.title);
		} else {
			setInput("");
		}
	}, [setInput, editTodo]);
	const onInputChange = event => {
		setInput(event.target.value);
	};
	const onFormSubmit = event => {
		event.preventDefault();
		if (!editTodo) {
			setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
			setInput("");
		} else {
			updateTodo(input, editTodo.id, editTodo.completed);
		}
	};
	return (
		<form onSubmit={onFormSubmit} id="todoForm">
			<div className="input-group mb-3">
				<input
					type="text"
					placeholder="Enter a Todo..."
					className="form-control task-input"
					value={input}
					required
					onChange={onInputChange}
				/>
				<button
					className="btn btn-success button-add"
					type="submit">
					{editTodo ? "OK" : "Add"}
				</button>
			</div>
		</form>
	);
}
