export interface Vehicle {
  id: string;
  brand: string;
  model: string;
  plateNumber: string;
  year: number;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface VehicleFormData {
  brand: string;
  model: string;
  plateNumber: string;
  year: number;
  status?: string;
}

export interface VehiclesFilter {
  brand?: string;
  model?: string;
  year?: number;
}
