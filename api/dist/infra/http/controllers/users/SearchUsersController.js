import { SearchUsersUseCase } from "../../../../contexts/users/app/SearchUsersUseCase.js";
import { UserRepository } from "../../../../contexts/users/infra/UserRepository.js";
export class SearchUsersController {
    async handle(request, response) {
        const paginatedUsers = await new SearchUsersUseCase(new UserRepository()).execute(request.query.search, parseInt(request.query.skip), parseInt(request.query.take));
        return response.status(200).json({ data: paginatedUsers });
    }
}
