import axios from 'axios';
import { Vehicle, VehicleFormData, VehiclesFilter } from '../types/vehicle';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

const api = axios.create({
  baseURL: API_URL,
});

export const getVehicles = async (filter?: VehiclesFilter | null): Promise<Vehicle[]> => {
  const response = await api.get('/vehicles', {params: filter});
  return response.data;
};

export const getVehicle = async (id: string): Promise<Vehicle> => {
  const response = await api.get(`/vehicles/${id}`);
  return response.data;
};

export const createVehicle = async (data: VehicleFormData): Promise<Vehicle> => {
  const response = await api.post('/vehicles', data);
  return response.data;
};

export const updateVehicle = async (id: string, data: VehicleFormData): Promise<Vehicle> => {
  const response = await api.patch(`/vehicles/${id}`, data);
  return response.data;
};

export const deleteVehicle = async (id: string): Promise<void> => {
  await api.delete(`/vehicles/${id}`);
};
