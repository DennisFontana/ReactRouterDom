import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const UsersWrapper = styled("div")`
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

const Users = ({ name, username, email, phone, id }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/users/${id}`);
	};

	return (
		<UsersWrapper>
			<h4>{name}</h4>
			<p>{username}</p>
			<p>{email}</p>
			<p>{phone}</p>
			<Button variant="contained" onClick={handleClick}>
				Детали
			</Button>
		</UsersWrapper>
	);
};

export default Users;
