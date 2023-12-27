import React from "react";

export default function TodoList({ todos, setTodos, setEditTodo }) {
	function handleDelete({ id }) {
		setTodos(todos.filter(todo => todo.id !== id));
	}
	function handleEdit({ id }) {
		const findTodo = todos.find(todo => todo.id === id);
		setEditTodo(findTodo);
	}
	function handleComplete({ id }) {
		setTodos(
			todos.map(item => {
				if (item.id === id) {
					return { ...item, completed: !item.completed };
				}
				return item;
			})
		);
	}
	return (
		<ul className="list-group">
			{todos.map(todo => (
				<li
					key={todo.id}
					className="list-group-item d-flex justify-content-between align-items-center">
					<p className={`list ${todo.completed ? "complete": ""}`}>{todo.title}</p>
					<div>
						<button
							className="btn btn-outline-success button-complete task-button"
							onClick={() => handleComplete(todo)}>
							<i className="bi bi-circle-fill"></i>
						</button>
						<button
							className="btn btn-outline-primary button-edit"
							onClick={() => handleEdit(todo)}>
							<i className="bi bi-pencil-fill"></i>
						</button>
						<button
							className="btn btn-outline-danger button-delete"
							onClick={() => handleDelete(todo)}>
							<i className="bi bi-trash2-fill"></i>
						</button>
					</div>
				</li>
			))}
		</ul>
	);
}
