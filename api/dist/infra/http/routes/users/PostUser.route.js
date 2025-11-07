import { CreateUserController } from "../../controllers/users/CreateUserController.js";
export function register(router) {
    router.post("/api/v1/admin/users", new CreateUserController().handle);
}
