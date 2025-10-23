import { VehiclesFilter } from '../types/vehicle';
import { TextField } from '@mui/material';


interface VehicleFilterLayoutProps {
    filterChange: (filterData: ((prev: VehiclesFilter) => VehiclesFilter)) => void;
}

interface TextFieldMetaData {
    label: string;
    key: keyof VehiclesFilter
}

export function VehicleFilterLayout({ filterChange }: VehicleFilterLayoutProps) {

    const fieldsMeta: TextFieldMetaData[] = [
        {label: "Brand", key: "brand"},
        {label: "Model", key: "model"},
        {label: "Year", key: "year"}
    ]

    const createChangeHandler = (field: keyof VehiclesFilter) => (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        let processedValue: string | number | undefined;

        if (field === 'year') {
            processedValue = value ? parseInt(value) || undefined : undefined;
        } else {
            processedValue = value || undefined;
        }

        filterChange((prev) => ({
            ...prev,
            [field]: processedValue
        }));
    };

    return (
            <>{fieldsMeta.map(({label, key}) => {
            return <TextField
                key={key}
                label={label}
                onChange={createChangeHandler(key)}
                variant="outlined"
                size="small"
                sx={{ mr: 2, mb: 2 }}
            />})}
        </>
    )

}