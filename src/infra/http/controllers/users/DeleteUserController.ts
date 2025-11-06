import type { Request, Response } from "express";
import type { Controller } from "../Controller.js";
import { UserRepository } from "../../../../contexts/users/infra/UserRepository.js";
import { DeleteUserUseCase } from "../../../../contexts/users/app/DeleteUserUseCase.js";
import { UserNotFound } from "../../../../contexts/users/domain/errors/UserNotFound.js";

export class DeleteUserController implements Controller {
    async handle(request: Request, response: Response): Promise<Response> {
        const {id} = request.body;

        try {
            const course = await new DeleteUserUseCase(new UserRepository()).execute(id);

            return response.status(201).json({ data: course });
        } catch (error) {
            console.log(error)
            if (error instanceof UserNotFound) {
                return response.status(404).json({ message: error.message });
            }
            return response.status(500).json({ message: "Internal server error" });
        }
    }
}