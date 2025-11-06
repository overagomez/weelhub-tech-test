import { PrismaClient } from "@prisma/client";
import type { UserRepositoryDefinition } from "../domain/UserRepositoryDefinition.js";
import { User } from "../domain/User.js";

const prisma = new PrismaClient()

export class UserRepository
	implements UserRepositoryDefinition
{
	async persist(user: User): Promise<void> {
		await prisma.user.upsert({
			where: { id: user.getPrimitives().id },
			update: user.getPrimitives(),
			create: user.getPrimitives(),
		});
	}

	async findById(id: string): Promise<User | null> {
		const user = await prisma.user.findUnique({ where: { id } });
		return user ? User.fromPrimitives(user) : null;
	}

    async findByEmail(email: string): Promise<User | null> {
		const user = await prisma.user.findUnique({ where: { email } });
		return user ? User.fromPrimitives(user) : null;
	}

	async search(search: string, skip: number, take: number): Promise<User[]> {
		const users = await prisma.user.findMany(
            ({
                where: {
                    OR: [
                        { name: { contains: search, mode: 'insensitive' } },
                        { email: { contains: search, mode: 'insensitive' } },
                        { surname: { contains: search, mode: 'insensitive' } },
                        { phoneNumberSuffix: { contains: search, mode: 'insensitive' } },
                        { identityDocNumber: { contains: search, mode: 'insensitive' } },
                    ],
                },
                skip: skip,
                take: take,
            })
        );

		return (users as any[]).map(
			(user) => User.fromPrimitives(user),
		);
	}

    async count(search: string): Promise<number> {
        return await prisma.user.count(
            ({
                where: {
                    OR: [
                        { name: { contains: search, mode: 'insensitive' } },
                        { email: { contains: search, mode: 'insensitive' } },
                        { surname: { contains: search, mode: 'insensitive' } },
                        { phoneNumberSuffix: { contains: search, mode: 'insensitive' } },
                        { identityDocNumber: { contains: search, mode: 'insensitive' } },
                    ],
                },
            })
        )}
}