import type { UserRepositoryDefinition } from "../domain/UserRepositoryDefinition.js";

export class SearchUsersUseCase {
  constructor(private readonly userRepository: UserRepositoryDefinition) {}

  async execute(search: string, page: number, limit: number) {
    const skip = (page - 1) * limit

    const [users, total] = await Promise.all([
      this.userRepository.search(search,  skip, limit ),
      this.userRepository.count(search),
    ])

    return {
      data: users.map((u) => u.getPrimitives()),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    }
  }
}