import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import VehiclesPage from './pages/VehiclesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/vehicles" />} />
        <Route path="/vehicles" element={<VehiclesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
