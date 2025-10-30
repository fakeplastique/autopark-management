import { IsString, IsNumber, IsOptional, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { VehicleStatus } from '../vehicle.entity';

export class FilterVehiclesDto {
  @IsOptional()
  @IsString()
  brand: string;

  @IsOptional()
  @IsString()
  model: string;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  year: number;

  @IsOptional()
  @IsEnum(VehicleStatus)
  status: VehicleStatus;
}
