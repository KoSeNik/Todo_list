import { useState } from 'react';

export const useRequestDeleteTodo = (refreshTodo) => {
	const [isDeleting, setIsDeleting] = useState(false);
	const requestDeleteTodo = (id) => {
		setIsDeleting(true);
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		})
			.then((rawResponse) => rawResponse.json())
			.then((response) => {
				console.log('Дело удалено, ответ сервера:', response);
				refreshTodo();
			})
			.finally(() => setIsDeleting(false));
	};

	return {
		isDeleting,
		requestDeleteTodo,
	};
};
