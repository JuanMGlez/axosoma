'use client';

import { useState, useEffect } from 'react';
import { Code2, Gift, Globe } from 'lucide-react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouse = (e: MouseEvent) => setMousePosition({ x: e.clientX, y: e.clientY });
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouse);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouse);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/60 backdrop-blur-3xl border-b border-[#E2E8F0]/50">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-12 py-6 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <div className="relative w-9 h-9">
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F766E] to-[#14B8A6] rounded-xl rotate-45" />
              <div className="absolute inset-[3px] bg-white rounded-lg rotate-45" />
            </div>
            <span className="text-[26px] font-semibold text-[#0A0F1C] tracking-tight">AxoSoma</span>
          </div>
          <div className="hidden lg:flex gap-12 text-[15px] text-[#475569] font-medium">
            <a href="#inicio" className="hover:text-[#0F766E] transition-colors">Inicio</a>
            <a href="#plataforma" className="hover:text-[#0F766E] transition-colors">Plataforma</a>
            <a href="#impacto" className="hover:text-[#0F766E] transition-colors">Impacto</a>
            <a href="#opensource" className="hover:text-[#0F766E] transition-colors">Open Source</a>
          </div>
          <button className="px-7 py-3 bg-[#0F766E] text-white rounded-2xl font-medium hover:bg-[#0D6560] transition-all text-[15px]">
            Comenzar
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center px-8 lg:px-12 pt-32 overflow-hidden bg-gradient-to-b from-[#FAFBFC] to-white">
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(20, 184, 166, 0.15), transparent 40%)`
          }}
        />
        
        <div className="absolute top-0 right-0 w-[1200px] h-[1200px] bg-gradient-to-br from-[#14B8A6]/5 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-[#0F766E]/5 via-transparent to-transparent rounded-full blur-3xl" />
        
        {/* Subtle gradient orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div 
            className="absolute top-[20%] right-[15%] w-[400px] h-[400px] bg-gradient-to-br from-[#14B8A6]/10 to-transparent rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          />
          <div 
            className="absolute bottom-[15%] left-[10%] w-[350px] h-[350px] bg-gradient-to-tr from-[#0F766E]/8 to-transparent rounded-full blur-3xl"
            style={{ transform: `translateY(${scrollY * -0.15}px)` }}
          />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto w-full">
          <div className="max-w-[900px] mx-auto lg:mx-0">
            <h1 className="text-[clamp(3.5rem,8vw,7rem)] font-bold mb-8 leading-[0.95] tracking-tight">
              <span className="text-[#0A0F1C]">
                Cuidado continuo,
              </span>
              <br />
              <span className="text-[#0F766E]">
                vida plena
              </span>
            </h1>
            
            <p className="text-[22px] text-[#475569] mb-12 leading-relaxed max-w-[700px] font-light">
              Herramientas inteligentes que te ayudan a entender y controlar tu salud. Diseñadas para personas reales, respaldadas por ciencia real.
            </p>

            <div className="flex flex-wrap gap-5">
              <button className="group px-9 py-5 bg-[#0F766E] text-white rounded-2xl font-semibold text-[17px] hover:bg-[#0D6560] transition-all shadow-lg hover:shadow-xl hover:scale-[1.02]">
                Empezar Gratis
                <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
              <button className="px-9 py-5 bg-white text-[#0A0F1C] rounded-2xl font-semibold text-[17px] border border-[#E2E8F0] hover:border-[#0F766E] transition-all hover:shadow-lg">
                Ver Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Section */}
      <section id="plataforma" className="py-40 px-8 lg:px-12 relative bg-gradient-to-b from-white to-[#F8FAFB]">
        <div className="max-w-[1400px] mx-auto">
          <div className={`text-center mb-24 transition-all duration-1000 ${visibleSections.has('plataforma') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#0A0F1C] mb-6 tracking-tight">
              Todo lo que necesitas
            </h2>
            <p className="text-[20px] text-[#475569] max-w-[650px] mx-auto font-light">
              Herramientas pensadas para hacer tu vida más fácil, no más complicada
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Seguimiento Simple',
                desc: 'Registra tus mediciones en segundos. Sin complicaciones, sin formularios eternos.',
                color: '#0F766E'
              },
              {
                title: 'Insights Inteligentes',
                desc: 'Descubre patrones en tu salud con visualizaciones claras que realmente entiendes.',
                color: '#14B8A6'
              },
              {
                title: 'Alertas Personalizadas',
                desc: 'Recibe notificaciones cuando realmente importa, no spam constante.',
                color: '#0F766E'
              },
              {
                title: 'Comparte con tu Médico',
                desc: 'Exporta reportes profesionales en un clic para tus consultas.',
                color: '#14B8A6'
              },
              {
                title: 'Comunidad Real',
                desc: 'Conecta con personas que entienden lo que vives día a día.',
                color: '#0F766E'
              },
              {
                title: 'Educación Continua',
                desc: 'Aprende sobre tu condición con contenido verificado y actualizado.',
                color: '#14B8A6'
              }
            ].map((item, i) => (
              <div 
                key={i}
                className={`group p-10 rounded-[32px] bg-white border-2 border-[#E2E8F0] hover:border-[#0F766E] transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${visibleSections.has('plataforma') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: visibleSections.has('plataforma') ? `${i * 100}ms` : '0ms' }}
              >
                <div 
                  className="w-12 h-12 rounded-2xl mb-6 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <div className="w-6 h-6 rounded-lg transition-all duration-300 group-hover:scale-90" style={{ backgroundColor: item.color }} />
                </div>
                <h3 className="text-[22px] font-bold text-[#0A0F1C] mb-3 tracking-tight">{item.title}</h3>
                <p className="text-[15px] text-[#64748B] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impacto" className="py-32 lg:py-40 px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D6560] via-[#0F766E] to-[#14B8A6]" />
        <div className="absolute inset-0 opacity-[0.07]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]" />
        </div>

        <div className="relative max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className={`text-white transition-all duration-1000 ${visibleSections.has('impacto') ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
              <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold mb-8 tracking-tight">
                Impacto real en vidas reales
              </h2>
              <p className="text-[20px] mb-12 opacity-95 leading-relaxed font-light">
                Comenzamos en México con la misión de ayudar a millones de personas con enfermedades crónicas. Nuestro objetivo: expandirnos globalmente y democratizar el acceso a herramientas de salud de calidad.
              </p>
              <div className="space-y-6">
                {[
                  { label: 'Usuarios activos', value: '12,000+' },
                  { label: 'Mediciones registradas', value: '500K+' },
                  { label: 'Países', value: '8' }
                ].map((stat, i) => (
                  <div key={i} className="flex items-baseline gap-4">
                    <div className="text-[48px] font-bold">{stat.value}</div>
                    <div className="text-[18px] opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={`relative transition-all duration-1000 delay-300 ${visibleSections.has('impacto') ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
              <div className="bg-white/10 backdrop-blur-xl rounded-[32px] p-10 border border-white/20 shadow-2xl">
                <div className="space-y-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center flex-shrink-0">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div className="text-white">
                      <div className="text-[20px] font-semibold mb-2">Diabetes Tipo 1 y 2</div>
                      <div className="text-[15px] opacity-90">Monitoreo glucémico adaptado a tu tipo de diabetes</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center flex-shrink-0">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div className="text-white">
                      <div className="text-[20px] font-semibold mb-2">Hipertensión Arterial</div>
                      <div className="text-[15px] opacity-90">Control de presión arterial con alertas inteligentes</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center flex-shrink-0">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <polyline points="22 4 12 14.01 9 11.01" />
                      </svg>
                    </div>
                    <div className="text-white">
                      <div className="text-[20px] font-semibold mb-2">Todas las Edades</div>
                      <div className="text-[15px] opacity-90">Desde jóvenes con diabetes tipo 1 hasta adultos mayores</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section id="opensource" className="py-40 px-8 lg:px-12 bg-gradient-to-b from-[#F8FAFB] to-[#E8EDEF]">
        <div className="max-w-[1200px] mx-auto text-center">
          <div className={`transition-all duration-1000 ${visibleSections.has('opensource') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <h2 className="text-[clamp(2.5rem,5vw,4rem)] font-bold text-[#0A0F1C] mb-8 tracking-tight">
              Construido en comunidad
            </h2>
            <p className="text-[20px] text-[#475569] mb-16 max-w-[700px] mx-auto font-light leading-relaxed">
              AxoSoma es completamente open source. Cada línea de código es transparente, auditable y mejorable por la comunidad global.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                icon: Code2,
                title: 'Código Abierto', 
                desc: 'Revisa y contribuye en GitHub',
                gradient: 'from-[#0F766E] to-[#14B8A6]'
              },
              { 
                icon: Gift,
                title: 'Gratis Siempre', 
                desc: 'Sin costos ocultos ni suscripciones',
                gradient: 'from-[#14B8A6] to-[#2DD4BF]'
              },
              { 
                icon: Globe,
                title: 'Global', 
                desc: 'De México para el mundo',
                gradient: 'from-[#2DD4BF] to-[#5EEAD4]'
              }
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div 
                  key={i} 
                  className={`p-10 rounded-[32px] bg-white border border-[#E2E8F0] hover:border-[#14B8A6]/30 transition-all duration-700 hover:shadow-xl ${visibleSections.has('opensource') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: visibleSections.has('opensource') ? `${i * 150}ms` : '0ms' }}
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} mb-6 flex items-center justify-center mx-auto`}>
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  <div className="text-[22px] font-bold text-[#0A0F1C] mb-3">{item.title}</div>
                  <div className="text-[16px] text-[#64748B]">{item.desc}</div>
                </div>
              );
            })}
          </div>

          <button className="px-10 py-5 bg-[#0A0F1C] text-white rounded-2xl font-semibold text-[17px] hover:bg-[#1E293B] transition-all shadow-lg hover:shadow-xl">
            Ver en GitHub
          </button>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-40 px-8 lg:px-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D1D8DD] via-[#475569] to-[#0A0F1C]" />
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#14B8A6]/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0F766E]/20 to-transparent rounded-full blur-3xl" />
        </div>

        <div className={`relative max-w-[900px] mx-auto text-center text-white transition-all duration-1000 ${visibleSections.has('cta') ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-bold mb-8 tracking-tight">
            Comienza tu viaje hacia una mejor salud
          </h2>
          <p className="text-[22px] mb-14 opacity-90 font-light">
            Únete a miles de personas que ya están tomando el control
          </p>
          <button className="px-12 py-6 bg-white text-[#0A0F1C] rounded-2xl font-bold text-[18px] hover:bg-[#F1F5F9] transition-all shadow-2xl hover:shadow-3xl hover:scale-105">
            Crear Cuenta Gratis
          </button>
          <p className="mt-8 text-[15px] opacity-70">Sin tarjeta de crédito • Sin compromisos</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-8 lg:px-12 bg-[#0A0F1C]">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="relative w-9 h-9">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0F766E] to-[#14B8A6] rounded-xl rotate-45" />
                  <div className="absolute inset-[3px] bg-[#0A0F1C] rounded-lg rotate-45" />
                </div>
                <span className="text-[22px] font-semibold text-white">AxoSoma</span>
              </div>
              <p className="text-[#94A3B8] leading-relaxed max-w-[320px]">
                Plataforma open source para el manejo de diabetes e hipertensión. Hecho con amor desde México.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 text-[15px]">Producto</h4>
              <div className="space-y-3.5 text-[#94A3B8] text-[15px]">
                <div className="hover:text-white cursor-pointer transition-colors">Características</div>
                <div className="hover:text-white cursor-pointer transition-colors">Seguridad</div>
                <div className="hover:text-white cursor-pointer transition-colors">Roadmap</div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 text-[15px]">Recursos</h4>
              <div className="space-y-3.5 text-[#94A3B8] text-[15px]">
                <div className="hover:text-white cursor-pointer transition-colors">Documentación</div>
                <div className="hover:text-white cursor-pointer transition-colors">Blog</div>
                <div className="hover:text-white cursor-pointer transition-colors">Comunidad</div>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-5 text-[15px]">Legal</h4>
              <div className="space-y-3.5 text-[#94A3B8] text-[15px]">
                <div className="hover:text-white cursor-pointer transition-colors">Privacidad</div>
                <div className="hover:text-white cursor-pointer transition-colors">Términos</div>
                <div className="hover:text-white cursor-pointer transition-colors">Licencia MIT</div>
              </div>
            </div>
          </div>
          <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[#64748B] text-[14px]">
            <p>© 2024 AxoSoma. Open Source bajo licencia MIT.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Discord</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
