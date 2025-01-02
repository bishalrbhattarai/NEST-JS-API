import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class SigninDTO {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
} 