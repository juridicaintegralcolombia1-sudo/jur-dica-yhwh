
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Services from './components/Services.tsx';
import About from './components/About.tsx';
import ContactForm from './components/ContactForm.tsx';
import Footer from './components/Footer.tsx';
import WhatsAppButton from './components/WhatsAppButton.tsx';
import JuridicoView from './components/JuridicoView.tsx';
import InmobiliarioView from './components/InmobiliarioView.tsx';
import useScrollReveal from './hooks/useScrollReveal.ts';

export type View = 'home' | 'juridico' | 'inmobiliario';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  
  // Inicializar animaciones de scroll
  useScrollReveal();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  const navigate = (view: View) => {
    setCurrentView(view);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentView={currentView} onNavigate={navigate} />
      
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero onNavigate={navigate} />
            <Services />
            <About />
            <ContactForm />
          </>
        )}
        
        {currentView === 'juridico' && (
          <JuridicoView onNavigate={navigate} />
        )}
        
        {currentView === 'inmobiliario' && (
          <InmobiliarioView onNavigate={navigate} />
        )}
      </main>

      <Footer onNavigate={navigate} />
      <WhatsAppButton />
    </div>
  );
};

export default App;
