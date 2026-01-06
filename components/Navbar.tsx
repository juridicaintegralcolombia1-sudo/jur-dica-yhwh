
import React, { useState, useEffect } from 'react';
import { View } from '../App';

interface NavbarProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = scrolled || currentView !== 'home';

  const navLinks = [
    { name: 'Inicio', view: 'home' as View },
    { name: 'Jurídico', view: 'juridico' as View },
    { name: 'Inmobiliario', view: 'inmobiliario' as View },
    { name: 'Contacto', view: 'home' as View, hash: '#contacto' },
  ];

  const handleLinkClick = (view: View, hash?: string) => {
    onNavigate(view);
    setIsOpen(false);
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isDark ? 'glass-header shadow-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <button onClick={() => handleLinkClick('home')} className="flex items-center gap-2 group text-left">
          <div className="bg-primary w-10 h-10 rounded flex items-center justify-center text-white font-serif text-xl font-bold group-hover:bg-secondary transition-colors">Y</div>
          <div className="flex flex-col">
            <span className={`text-xl font-serif font-bold tracking-tight leading-none ${isDark ? 'text-primary' : 'text-white'}`}>
              YHWH
            </span>
            <span className={`text-[9px] uppercase tracking-widest font-extrabold ${isDark ? 'text-secondary' : 'text-white/80'}`}>
              Colombia
            </span>
          </div>
        </button>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.view, link.hash)}
              className={`text-[12px] font-bold uppercase tracking-[0.2em] hover:text-secondary transition-colors ${isDark ? 'text-gray-800' : 'text-white'} ${currentView === link.view && !link.hash ? 'text-secondary underline underline-offset-8' : ''}`}
            >
              {link.name}
            </button>
          ))}
          <a
            href="tel:+573106135299"
            className={`px-6 py-2 rounded-sm text-[11px] font-bold uppercase tracking-widest transition-all ${
              isDark 
              ? 'bg-primary text-white hover:bg-secondary' 
              : 'bg-white text-primary hover:bg-secondary hover:text-white'
            }`}
          >
            Consultar
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl focus:outline-none">
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'} ${isDark || isOpen ? 'text-primary' : 'text-white'}`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 bg-legalBlue z-40 flex flex-col items-center justify-center transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col space-y-8 text-center">
          {navLinks.map((link) => (
            <button key={link.name} onClick={() => handleLinkClick(link.view, link.hash)} className="text-white text-2xl font-serif hover:text-secondary transition-colors">
              {link.name}
            </button>
          ))}
          <a href="tel:+573106135299" className="border-2 border-secondary text-secondary px-8 py-3 rounded text-lg font-bold">Llamar Ahora</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
