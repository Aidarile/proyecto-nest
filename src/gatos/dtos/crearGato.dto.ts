import { IsNotEmpty, IsNumber, IsOptional, IsString, Min, } from "class-validator";

export class crearGatoDto {
    
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsNumber()
    @IsOptional()
    @Min(0)
    edad: number;

    @IsString()
    color: string;
}