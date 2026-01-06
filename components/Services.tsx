
import React from 'react';

const juridicServices = [
  { icon: 'fa-users', title: 'Derecho de Familia', desc: 'Sucesiones, divorcios y custodias gestionados con humanidad.' },
  { icon: 'fa-file-signature', title: 'Derecho Notarial', desc: 'Escrituración, testamentos y trámites ágiles.' },
  { icon: 'fa-gavel', title: 'Litigio Civil', desc: 'Representación técnica en procesos de alta complejidad.' }
];

const realEstateServices = [
  { icon: 'fa-building', title: 'Administración', desc: 'Gestión profesional de su patrimonio inmobiliario.' },
  { icon: 'fa-house-circle-check', title: 'Corretaje', desc: 'Compra y venta con estudio de títulos garantizado.' },
  { icon: 'fa-hand-holding-dollar', title: 'Cobranza Rentas', desc: 'Recuperación de cánones y gestión de arrendamientos.' }
];

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">Nuestras Soluciones</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg italic">
            "Justicia y Transparencia en cada gestión inmobiliaria y legal."
          </p>
        </div>

        {/* Sección Jurídica */}
        <div id="servicios-juridicos" className="mb-20">
          <h3 className="text-2xl font-serif font-bold text-primary mb-8 border-l-4 border-secondary pl-4 uppercase tracking-wider">Servicios Jurídicos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {juridicServices.map((s, i) => (
              <div key={i} className="fade-in p-8 bg-gray-50 rounded shadow-sm hover:shadow-xl transition-all border-t-4 border-primary">
                <i className={`fas ${s.icon} text-3xl text-primary mb-4`}></i>
                <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sección Inmobiliaria */}
        <div id="servicios-inmobiliarios">
          <h3 className="text-2xl font-serif font-bold text-primary mb-8 border-l-4 border-secondary pl-4 uppercase tracking-wider">Servicios Inmobiliarios</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {realEstateServices.map((s, i) => (
              <div key={i} className="fade-in p-8 bg-gray-50 rounded shadow-sm hover:shadow-xl transition-all border-t-4 border-secondary">
                <i className={`fas ${s.icon} text-3xl text-secondary mb-4`}></i>
                <h4 className="text-xl font-bold mb-2">{s.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
