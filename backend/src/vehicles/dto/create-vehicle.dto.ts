import { IsString, IsNumber, IsNotEmpty, Min, Max } from 'class-validator';

export class CreateVehicleDto {
  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  model: string;

  @IsString()
  @IsNotEmpty()
  plateNumber: string;

  @IsNumber()
  @Min(1900)
  @Max(new Date().getFullYear() + 1)
  year: number;
}
