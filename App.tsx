
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import JuridicoView from './components/JuridicoView';
import InmobiliarioView from './components/InmobiliarioView';
import useScrollReveal from './hooks/useScrollReveal';

export type View = 'home' | 'juridico' | 'inmobiliario';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  
  // Use our custom scroll reveal hook
  useScrollReveal();

  // Scroll to top when changing view
  useEffect(() => {
    window.scrollTo(0, 0);
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
            <Services onNavigate={navigate} />
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
