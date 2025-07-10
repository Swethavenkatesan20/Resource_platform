import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AddPlatform from '../pages/AddPlatform/AddPlatform';
import ErrorBoundary from '../components/fallback/ErrorBoundary';

export default function AppRoutes() {
  return (
    <ErrorBoundary>
    <Routes>
      <Route path="/" element={<Navigate to="/platforms/add" />} />
      <Route path="/platforms/add" element={<AddPlatform />} />
    </Routes>
    </ErrorBoundary>
  );
}
