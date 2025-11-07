import { UserNotFound } from "../domain/errors/UserNotFound.js";
import { Id } from "../domain/vo/Id.js";
export class DeleteUserUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id) {
        const parsedId = new Id(id);
        const existingUser = await this.userRepository.findById(parsedId.valueOf());
        if (!existingUser)
            throw new UserNotFound(`User with id ${parsedId.valueOf()} not found`);
        const deletedUser = existingUser.delete();
        await this.userRepository.persist(deletedUser);
    }
}
