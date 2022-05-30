import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import PostDetailPage from "../pages/PostDetail";
import PostsPage from "../pages/Posts";
import TodosPage from "../pages/Todos";
import UsersPage from "../pages/Users";
import UsersDetailPage from "../pages/UsersDetail";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="posts">
				<Route index element={<PostsPage />} />
				<Route path=":id" element={<PostDetailPage />} />
			</Route>
			<Route path="todos" element={<TodosPage />}></Route>
			<Route path="users">
				<Route index element={<UsersPage />} />
				<Route path=":id" element={<UsersDetailPage />} />
			</Route>
			<Route path="*" element={<Navigate to="/posts" />}></Route>
		</Routes>
	);
};

export default AppRouter;
