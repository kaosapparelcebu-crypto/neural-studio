import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import DashboardLayout from './layouts/DashboardLayout';
import Overview from './pages/dashboard/Overview';
import AdminPanel from './pages/admin/AdminPanel';
import Generator from './pages/dashboard/Generator';
import BrandKit from './pages/dashboard/BrandKit';
import Library from './pages/dashboard/Library';
import Scheduler from './pages/dashboard/Scheduler';
import Billing from './pages/dashboard/Billing';
import Settings from './pages/dashboard/Settings';

import Onboarding from './pages/Onboarding';
import TrendRadar from './pages/dashboard/TrendRadar';

function App() {
    return (
        <Router>
            <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Landing />} />

                {/* Auth Routes */}
                <Route path="/login" element={<Navigate to="/onboarding" replace />} />
                <Route path="/signup" element={<Navigate to="/onboarding" replace />} />
                <Route path="/onboarding" element={<Onboarding />} />

                {/* User Dashboard */}
                <Route path="/dashboard" element={<DashboardLayout />}>
                    <Route index element={<Overview />} />
                    <Route path="trends" element={<TrendRadar />} />
                    <Route path="generate" element={<Generator />} />
                    <Route path="brand" element={<BrandKit />} />
                    <Route path="library" element={<Library />} />
                    <Route path="campaigns" element={<Scheduler />} /> {/* Reusing Scheduler for Campaigns for now */}
                    <Route path="social" element={<Scheduler />} />
                    <Route path="billing" element={<Billing />} />
                    <Route path="settings" element={<Settings />} />
                </Route>

                {/* Super Admin */}
                <Route path="/admin" element={<AdminPanel />} />

                {/* Catch all */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}

export default App;
