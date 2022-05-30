import React from "react";

import PropTypes from "prop-types";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const PostWrapper = styled("div")`
	flex: 1 0 calc(25% - 8px);
	display: flex;
	flex-direction: column;
	border: 1.5px solid gray;
	border-radius: 6px;
	box-sizing: border-box;
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

	> p {
		margin-top: auto;
		font-size: 14px;
		font-weight: 300;
	}
`;

const Post = ({ id, title, body }) => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/posts/${id}`);
	};

	return (
		<PostWrapper>
			<h6>{title}</h6>
			<p>{body.slice(0, 12)}...</p>
			<Button variant="contained" onClick={handleClick}>
				Детали
			</Button>
		</PostWrapper>
	);
};

export default Post;

Post.propTypes = {
	id: PropTypes.number.isRequired,
	userId: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
};
