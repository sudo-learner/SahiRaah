import { useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'roadmap', label: 'Roadmap' },
  { id: 'scamcheck', label: 'Scam Check' },
  { id: 'community', label: 'Community' },
];

export default function Navbar({ active, onNavigate }) {
  const [open, setOpen] = useState(false);

  const handleNav = (id) => {
    onNavigate(id);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-ink/10">
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <button
          onClick={() => handleNav('home')}
          className="font-display text-2xl font-semibold text-ink flex items-baseline gap-1"
        >
          Sahi<span className="text-saffron">Raah</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`text-sm font-medium transition-colors ${
                active === item.id
                  ? 'text-saffron'
                  : 'text-ink-soft hover:text-saffron'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu kholiye"
        >
          <span className={`block w-6 h-0.5 bg-ink transition-transform ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-ink transition-transform ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink/10 bg-paper">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNav(item.id)}
              className={`block w-full text-left px-6 py-3.5 text-sm font-medium border-b border-ink/5 ${
                active === item.id ? 'text-saffron' : 'text-ink-soft'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
