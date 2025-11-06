import { UserAlreadyExists } from "../domain/errors/UserAlreadyExists.js";
import { UserNotFound } from "../domain/errors/UserNotFound.js";
import type { UserRepositoryDefinition } from "../domain/UserRepositoryDefinition.js";
import { Email } from "../domain/vo/Email.js";
import { Id } from "../domain/vo/Id.js";
import { IdentityDocNumber } from "../domain/vo/IdentityDocNumber.js";
import { IdentityDocType, IdentityDocTypes } from "../domain/vo/IdentityDocType.js";
import { IdentityDocument } from "../domain/vo/IdentityDocument.js";
import { Name } from "../domain/vo/Name.js";
import { PhoneNumber } from "../domain/vo/PhoneNumber.js";
import { PhoneNumberPrefix, PhoneNumberPrefixes } from "../domain/vo/PhoneNumberPrefix.js";
import { PhoneNumberSuffix } from "../domain/vo/PhoneNumberSuffix.js";
import { Surname } from "../domain/vo/Surname.js";

export class UpdateUserUseCase {
    constructor(private readonly userRepository: UserRepositoryDefinition) {}

    async execute(
            id: string,                
            name: string,              
            surname: string,    
            email: string,
            phoneNumberPrefix: string,
            phoneNumberSuffix: string,
            identityDocumentNumber: string,
            identityDocumentType: string,
        ): Promise<void> {
        const parsedEmail = new Email(email);
        const parsedId = new Id(id);
        
        const existingUser = await this.userRepository.findById(parsedId.valueOf());

        if (!existingUser) throw new UserNotFound(`User with id ${parsedId.valueOf()} not found`)

        if (!existingUser.id.equals(parsedId) && await this.userRepository.findByEmail(parsedEmail.valueOf())) {
            throw new UserAlreadyExists(`User with email ${parsedEmail.valueOf()} already exists`);
        }

        const user = existingUser.update(               
            new Name(name),        
            new Surname(surname),
            parsedEmail,   
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