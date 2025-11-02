import type { components } from './api';

export type Vehicle = components['schemas']['Vehicle'];
export type VehicleStatus = Vehicle['status'];

export interface VehicleFormData {
  brand: string;
  model: string;
  plateNumber: string;
  year: number;
  status?: VehicleStatus;
}

export interface VehiclesFilter {
  brand?: string;
  model?: string;
  year?: number;
  status?: VehicleStatus;
}
