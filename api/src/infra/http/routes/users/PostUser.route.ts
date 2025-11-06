import type { Router } from "express";
import { CreateUserController } from "../../controllers/users/CreateUserController.js";

export function register(router: Router) {
    router.post(
        "/api/v1/admin/users",
        new CreateUserController().handle,
    );
}