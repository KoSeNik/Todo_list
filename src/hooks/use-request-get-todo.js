import { useEffect, useState } from 'react';

export const useRequestGetTodo = (refreshTodoFlag, debouncedSearchTodo, setSortTodo) => {
	const [todos, setTodos] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	const requestGetTodo = () => {
		fetch(`http://localhost:3005/todos?q=${debouncedSearchTodo}`)
			.then((loadedData) => loadedData.json())
			.then((loadedTodos) => {
				setTodos(loadedTodos);
			})
			.finally(() => {
				setIsLoading(false);
				setSortTodo(false);
			});
	};
	useEffect(() => {
		setIsLoading(true);
		requestGetTodo();
	}, [refreshTodoFlag, debouncedSearchTodo]);

	return {
		todos,
		isLoading,
		setTodos,
	};
};
