import { IsString, IsNumber, IsOptional, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { VehicleStatus } from '../vehicle.entity';

export class FilterVehiclesDto {
  @ApiProperty({
    description: 'Filter by vehicle brand',
    example: 'Toyota',
    required: false
  })
  @IsOptional()
  @IsString()
  brand: string;

  @ApiProperty({
    description: 'Filter by vehicle model',
    example: 'Camry',
    required: false
  })
  @IsOptional()
  @IsString()
  model: string;

  @ApiProperty({
    description: 'Filter by year of manufacture',
    example: 2023,
    required: false
  })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  year: number;

  @ApiProperty({
    description: 'Filter by vehicle status',
    enum: VehicleStatus,
    example: VehicleStatus.AVAILABLE,
    required: false
  })
  @IsOptional()
  @IsEnum(VehicleStatus)
  status: VehicleStatus;
}
