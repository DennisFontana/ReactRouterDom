import React, { useCallback } from "react";
import styled from "styled-components";
import { getUsers } from "../../api/users";
import Users from "../../components/Users";
import { useRequest } from "../../hooks/useRequest";

const UserWrap = styled("section")`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	max-width: 800px;
	margin: 8px auto;
	padding: 4px;
	box-sizing: border-box;
`;

const User = () => {
	const userParams = useCallback(() => getUsers(), []);

	const { data: users, error, loading } = useRequest(userParams);

	return (
		<UserWrap>
			{loading && "loading..."}
			{error && "some error..."}
			{!loading &&
				!error &&
				users?.map((user) => <Users key={user.id} {...user} />)}
		</UserWrap>
	);
};

export default User;
