
import React from 'react';
import { View } from '../App';

interface JuridicoViewProps {
  onNavigate: (view: View) => void;
}

const JuridicoView: React.FC<JuridicoViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-20 bg-white">
      {/* Page Header */}
      <header className="bg-primary py-24 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Servicios Jurídicos</h1>
          <p className="text-secondary uppercase tracking-[0.3em] font-bold">Protección Legal Integral</p>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-serif font-bold text-primary mb-8 border-l-4 border-secondary pl-4">Especialistas en Derecho de Familia y Notarial</h2>
              <div className="space-y-8 text-gray-700 text-lg leading-relaxed">
                <p>
                  Nuestra firma ofrece representación legal técnica en procesos de alta complejidad, siempre con un enfoque humano y ético. Nos especializamos en resolver conflictos de manera ágil a través de la conciliación o el litigio estratégico.
                </p>
                <div className="bg-gray-50 p-8 rounded-lg border-l-8 border-primary">
                  <h4 className="font-bold text-primary mb-4 text-xl">¿Por qué elegirnos?</h4>
                  <ul className="space-y-4">
                    <li className="flex items-center gap-3">
                      <i className="fas fa-check-circle text-secondary"></i>
                      <span>Más de 19 años de experiencia comprobada.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="fas fa-check-circle text-secondary"></i>
                      <span>Atención personalizada por la Dra. Claudia Quevedo.</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <i className="fas fa-check-circle text-secondary"></i>
                      <span>Ubicación estratégica en el centro financiero de Bogotá.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: 'Divorcios', icon: 'fa-heart-crack' },
                { title: 'Sucesiones', icon: 'fa-file-invoice' },
                { title: 'Custodias', icon: 'fa-child' },
                { title: 'Testamentos', icon: 'fa-pen-nib' },
                { title: 'Contratos', icon: 'fa-file-signature' },
                { title: 'Cobranzas', icon: 'fa-hand-holding-dollar' },
              ].map((item, i) => (
                <div key={i} className="p-6 border border-gray-100 rounded hover:shadow-lg transition-all text-center">
                  <i className={`fas ${item.icon} text-3xl text-primary mb-4`}></i>
                  <h3 className="font-bold text-primary">{item.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-8">¿Necesita Asesoría Legal?</h2>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => onNavigate('home')} 
              className="px-8 py-3 bg-primary text-white font-bold rounded"
            >
              Volver al Inicio
            </button>
            <a 
              href="https://wa.me/573106135299" 
              className="px-8 py-3 border-2 border-primary text-primary font-bold rounded hover:bg-primary hover:text-white transition-all"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JuridicoView;
