import { RolModel } from "./rol.entity";

export interface UserModel {
    id_user?: Number | null;
    photo_user: String;
    name_user: String;
    lastname_user: String;
    dateofbirth_user: Date;
    gender_user: String;
    address_user: String;
    phone_user: Number;
    email_user: String;
    password_user: String;
    pass_verification_user: String;
    rol: number;
}

export interface CreateUserDto extends Omit<UserModel, 'id_user'>{
    id_rol?: number;
}

export interface UpdateUserDto extends Partial<UserModel>{
    id_rol?: number;
}