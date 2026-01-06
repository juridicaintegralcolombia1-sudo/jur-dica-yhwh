
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es obligatorio';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email no válido';
    }
    if (!formData.message.trim()) newErrors.message = 'El mensaje no puede estar vacío';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    if (!validate()) {
      e.preventDefault();
      return;
    }
    setStatus('sending');
    // Note: Form will naturally submit to FormSubmit via browser if not prevented here.
    // However, we simulate the state for UX. In a real React app, you might use fetch.
  };

  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row shadow-2xl rounded-2xl overflow-hidden bg-white">
          {/* Info Side */}
          <div className="lg:w-2/5 bg-primary p-12 text-white">
            <h2 className="text-3xl font-serif font-bold mb-8">Información de Contacto</h2>
            <p className="text-gray-300 mb-12">Estamos listos para evaluar su caso y brindarle la mejor solución legal o inmobiliaria.</p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <i className="fas fa-map-marker-alt text-secondary text-xl mt-1"></i>
                <div>
                  <h4 className="font-bold">Ubicación</h4>
                  <p className="text-gray-300">Carrera 10 N.16-39 Of. 16-05 <br/> Edificio Seguros Bolívar, Bogotá</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <i className="fas fa-phone-alt text-secondary text-xl mt-1"></i>
                <div>
                  <h4 className="font-bold">Teléfono</h4>
                  <a href="tel:+573106135299" className="text-gray-300 hover:text-white transition-colors">310 613 5299</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <i className="fas fa-envelope text-secondary text-xl mt-1"></i>
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-gray-300 break-all">juridicaintegralcolombia1@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <i className="fas fa-clock text-secondary text-xl mt-1"></i>
                <div>
                  <h4 className="font-bold">Horario</h4>
                  <p className="text-gray-300 italic">Lun - Sáb: 9:00 AM - 5:00 PM (Cita Previa)</p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/10 flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary transition-all"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary transition-all"><i className="fab fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary transition-all"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-3/5 p-12">
            <h3 className="text-2xl font-serif font-bold text-primary mb-8">Envíenos un Mensaje</h3>
            
            <form 
              action="https://formsubmit.co/juridicaintegralcolombia1@gmail.com" 
              method="POST" 
              className="space-y-6"
              onSubmit={handleSubmit}
            >
              {/* FormSubmit Config */}
              <input type="hidden" name="_subject" value="Nueva Consulta Legal - YHWH Web" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="text" name="_honey" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Nombre Completo</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Ej: Juan Pérez"
                    className={`w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 transition-all ${errors.name ? 'border-red-500 bg-red-50 ring-red-200' : 'border-gray-200 focus:ring-primary/20'}`}
                    required 
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Correo Electrónico</label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="email@ejemplo.com"
                    className={`w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 transition-all ${errors.email ? 'border-red-500 bg-red-50 ring-red-200' : 'border-gray-200 focus:ring-primary/20'}`}
                    required 
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Asunto</label>
                <select 
                  name="subject"
                  className="w-full px-4 py-3 rounded border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option>Derecho de Familia</option>
                  <option>Derecho Inmobiliario / Administración</option>
                  <option>Derecho Notarial</option>
                  <option>Cobranzas / Comercial</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Tu Mensaje</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={4} 
                  placeholder="Describa brevemente su consulta..."
                  className={`w-full px-4 py-3 rounded border focus:outline-none focus:ring-2 transition-all ${errors.message ? 'border-red-500 bg-red-50 ring-red-200' : 'border-gray-200 focus:ring-primary/20'}`}
                  required
                ></textarea>
                {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message}</span>}
              </div>

              <button 
                type="submit" 
                className="w-full py-4 bg-primary text-white font-bold rounded shadow-lg hover:bg-accent transition-all uppercase tracking-widest"
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar Consulta'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
