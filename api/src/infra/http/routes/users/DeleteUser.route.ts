import type { Router } from "express";
import { DeleteUserController } from "../../controllers/users/DeleteUserController.js";

export function register(router: Router) {
	router.delete(
		"/api/v1/admin/users/:id",
		new DeleteUserController().handle,
	);
}