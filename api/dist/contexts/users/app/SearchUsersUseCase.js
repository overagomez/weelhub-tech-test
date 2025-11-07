export class SearchUsersUseCase {
    userRepository;
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(search, page, limit) {
        const skip = (page - 1) * limit;
        const [users, total] = await Promise.all([
            this.userRepository.search(search, skip, limit),
            this.userRepository.count(search),
        ]);
        return {
            data: users.map((u) => u.getPrimitives()),
            pagination: {
                page,
                limit,
                total,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
}
