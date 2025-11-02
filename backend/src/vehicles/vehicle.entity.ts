import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export enum VehicleStatus {
  AVAILABLE = 'available',
  IN_USE = 'in_use',
  MAINTENANCE = 'maintenance',
}

@Entity('vehicles')
export class Vehicle {
  @ApiProperty({
    description: 'Unique identifier',
    example: '550e8400-e29b-41d4-a716-446655440000'
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description: 'The brand of the vehicle',
    example: 'Toyota'
  })
  @Column()
  brand: string;

  @ApiProperty({
    description: 'The model of the vehicle',
    example: 'Camry'
  })
  @Column()
  model: string;

  @ApiProperty({
    description: 'The license plate number',
    example: 'ABC-123'
  })
  @Column()
  plateNumber: string;

  @ApiProperty({
    description: 'The year of manufacture',
    example: 2023
  })
  @Column()
  year: number;

  @ApiProperty({
    description: 'The current status of the vehicle',
    enum: VehicleStatus,
    example: VehicleStatus.AVAILABLE
  })
  @Column({
    type: 'enum',
    enum: VehicleStatus,
    default: VehicleStatus.AVAILABLE
  })
  status: VehicleStatus;

  @ApiProperty({
    description: 'The date when the vehicle was created',
    example: '2024-01-15T10:30:00Z'
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    description: 'The date when the vehicle was last updated',
    example: '2024-01-15T10:30:00Z'
  })
  @UpdateDateColumn()
  updatedAt: Date;
}
