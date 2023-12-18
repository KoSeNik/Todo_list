import { useState } from 'react';

export const useRequestAddTodo = (refreshTodo) => {
	const [isCreating, setIsCreating] = useState(false);

	const requestAddTodo = () => {
		setIsCreating(true);
		fetch('http://localhost:3005/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify({
				title: 'Новое дело',
				completed: 'false',
			}),
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Добавлено новое дело, ответ сервера:', response);
				refreshTodo();
			})
			.finally(() => setIsCreating(false));
	};

	return {
		isCreating,
		requestAddTodo,
	};
};
