import { UserNotFound } from "../domain/errors/UserNotFound.js";
import type { UserRepositoryDefinition } from "../domain/UserRepositoryDefinition.js";
import { Id } from "../domain/vo/Id.js";


export class DeleteUserUseCase {
    constructor(private readonly userRepository: UserRepositoryDefinition) {}

    async execute(id: string): Promise<void> {
        const parsedId = new Id(id);

        const existingUser = await this.userRepository.findById(parsedId.valueOf());
        if (!existingUser) throw new UserNotFound(`User with id ${parsedId.valueOf()} not found`)

        const deletedUser = existingUser.delete();
        
        await this.userRepository.persist(deletedUser);
    }
}