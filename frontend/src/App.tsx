import { useState, useEffect } from 'react';
import {
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import VehicleList from './components/VehicleList';
import VehicleDialog from './components/VehicleDialog';
import { getVehicles, createVehicle, updateVehicle, deleteVehicle } from './api/vehicles';
import { Vehicle, VehicleFormData, VehiclesFilter } from './types/vehicle';
import { VehicleFilterLayout } from './components/VehicleFilterLayout';

function App() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [filter, setFilter] = useState<VehiclesFilter>({});


  const loadVehicles = async () => {
    const data = await getVehicles(filter);
    setVehicles(data);
  };

  useEffect(() => {
    loadVehicles();
  }, [filter]);

  const handleCreate = () => {
    setSelectedVehicle(null);
    setDialogOpen(true);
  };

  const handleEdit = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    await deleteVehicle(id);
    loadVehicles();
  };

  const handleSave = async (data: VehicleFormData) => {
    if (selectedVehicle) {
      await updateVehicle(selectedVehicle.id, data);
    } else {
      await createVehicle(data);
    }
    setDialogOpen(false);
    loadVehicles();
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Autopark Management System
          </Typography>
          <Button color="inherit" startIcon={<AddIcon />} onClick={handleCreate}>
            Add Vehicle
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <VehicleFilterLayout filterChange={setFilter}/>
        <VehicleList
          vehicles={vehicles}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Container>

      <VehicleDialog
        open={dialogOpen}
        vehicle={selectedVehicle}
        onClose={() => setDialogOpen(false)}
        onSave={handleSave}
      />
    </>
  );
}

export default App;
