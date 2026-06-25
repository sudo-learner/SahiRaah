import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import ScamCheck from './pages/ScamCheck';
import Community from './pages/Community';

export default function App() {
  const [page, setPage] = useState('home');

  const handleNavigate = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar active={page} onNavigate={handleNavigate} />
      <main className="flex-1">
        {page === 'home' && <Home onNavigate={handleNavigate} />}
        {page === 'roadmap' && <Roadmap />}
        {page === 'scamcheck' && <ScamCheck />}
        {page === 'community' && <Community />}
      </main>
      <Footer />
    </div>
  );
}
