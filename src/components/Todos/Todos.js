import React, { useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";

const TodosWrapper = styled("div")`
	flex: 1 0 calc(25% - 8px);
	display: flex;
	flex-direction: column;
	border: 1.5px solid gray;
	border-radius: 6px;
	box-sizing: border-box;
	background-color: #cdeeea;
	padding: 8px;
	margin: 4px;

	> h6 {
		font-size: 16px;
		font-weight: 600;
		border-bottom: 1px solid gray;
		padding-bottom: 8px;
		margin-top: 0px;
		margin-bottom: 8px;
	}

	> button {
		width: 100%;
		margin-top: auto;
		background-color: #dcbeeb;
		border-radius: 3px;
	}
`;

const Todos = ({ title, completed }) => {
	const [done, setDone] = useState(completed);

	const handleClick = () => {
		setDone(!done);
	};

	return (
		<TodosWrapper>
			<h6>{title}</h6>
			{!done && (
				<Button variant="contained" onClick={handleClick}>
					Выполнено
				</Button>
			)}
		</TodosWrapper>
	);
};

export default Todos;
