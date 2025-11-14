// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { LandingPage } from './pages/LandingPage';
import './App.css';
// Remove the old font.css import - we're using progressive loading now
// import './font.css';
import { ToastProvider } from './services/ToastProvider';
import { TemplateProvider } from "./contexts/TemplateContext";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <ToastProvider>
        <AuthProvider>
          <TemplateProvider>
            <Routes>
              {/* Public login route */}
              <Route path="/" element={<LandingPage />} />

              {/* Fallback */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </TemplateProvider>
        </AuthProvider>
      </ToastProvider>
    </Router>
  );
};

const App: React.FC = () => {
  return <AppRoutes />;
};

export default App;