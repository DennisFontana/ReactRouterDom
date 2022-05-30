import React from "react";

import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";

const Navigation = styled("nav")`
	width: 100%;
	padding: 16px 8px;
	box-sizing: border-box;
	margin-bottom: 16px;
	background-color: white;
	box-shadow: 0 0 4px 0 #333;

	> ul {
		display: flex;
		flex-direction: row;
		margin: 0px 0px 0px 8px;
		padding: 0px;
	}
`;

const NavItem = styled("li")`
	list-style: none;
	padding: 0;
	margin: 0px 8px 0px 0px;

	> a {
		text-decoration: ${(props) => (props.active ? "underline" : "none")};
		color: ${(props) => (props.active ? "white" : "#333")};
	}
`;

const Header = () => {
	const { pathname } = useLocation();

	return (
		<Navigation>
			<ul>
				<NavItem active={pathname === "/posts"}>
					<Link to="posts">
						<Button variant="contained">Posts</Button>
					</Link>
				</NavItem>
				<NavItem active={pathname === "/todos"}>
					<Link to="todos">
						<Button variant="contained">Todos</Button>
					</Link>
				</NavItem>
				<NavItem active={pathname === "/users"}>
					<Link to="users">
						<Button variant="contained">Users</Button>
					</Link>
				</NavItem>
			</ul>
		</Navigation>
	);
};

export default Header;
