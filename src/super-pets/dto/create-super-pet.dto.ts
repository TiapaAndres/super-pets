import { IsInt, IsNotEmpty, IsPositive, MaxLength, MinLength } from "class-validator";

export class CreateSuperPetDto {
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(30)
    name: string;

    @IsNotEmpty()
    @IsInt()
    @IsPositive()
    number: number;
}
