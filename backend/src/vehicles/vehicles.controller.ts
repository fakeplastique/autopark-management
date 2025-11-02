import { Controller, Get, Post, Body, Patch, Param, Query, Delete } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam } from '@nestjs/swagger';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { FilterVehiclesDto } from './dto/filter-vehicles.dto';
import { Vehicle } from './vehicle.entity';

@ApiTags('vehicles')
@Controller('vehicles')
export class VehiclesController {
  constructor(private readonly vehiclesService: VehiclesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new vehicle' })
  @ApiResponse({ status: 201, description: 'Vehicle successfully created', type: Vehicle })
  @ApiResponse({ status: 400, description: 'Bad request' })
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehiclesService.create(createVehicleDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all vehicles with optional filters' })
  @ApiResponse({ status: 200, description: 'Return all vehicles matching the filters', type: [Vehicle] })
  @ApiResponse({ status: 400, description: 'Invalid filter parameters' })
  findAll(@Query() filters: FilterVehiclesDto) {
    return this.vehiclesService.findAll(filters);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a vehicle by ID' })
  @ApiParam({ name: 'id', description: 'Vehicle UUID' })
  @ApiResponse({ status: 200, description: 'Return the vehicle', type: Vehicle })
  @ApiResponse({ status: 400, description: 'Invalid UUID format' })
  @ApiResponse({ status: 404, description: 'Vehicle not found' })
  findOne(@Param('id') id: string) {
    return this.vehiclesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a vehicle' })
  @ApiParam({ name: 'id', description: 'Vehicle UUID' })
  @ApiResponse({ status: 200, description: 'Vehicle successfully updated', type: Vehicle })
  @ApiResponse({ status: 400, description: 'Invalid input data' })
  @ApiResponse({ status: 404, description: 'Vehicle not found' })
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehiclesService.update(id, updateVehicleDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a vehicle' })
  @ApiParam({ name: 'id', description: 'Vehicle UUID' })
  @ApiResponse({ status: 200, description: 'Vehicle successfully deleted' })
  @ApiResponse({ status: 404, description: 'Vehicle not found' })
  remove(@Param('id') id: string) {
    return this.vehiclesService.remove(id);
  }
}
