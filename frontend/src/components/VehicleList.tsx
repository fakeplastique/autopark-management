import {
  Card,
  CardContent,
  Grid,
  Typography,
  IconButton,
  Chip,
  Box,
} from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Vehicle } from '../types/vehicle';

interface VehicleListProps {
  vehicles: Vehicle[];
  onEdit: (vehicle: Vehicle) => void;
  onDelete: (id: string) => void;
}

export default function VehicleList({ vehicles, onEdit, onDelete }: VehicleListProps) {
  return (
    <Grid container spacing={3}>
      {vehicles.map((vehicle) => (
        <Grid item xs={12} sm={6} md={4} key={vehicle.id}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                <Typography variant="h6" component="div">
                  {vehicle.brand} {vehicle.model}
                </Typography>
                <Box>
                  <IconButton size="small" onClick={() => onEdit(vehicle)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton size="small" onClick={() => onDelete(vehicle.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              </Box>

              <Typography color="text.secondary" gutterBottom>
                {vehicle.plateNumber}
              </Typography>

              <Typography variant="body2">
                Year: {vehicle.year}
              </Typography>

              <Box mt={1}>
                <Chip
                  label={vehicle.status}
                  color={vehicle.status === 'available' ? 'success' : 'default'}
                  size="small"
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
