import { CreatedAt } from "./vo/CreatedAt.js";
import { DeletedAt } from "./vo/DeletedAt.js";
import { Email } from "./vo/Email.js";
import { Id } from "./vo/Id.js";
import { IdentityDocNumber } from "./vo/IdentityDocNumber.js";
import { IdentityDocType, IdentityDocTypes } from "./vo/IdentityDocType.js";
import { IdentityDocument } from "./vo/IdentityDocument.js";
import { Name } from "./vo/Name.js";
import { PhoneNumber } from "./vo/PhoneNumber.js";
import { PhoneNumberPrefix, PhoneNumberPrefixes } from "./vo/PhoneNumberPrefix.js";
import { PhoneNumberSuffix } from "./vo/PhoneNumberSuffix.js";
import { Surname } from "./vo/Surname.js";
import { UpdatedAt } from "./vo/UpdatedAt.js";

export class User {
    constructor (
        readonly id: Id,                
        readonly name: Name,              
        readonly surname: Surname,   
        readonly email: Email,        
        readonly phoneNumber: PhoneNumber,       
        readonly identityDocument: IdentityDocument,      
        readonly createdAt: CreatedAt,         
        readonly updatedAt: UpdatedAt,         
        readonly deletedAt: DeletedAt | null, 
    ) {}

    public static create(
        id: Id,                
        name: Name,              
        surname: Surname,    
        email: Email,       
        phoneNumber: PhoneNumber,       
        identityDocument: IdentityDocument, 
    ) {
        return new User(
            id,
            name,
            surname,
            email,
            phoneNumber,
            identityDocument,
            new CreatedAt(new Date()),
            new UpdatedAt(new Date()),
            null,
        )
    }

    public update(          
        name: Name,              
        surname: Surname,
        email: Email,           
        phoneNumber: PhoneNumber,       
        identityDocument: IdentityDocument, 
    ) {
        return new User(
            this.id,
            name,
            surname,
            email,
            phoneNumber,
            identityDocument,
            this.createdAt,
            new UpdatedAt(new Date()),
            null,
        )
    }

    public delete() {
        return new User(
            this.id,
            this.name,
            this.surname,
            this.email,
            this.phoneNumber,
            this.identityDocument,
            this.createdAt,
            this.updatedAt,
            new DeletedAt(new Date()),
        )
    }

    public static fromPrimitives(user: {
        id: string,                
        name: string,              
        surname: string,   
        email: string,        
        phoneNumberPrefix: string,       
        phoneNumberSuffix: string,       
        identityDocumentNumber: string,      
        identityDocumentType: string,      
        createdAt: Date,         
        updatedAt: Date,         
        deletedAt: Date | null, 
    }
    ) {
        return new User(
            new Id(user.id),
            new Name(user.name),
            new Surname(user.surname),
            new Email(user.email),
            new PhoneNumber(
                new PhoneNumberPrefix(user.phoneNumberPrefix as PhoneNumberPrefixes),
                new PhoneNumberSuffix(user.phoneNumberSuffix),
            ),
            new IdentityDocument(
                new IdentityDocNumber(user.identityDocumentNumber),
                new IdentityDocType(user.identityDocumentType as IdentityDocTypes)
            ),
            new CreatedAt(user.createdAt),
            new UpdatedAt(user.updatedAt),
            user.deletedAt ? new DeletedAt(user.deletedAt) : null,
        )
    }

    public getPrimitives() {
        return {
            id: this.id.valueOf(),
            name: this.name.valueOf(),
            surname: this.surname.valueOf(),
            email: this.email.valueOf(),
            phoneNumberPrefix: this.phoneNumber.phoneNumberPrefix.valueOf(),
            phoneNumberSuffix: this.phoneNumber.phoneNumberSuffix.valueOf(),
            identityDocumentNumber: this.identityDocument.identityDocNumber.valueOf(),
            identityDocumentType: this.identityDocument.identityDocType.valueOf(),
            createdAt: this.createdAt.valueOf(),
            updatedAt: this.updatedAt.valueOf(),
            deletedAt: this.deletedAt?.valueOf() ?? null,
        }
    }
}