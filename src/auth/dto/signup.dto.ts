import { IsEmail, IsString, Min } from "class-validator";

export class SignUpDto {
    @IsString()
    name: string;
    @IsString()
    @IsEmail()
    email: string;
    @IsString({
        message: 'Password must be a string'
    })
    password: string;
}