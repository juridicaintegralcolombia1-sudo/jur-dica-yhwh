
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre-nosotros" className="py-24 bg-primary text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative fade-in">
            <div className="absolute -top-10 -left-10 w-40 h-40 border-t-4 border-l-4 border-secondary/50 hidden md:block"></div>
            <img 
              src="https://picsum.photos/id/447/800/1000" 
              alt="Dra. Claudia Quevedo" 
              className="rounded-lg shadow-2xl relative z-10 w-full object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-secondary p-8 rounded shadow-xl z-20 hidden md:block">
              <span className="block text-4xl font-serif font-bold">19+</span>
              <span className="block text-sm uppercase tracking-widest opacity-90">Años de Trayectoria</span>
            </div>
          </div>
          
          <div className="lg:w-1/2 fade-in">
            <h5 className="text-secondary font-bold uppercase tracking-widest mb-4">Experiencia y Compromiso</h5>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">Dra. Claudia Marcela Quevedo Villarraga</h2>
            <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
              <p>
                Fundada en el año 2004, nuestra firma nace bajo el liderazgo de la <strong>Dra. Claudia Marcela Quevedo Villarraga</strong>, abogada titulada de la Universidad La Gran Colombia.
              </p>
              <p>
                A lo largo de casi dos décadas, hemos marcado la diferencia por nuestro trato humano, honestidad y justicia en cada proceso gestionado. Nuestra visión integra el rigor jurídico con la agilidad que requiere el mercado inmobiliario actual.
              </p>
              <p>
                Inscritos en Cámara y Comercio, garantizamos un servicio profesional en litigio, conciliación, corretaje de compra, arrendamiento y administración de bienes inmuebles.
              </p>
            </div>
            
            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1,2,3,4].map(i => (
                  <img key={i} src={`https://picsum.photos/id/${i+20}/100/100`} className="w-12 h-12 rounded-full border-2 border-primary" alt="Team" />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-400">
                Respaldo de un equipo <br/> legal de confianza.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
