import { IsOptional, IsString, IsInt } from "class-validator";

export class createAddressDto {
    @IsString()
    @IsOptional()
    complement: string;

    @IsInt()
    numberAddress: number;


    @IsString()
    cep: string;


    @IsInt()
    cityId: number;
}