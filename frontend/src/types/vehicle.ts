export enum VehicleStatus {
  AVAILABLE = 'available',
  IN_USE = 'in_use',
  MAINTENANCE = 'maintenance',
}

export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  plateNumber: string;
  year: number;
  status: VehicleStatus;
  createdAt: string;
  updatedAt: string;
}

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
