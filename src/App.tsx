// src/App.tsx
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import "./App.css";
// Remove the old font.css import - we're using progressive loading now
// import './font.css';

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Public login route */}
        <Route path="/" element={<LandingPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

const App: React.FC = () => {
  return <AppRoutes />;
};

export default App;
