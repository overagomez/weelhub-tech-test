import { PrismaClient } from "@prisma/client";
import { User } from "../domain/User.js";
const prisma = new PrismaClient();
export class UserRepository {
    async persist(user) {
        await prisma.user.upsert({
            where: { id: user.getPrimitives().id },
            update: user.getPrimitives(),
            create: user.getPrimitives(),
        });
    }
    async findById(id) {
        const user = await prisma.user.findUnique({ where: { id } });
        return user ? User.fromPrimitives(user) : null;
    }
    async findByEmail(email) {
        const user = await prisma.user.findUnique({ where: { email } });
        return user ? User.fromPrimitives(user) : null;
    }
    async search(search, skip, take) {
        const users = await prisma.user.findMany(({
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
        }));
        return users.map((user) => User.fromPrimitives(user));
    }
    async count(search) {
        return await prisma.user.count(({
            where: {
                OR: [
                    { name: { contains: search, mode: 'insensitive' } },
                    { email: { contains: search, mode: 'insensitive' } },
                    { surname: { contains: search, mode: 'insensitive' } },
                    { phoneNumberSuffix: { contains: search, mode: 'insensitive' } },
                    { identityDocNumber: { contains: search, mode: 'insensitive' } },
                ],
            },
        }));
    }
}
