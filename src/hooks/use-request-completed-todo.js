import { useState } from 'react';

export const useRequestCompletedTodo = (refreshTodo) => {
	const [isCompleted, setIsCompleted] = useState(false);
	const requestCompletedTodo = (id) => {
		setIsCompleted(true);
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'PATCH',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				completed: 'true',
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Дело сделано, ответ сервера:', response);
				refreshTodo();
			})
			.finally(() => setIsCompleted(false));
	};

	return {
		isCompleted,
		requestCompletedTodo,
	};
};
