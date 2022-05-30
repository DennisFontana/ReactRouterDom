import React, { useCallback } from "react";
import styled from "styled-components";
import { getTodos } from "../../api/todos.js";
import Todos from "../../components/Todos";
import { useRequest } from "../../hooks/useRequest";

const TodosWrapp = styled("section")`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	max-width: 800px;
	margin: 8px auto;
	padding: 4px;
	box-sizing: border-box;
`;

const Todo = () => {
	const todoParams = useCallback(() => getTodos(), []);

	const {
		data: todos,
		error,
		loading,
	} = useRequest(todoParams);

	return (
		<TodosWrapp>
			{loading && "loading..."}
			{error && "some error..."}
			{!loading &&
				!error &&
				todos?.map((todos) => <Todos key={todos.id} {...todos} />)}
		</TodosWrapp>
	);
};

export default Todo;
