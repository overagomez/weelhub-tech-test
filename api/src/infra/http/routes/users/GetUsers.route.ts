import type { Router } from "express";
import { SearchUsersController } from "../../controllers/users/SearchUsersController.js";

export function register(router: Router) {
	router.get(
		"/api/v1/admin/users",
		new SearchUsersController().handle,
	);
}