import axios from 'axios';
import type { components } from '../types/api';
import type { VehiclesFilter } from '../types/vehicle';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
});

type Vehicle = components['schemas']['Vehicle'];
type CreateVehicleDto = components['schemas']['CreateVehicleDto'];
type UpdateVehicleDto = components['schemas']['UpdateVehicleDto'];

export const getVehicles = async (filter?: VehiclesFilter | null): Promise<Vehicle[]> => {
  const response = await api.get('/vehicles', { params: filter });
  return response.data;
};

export const getVehicle = async (id: string): Promise<Vehicle> => {
  const response = await api.get(`/vehicles/${id}`);
  return response.data;
};

export const createVehicle = async (data: CreateVehicleDto): Promise<Vehicle> => {
  const response = await api.post('/vehicles', data);
  return response.data;
};

export const updateVehicle = async (id: string, data: UpdateVehicleDto): Promise<Vehicle> => {
  const response = await api.patch(`/vehicles/${id}`, data);
  return response.data;
};

export const deleteVehicle = async (id: string): Promise<void> => {
  await api.delete(`/vehicles/${id}`);
};

export type { Vehicle, CreateVehicleDto, UpdateVehicleDto, VehiclesFilter };
