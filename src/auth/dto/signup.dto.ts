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
    @Min(4, {
        message: 'Password must be at least 4 characters long'
    })
    password: string;
}