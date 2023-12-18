import { useState } from 'react';

export const useRequestEditTodo = (newTitleTodo, refreshTodo) => {
	const [isEditing, setIsEditing] = useState(false);

	const requestEditTodo = (id) => {
		setIsEditing(true);

		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: newTitleTodo,
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Дело изменено, ответ сервера:', response);
				refreshTodo();
			})
			.finally(() => {
				setIsEditing(false);
			});
	};

	return {
		isEditing,
		requestEditTodo,
	};
};
