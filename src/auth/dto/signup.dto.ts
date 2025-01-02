import { IsEmail, IsNotEmpty, IsString, Min } from "class-validator";

export class SignUpDto {
    @IsString()
    @IsNotEmpty()
    name: string;
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;
    @IsString({
        message: 'Password must be a string'
    })
    password: string;
}