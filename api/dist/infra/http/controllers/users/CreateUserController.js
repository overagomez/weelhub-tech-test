import { CreateUserUseCase } from "../../../../contexts/users/app/CreateUserUseCase.js";
import { UserRepository } from "../../../../contexts/users/infra/UserRepository.js";
import { UserAlreadyExists } from "../../../../contexts/users/domain/errors/UserAlreadyExists.js";
export class CreateUserController {
    async handle(request, response) {
        const { id, name, surname, email, phoneNumberPrefix, phoneNumberSuffix, identityDocumentNumber, identityDocumentType, } = request.body;
        try {
            const course = await new CreateUserUseCase(new UserRepository()).execute(id, name, surname, email, phoneNumberPrefix, phoneNumberSuffix, identityDocumentNumber, identityDocumentType);
            return response.status(201).json({ data: course });
        }
        catch (error) {
            console.log(error);
            if (error instanceof UserAlreadyExists) {
                return response.status(400).json({ message: error.message });
            }
            return response.status(500).json({ message: "Internal server error" });
        }
    }
}
