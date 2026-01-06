
import React from 'react';
import { View } from '../App.tsx';

interface FooterProps {
  onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-legalBlue text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <button onClick={() => onNavigate('home')} className="flex items-center gap-2 mb-6 group">
              <div className="bg-secondary w-8 h-8 rounded flex items-center justify-center text-white font-serif font-bold group-hover:bg-white group-hover:text-primary transition-all">Y</div>
              <span className="text-xl font-serif font-bold tracking-tight">YHWH</span>
            </button>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Liderando el sector legal e inmobiliario en Colombia con integridad y profesionalismo. Más de 19 años transformando la vida de nuestros clientes.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-secondary">Nuestras Áreas</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><button onClick={() => onNavigate('home')} className="hover:text-white transition-colors">Inicio</button></li>
              <li><button onClick={() => onNavigate('juridico')} className="hover:text-white transition-colors">Área Jurídica</button></li>
              <li><button onClick={() => onNavigate('inmobiliario')} className="hover:text-white transition-colors">Área Inmobiliaria</button></li>
              <li><button onClick={() => {
                onNavigate('home');
                setTimeout(() => document.getElementById('contacto')?.scrollIntoView({behavior:'smooth'}), 100);
              }} className="hover:text-white transition-colors">Contacto</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif font-bold text-lg mb-6 text-secondary">Ubicación</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Carrera 10 N.16-39 Of. 16-05 <br/> 
              Edificio Seguros Bolívar, Bogotá, Colombia
            </p>
            <a href="tel:+573106135299" className="text-secondary font-bold hover:underline">
              T: +57 310 613 5299
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
          <p>&copy; {new Date().getFullYear()} Jurídica e Inmobiliaria Colombia YHWH. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Política de Privacidad</a>
            <a href="#" className="hover:text-white">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
