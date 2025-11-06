import type { Router } from "express";
import { UpdateUserController } from "../../controllers/users/UpdateUserController.js";

export function register(router: Router) {
	router.put(
		"/api/v1/admin/users/:id",
		new UpdateUserController().handle,
	);
}