import { IsString, IsNumber, IsOptional, Min, Max, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { VehicleStatus } from '../vehicle.entity';

export class UpdateVehicleDto {
  @ApiProperty({
    description: 'The brand of the vehicle',
    example: 'Toyota',
    required: false
  })
  @IsString()
  @IsOptional()
  brand?: string;

  @ApiProperty({
    description: 'The model of the vehicle',
    example: 'Camry',
    required: false
  })
  @IsString()
  @IsOptional()
  model?: string;

  @ApiProperty({
    description: 'The license plate number',
    example: 'ABC-123',
    required: false
  })
  @IsString()
  @IsOptional()
  plateNumber?: string;

  @ApiProperty({
    description: 'The year of manufacture',
    example: 2023,
    minimum: 1900,
    maximum: new Date().getFullYear() + 1,
    required: false
  })
  @IsNumber()
  @IsOptional()
  @Min(1900)
  @Max(new Date().getFullYear() + 1)
  year?: number;

  @ApiProperty({
    description: 'The current status of the vehicle',
    enum: VehicleStatus,
    example: VehicleStatus.AVAILABLE,
    required: false
  })
  @IsEnum(VehicleStatus)
  @IsOptional()
  status?: VehicleStatus;
}
