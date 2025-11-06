import type { User } from "./User.js";

export interface UserRepositoryDefinition {
	persist(user: User): Promise<void>;
	findById(id: string): Promise<User | null>;
	findByEmail(email: string): Promise<User | null>
	search(search: string, skip: number, take: number): Promise<User[]>;
	count(search: string): Promise<number>;
}