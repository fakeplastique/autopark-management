import { IsString, IsNumber, IsOptional, Min, Max, IsEnum } from 'class-validator';
import { VehicleStatus } from '../vehicle.entity';

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

  @IsEnum(VehicleStatus)
  @IsOptional()
  status?: VehicleStatus;
}
