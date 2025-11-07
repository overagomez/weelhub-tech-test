import { UserAlreadyExists } from "../domain/errors/UserAlreadyExists.js";
import { User } from "../domain/User.js";
import type { UserRepositoryDefinition } from "../domain/UserRepositoryDefinition.js";
import { Email } from "../domain/vo/Email.js";
import { IdentityDocNumber } from "../domain/vo/IdentityDocNumber.js";
import { IdentityDocType, IdentityDocTypes } from "../domain/vo/IdentityDocType.js";
import { IdentityDocument } from "../domain/vo/IdentityDocument.js";
import { Name } from "../domain/vo/Name.js";
import { PhoneNumber } from "../domain/vo/PhoneNumber.js";
import { PhoneNumberPrefix, PhoneNumberPrefixes } from "../domain/vo/PhoneNumberPrefix.js";
import { PhoneNumberSuffix } from "../domain/vo/PhoneNumberSuffix.js";
import { Surname } from "../domain/vo/Surname.js";

export class CreateUserUseCase {
	constructor(private readonly userRepository: UserRepositoryDefinition) {}

	async execute(            
			name: string,              
			surname: string,    
			email: string,
			phoneNumberPrefix: string,
			phoneNumberSuffix: string,
			identityDocumentNumber: string,
			identityDocumentType: string,
		): Promise<void> {
		const parsedEmail = new Email(email);

		if (await this.userRepository.findByEmail(parsedEmail.valueOf())) {
			throw new UserAlreadyExists("User already exists");
		}

		const user = User.create(               
			new Name(name),              
			new Surname(surname),    
			new Email(email),       
			new PhoneNumber(
				new PhoneNumberPrefix(phoneNumberPrefix as PhoneNumberPrefixes),       
				new PhoneNumberSuffix(phoneNumberSuffix),
			),
			new IdentityDocument(
				new IdentityDocNumber(identityDocumentNumber),
				new IdentityDocType(identityDocumentType as IdentityDocTypes),
			),
		);
		
		await this.userRepository.persist(user);
	}
}