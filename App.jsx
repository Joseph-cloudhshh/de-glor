import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
import { AuthProvider, useAuth } from '@/lib/AuthContext';
import UserNotRegisteredError from '@/components/UserNotRegisteredError';
import Layout from './components/layout/Layout';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Kindergarten from './pages/Kindergarten';
import PrimarySchool from './pages/PrimarySchool';
import JuniorHigh from './pages/JuniorHigh';
import SeniorHigh from './pages/SeniorHigh';
import Gallery from './pages/Gallery';
import News from './pages/News';
import Announcements from './pages/Announcements';
import Staff from './pages/Staff';
import StudentLife from './pages/StudentLife';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import AcademicCalendar from './pages/AcademicCalendar';

const AuthenticatedApp = () => {
  const { isLoadingAuth, isLoadingPublicSettings, authError, navigateToLogin } = useAuth();

  if (isLoadingPublicSettings || isLoadingAuth) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#080810]">
        <div className="w-8 h-8 border-2 border-white/10 border-t-[#5B8AF5] rounded-full animate-spin" />
      </div>
    );
  }

  if (authError) {
    if (authError.type === 'user_not_registered') return <UserNotRegisteredError />;
    if (authError.type === 'auth_required') { navigateToLogin(); return null; }
  }

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/kindergarten" element={<Kindergarten />} />
        <Route path="/primary-school" element={<PrimarySchool />} />
        <Route path="/junior-high" element={<JuniorHigh />} />
        <Route path="/senior-high" element={<SeniorHigh />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/news" element={<News />} />
        <Route path="/announcements" element={<Announcements />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/student-life" element={<StudentLife />} />
        <Route path="/admissions" element={<Admissions />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/academic-calendar" element={<AcademicCalendar />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <QueryClientProvider client={queryClientInstance}>
        <Router>
          <AuthenticatedApp />
        </Router>
        <Toaster />
      </QueryClientProvider>
    </AuthProvider>
  );
}

export default App;