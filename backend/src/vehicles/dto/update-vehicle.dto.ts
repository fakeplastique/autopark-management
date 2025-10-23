import { IsString, IsNumber, IsOptional, Min, Max } from 'class-validator';

export class UpdateVehicleDto {
  @IsString()
  @IsOptional()
  brand?: string;

  @IsString()
  @IsOptional()
  model?: string;

  @IsString()
  @IsOptional()
  plateNumber?: string;

  @IsNumber()
  @IsOptional()
  @Min(1900)
  @Max(new Date().getFullYear() + 1)
  year?: number;

  @IsString()
  @IsOptional()
  status?: string;
}
