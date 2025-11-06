import type { Request, Response } from "express";
import type { Controller } from "../Controller.js";
import { SearchUsersUseCase } from "../../../../contexts/users/app/SearchUsersUseCase.js";
import { UserRepository } from "../../../../contexts/users/infra/UserRepository.js";

export class SearchUsersController implements Controller {
	async handle(request: Request, response: Response): Promise<Response> {

	    const paginatedUsers = await new SearchUsersUseCase(new UserRepository()).execute(
	        request.query.search as string,
            parseInt(request.query.skip as string),
            parseInt(request.query.take as string),	
        );

	    return response.status(200).json({ data: paginatedUsers });
    }
}