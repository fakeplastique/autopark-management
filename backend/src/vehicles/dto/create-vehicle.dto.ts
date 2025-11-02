import { IsString, IsNumber, IsNotEmpty, Min, Max, IsEnum, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { VehicleStatus } from '../vehicle.entity';

export class CreateVehicleDto {
  @ApiProperty({
    description: 'The brand of the vehicle',
    example: 'Toyota'
  })
  @IsString()
  @IsNotEmpty()
  brand: string;

  @ApiProperty({
    description: 'The model of the vehicle',
    example: 'Camry'
  })
  @IsString()
  @IsNotEmpty()
  model: string;

  @ApiProperty({
    description: 'The license plate number',
    example: 'ABC-123'
  })
  @IsString()
  @IsNotEmpty()
  plateNumber: string;

  @ApiProperty({
    description: 'The year of manufacture',
    example: 2023,
    minimum: 1900,
    maximum: new Date().getFullYear() + 1
  })
  @IsNumber()
  @Min(1900)
  @Max(new Date().getFullYear() + 1)
  year: number;

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
