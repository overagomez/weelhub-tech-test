import { SearchUsersController } from "../../controllers/users/SearchUsersController.js";
export function register(router) {
    router.get("/api/v1/admin/users", new SearchUsersController().handle);
}
