
import React from 'react';
import { View } from '../App.tsx';

interface HeroProps {
  onNavigate: (view: View) => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section id="inicio" className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden bg-legalBlue">
      {/* Sección Jurídica */}
      <div 
        onClick={() => onNavigate('juridico')}
        className="relative flex-1 group cursor-pointer overflow-hidden transition-all duration-700 ease-in-out md:hover:flex-[1.5]"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=1200" 
            alt="Área Jurídica" 
            className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-primary/70 group-hover:bg-primary/50 transition-colors duration-500"></div>
        </div>
        
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <span className="text-secondary font-bold uppercase tracking-[0.3em] mb-4 text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            Excelencia Legal
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Área <br/> <span className="text-secondary">Jurídica</span>
          </h2>
          <p className="text-gray-200 max-w-md mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            Litigio especializado, derecho de familia y asesoría notarial con 19 años de impecable trayectoria.
          </p>
          <div className="px-8 py-3 bg-white text-primary font-bold rounded-sm group-hover:bg-secondary group-hover:text-white transition-all uppercase tracking-widest text-xs">
            Entrar al Área Legal
          </div>
        </div>
      </div>

      {/* Divisor Central */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/20 z-20"></div>

      {/* Sección Inmobiliaria */}
      <div 
        onClick={() => onNavigate('inmobiliario')}
        className="relative flex-1 group cursor-pointer overflow-hidden transition-all duration-700 ease-in-out md:hover:flex-[1.5]"
      >
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" 
            alt="Área Inmobiliaria" 
            className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
          />
          <div className="absolute inset-0 bg-accent/70 group-hover:bg-accent/50 transition-colors duration-500"></div>
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
          <span className="text-secondary font-bold uppercase tracking-[0.3em] mb-4 text-sm opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            Inversión Segura
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Área <br/> <span className="text-secondary">Inmobiliaria</span>
          </h2>
          <p className="text-gray-200 max-w-md mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            Gestión de activos, corretaje y administración de bienes inmuebles con respaldo legal integral.
          </p>
          <div className="px-8 py-3 bg-white text-primary font-bold rounded-sm group-hover:bg-secondary group-hover:text-white transition-all uppercase tracking-widest text-xs">
            Entrar a Inmobiliaria
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
