import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { getUser } from "../../api/users";
import { useRequest } from "../../hooks/useRequest";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const UserDetailWrapper = styled("div")`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	width: 100%;
	max-width: 800px;
	margin: 8px auto;
	padding: 4px;
	box-sizing: border-box;
`;
const StyledLink = styled("div")`
	font-size: 20px;
	flex: 50px;
`;

const UsersDetail = () => {
	const params = useParams();
	const userDetailParams = useCallback(() => getUser(params.id), [params.id]);
	const { data: user, error, loading } = useRequest(userDetailParams);

	useEffect(() => {
		if (params.id) {
			getUser(params.id);
		}
	}, [params.id]);

	return (
		<UserDetailWrapper>
			<StyledLink>
				<Link to="/users">Back</Link>
			</StyledLink>
			{loading && "loading..."}
			{error && "some error..."}
			{!loading && !error && user && (
				<>
					<Card sx={{ minWidth: 275 }}>
						<CardContent>
							<Typography variant="h5" component="div">
								{user.name}
							</Typography>
							<Typography sx={{ mb: 2 }} color="text.secondary">
								{user.phone}
							</Typography>
							<Typography
								variant="body2"
								sx={{ fontSize: 16 }}
								color="text.secondary"
								gutterBottom
							>
								E-MAIL: {user.email}
							</Typography>

							<Typography
								sx={{ fontSize: 16 }}
								color="text.secondary"
								gutterBottom
							>
								COMPANY: {user.company.name}
							</Typography>
							<Typography
								sx={{ fontSize: 16 }}
								color="text.secondary"
								gutterBottom
							>
								CITY: {user.address.city}
							</Typography>

							<Typography
								sx={{ fontSize: 16 }}
								color="text.secondary"
								gutterBottom
							>
								CATCHPHRASE: {user.company.catchPhrase}
							</Typography>
							<Typography variant="body2">
								STREET: {user.address.street}
							</Typography>
						</CardContent>
					</Card>
				</>
			)}
		</UserDetailWrapper>
	);
};

export default UsersDetail;
