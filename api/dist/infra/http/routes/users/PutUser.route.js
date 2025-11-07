import { UpdateUserController } from "../../controllers/users/UpdateUserController.js";
export function register(router) {
    router.put("/api/v1/admin/users/:id", new UpdateUserController().handle);
}
