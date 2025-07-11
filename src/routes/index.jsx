import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
//import AddPlatform from '../pages/AddPlatform/AddPlatformLayout';
import ErrorBoundary from '../components/fallback/ErrorBoundary';
import AddPlatformLayout from '../pages/layoutPages/AddPlatformLayout';

export default function AppRoutes() {
  return (
    <ErrorBoundary>
    <Routes>
      <Route path="/" element={<Navigate to="settings/platforms/add" />} />
      <Route path="settings/platforms/add" element={<AddPlatformLayout />} />
    </Routes>
    </ErrorBoundary>
  );
}
