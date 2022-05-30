import React, { useCallback } from "react";

import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

import { getPost, getComments } from "../../api/posts";
import { getUser } from "../../api/users";
import { useRequest } from "../../hooks/useRequest";

const PostDetailWrapper = styled("section")`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	width: 100%;
	max-width: 800px;
	margin: 8px auto;
	padding: 4px;
	box-sizing: border-box;
`;

const CommentsWrapper = styled("ol")`
	margin: 0px 0px 0px 16px;
	padding: 0px;

	> li {
		border-bottom: 1px solid gray;
		padding: 4px;

		> h5 {
			margin: 0px 0px 8px;
		}

		> span {
			font-size: 12px;
		}

		> p {
			margin: 4px 0px 0px;
		}
	}
`;

const PostDetail = () => {
	const { id } = useParams();

	const postDetailParams = useCallback(() => getPost(id), [id]);
	const commentsDetailParams = useCallback(() => getComments(id), [id]);
	const { data: post, error, loading } = useRequest(postDetailParams);

	const getUserNameId = useCallback(
		() => getUser(post?.userId),
		[post?.userId]
	);

	const { data: user } = useRequest(getUserNameId);

	const {
		data: comments,
		error: errorComments,
		loading: loadingComments,
	} = useRequest(commentsDetailParams);

	return (
		<PostDetailWrapper>
			<Link to="posts">Back</Link>
			{loading && "loading..."}
			{error && "some error..."}
			{!loading && !error && post && user && (
				<>
					<Link to={`/users/${user.id}`}>
						<p>{user.name}</p>
					</Link>
					<h1>{post.title}</h1>
					<p>{post.body}</p>
				</>
			)}

			<CommentsWrapper>
				{!loadingComments &&
					!errorComments &&
					comments?.map((comment) => (
						<li key={comment.id}>
							<h5>{comment.name}</h5>
							<span>{comment.email}</span>
							<p>{comment.body}</p>
						</li>
					))}
			</CommentsWrapper>
		</PostDetailWrapper>
	);
};

export default PostDetail;
