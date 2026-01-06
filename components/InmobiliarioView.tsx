
import React from 'react';
import { View } from '../App';

interface InmobiliarioViewProps {
  onNavigate: (view: View) => void;
}

const InmobiliarioView: React.FC<InmobiliarioViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20 bg-white">
      {/* Page Header */}
      <header className="bg-secondary py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Soluciones Inmobiliarias</h1>
          <p className="text-white uppercase tracking-[0.3em] font-bold">Gestión de Activos y Corretaje</p>
        </div>
      </header>

      {/* Service Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
            <div className="lg:w-1/2">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800" className="rounded-2xl shadow-2xl" alt="Office" />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-serif font-bold text-primary mb-6">Administración Profesional de Bienes Inmuebles</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Nos encargamos de todo el ciclo de vida de su propiedad: desde la búsqueda de inquilinos calificados hasta el mantenimiento técnico y la gestión legal de contratos.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded">
                  <i className="fas fa-shield-halved text-secondary"></i>
                  <span className="font-bold">Seguridad Jurídica</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded">
                  <i className="fas fa-chart-line text-secondary"></i>
                  <span className="font-bold">Rentabilidad</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded">
                  <i className="fas fa-screwdriver-wrench text-secondary"></i>
                  <span className="font-bold">Mantenimiento</span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded">
                  <i className="fas fa-handshake text-secondary"></i>
                  <span className="font-bold">Corretaje Ágil</span>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-serif font-bold text-center mb-12">Nuestras Áreas de Operación</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl h-80">
              <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Residencial" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8 text-white">
                <h4 className="text-xl font-bold mb-2">Residencial</h4>
                <p className="text-sm opacity-80">Apartamentos y casas en Bogotá y alrededores.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl h-80">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Comercial" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8 text-white">
                <h4 className="text-xl font-bold mb-2">Comercial</h4>
                <p className="text-sm opacity-80">Oficinas y locales estratégicos.</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-xl h-80">
              <img src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Inversión" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-8 text-white">
                <h4 className="text-xl font-bold mb-2">Inversión</h4>
                <p className="text-sm opacity-80">Asesoría para compras sobre planos y rentas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back CTA */}
      <div className="py-20 text-center">
        <button 
          onClick={() => onNavigate('home')} 
          className="px-12 py-4 bg-primary text-white font-bold rounded shadow-xl hover:bg-secondary transition-all"
        >
          Regresar al Inicio
        </button>
      </div>
    </div>
  );
};

export default InmobiliarioView;
