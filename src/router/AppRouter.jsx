import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Survey from '../pages/Survey';
import Profile from '../pages/Profile';

import ProtectedRoute from './ProtectedRoute';
import ProtectedLayout from '../components/layout/ProtectedLayout';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔹 Ruta inicial */}
        <Route path="/" element={<Navigate to="/login" />} />

        {/* 🔓 Públicas */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 🔐 Protegidas */}
        <Route
          element={
            <ProtectedRoute>
              <ProtectedLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/survey" element={<Survey />} />
          <Route path="/profile" element={<Profile />} />
        </Route>

        {/* 🚫 Cualquier otra ruta */}
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
