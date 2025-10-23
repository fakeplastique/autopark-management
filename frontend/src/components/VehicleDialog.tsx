import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
} from '@mui/material';
import { Vehicle, VehicleFormData } from '../types/vehicle';

interface VehicleDialogProps {
  open: boolean;
  vehicle: Vehicle | null;
  onClose: () => void;
  onSave: (data: VehicleFormData) => void;
}

export default function VehicleDialog({ open, vehicle, onClose, onSave }: VehicleDialogProps) {
  const [formData, setFormData] = useState<VehicleFormData>({
    brand: '',
    model: '',
    plateNumber: '',
    year: new Date().getFullYear(),
    status: 'available',
  });

  useEffect(() => {
    if (vehicle) {
      setFormData({
        brand: vehicle.brand,
        model: vehicle.model,
        plateNumber: vehicle.plateNumber,
        year: vehicle.year,
        status: vehicle.status,
      });
    } else {
      setFormData({
        brand: '',
        model: '',
        plateNumber: '',
        year: new Date().getFullYear(),
        status: 'available',
      });
    }
  }, [vehicle, open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <form onSubmit={handleSubmit}>
        <DialogTitle>{vehicle ? 'Edit Vehicle' : 'Add Vehicle'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Brand"
            fullWidth
            required
            value={formData.brand}
            onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Model"
            fullWidth
            required
            value={formData.model}
            onChange={(e) => setFormData({ ...formData, model: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Plate Number"
            fullWidth
            required
            value={formData.plateNumber}
            onChange={(e) => setFormData({ ...formData, plateNumber: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Year"
            type="number"
            fullWidth
            required
            value={formData.year}
            onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
          />
          <TextField
            margin="dense"
            label="Status"
            select
            fullWidth
            value={formData.status}
            onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          >
            <MenuItem value="available">Available</MenuItem>
            <MenuItem value="in_use">In Use</MenuItem>
            <MenuItem value="maintenance">Maintenance</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" variant="contained">Save</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
