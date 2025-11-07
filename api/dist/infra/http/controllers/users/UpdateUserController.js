import { UserRepository } from "../../../../contexts/users/infra/UserRepository.js";
import { UserAlreadyExists } from "../../../../contexts/users/domain/errors/UserAlreadyExists.js";
import { UpdateUserUseCase } from "../../../../contexts/users/app/UpdateUserUseCase.js";
import { UserNotFound } from "../../../../contexts/users/domain/errors/UserNotFound.js";
export class UpdateUserController {
    async handle(request, response) {
        const id = request.params.id;
        const { name, surname, email, phoneNumberPrefix, phoneNumberSuffix, identityDocumentNumber, identityDocumentType, } = request.body;
        try {
            const course = await new UpdateUserUseCase(new UserRepository()).execute(id, name, surname, email, phoneNumberPrefix, phoneNumberSuffix, identityDocumentNumber, identityDocumentType);
            return response.status(201).json({ data: course });
        }
        catch (error) {
            console.log(error);
            if (error instanceof UserAlreadyExists) {
                return response.status(400).json({ message: error.message });
            }
            if (error instanceof UserNotFound) {
                return response.status(40).json({ message: error.message });
            }
            return response.status(500).json({ message: "Internal server error" });
        }
    }
}
