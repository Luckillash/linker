import React from 'react';
import { Wifi, Globe2, Zap, ArrowRight, Satellite, Shield, Clock, CloudLightning } from 'lucide-react';
import Hero from './components/Hero';
import Feature from './components/Feature';
import PricingCard from './components/PricingCard';
import Container from './components/layout/Container';
import SectionTitle from './components/ui/SectionTitle';
import SpecItem from './components/sections/SpecItem';
import { Opulento } from 'uvcanvas';
import Starlink from './assets/Starlink 0.png'

function App() {
  return (
    <div className="min-h-screen bg-gray-900">

      <Hero />
      
      {/* Features Section */}
      <section className="py-20">
        <Container>
          <SectionTitle>Tecnología revolucionaria</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Wifi className="w-8 h-8" />,
                title: "Internet de alta velocidad",
                description: "Experimenta velocidades de 200 Mbps"
              },
              {
                icon: <Globe2 className="w-8 h-8" />,
                title: "Cobertura global",
                description: "Conéctate desde cualquier lugar del mundo gracias a nuestra cobertura satelital"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Baja latencia",
                description: "Latencia de 20ms para una experiencia online fluida"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Seguridad avanzada",
                description: "Protección y encriptación de nivel corporativo"
              }
            ].map((feature, index) => (
              <Feature 
                key={index}
                {...feature}
                index={index}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Foto */}
      <section className="relative opacity-100">


            <div className="min-h-[100vh] h-screen bg-gray-800/50 opacity-20">

              <Opulento />
            
            </div>

            <img 
            
            src={Starlink}
            
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-full md:w-full lg:w-full"
            />

      </section>

      {/* Specs Section */}
      <section className="py-20 bg-gray-800/50">
        <Container>
          <SectionTitle>Especificaciones técnicas</SectionTitle>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                {
                  icon: <Satellite className="w-6 h-6" />,
                  title: "Tecnología Satelital de Élite",
                  description: "Los más recientes satélites V4 con enlaces láser entre satélites"
                },
                {
                  icon: <Clock className="w-6 h-6" />,
                  title: "Rápida instalación",
                  description: "Conecta y usa"
                }
              ].map((spec, index) => (
                <SpecItem key={index} {...spec} index={index} />
              ))}
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: <CloudLightning className="w-6 h-6" />,
                  title: "Resistente al clima",
                  description: "Diseñado para soportar los climas más duros"
                },
                {
                  icon: <Wifi className="w-6 h-6" />,
                  title: "Doble ancho de banda",
                  description: "2.4 GHz y 5 GHz para una cobertura óptima"
                }
              ].map((spec, index) => (
                <SpecItem key={index} {...spec} index={index + 2} />
              ))}
            </div>
          </div>
        </Container>
      </section>


      {/* Pricing Section */}
      <section className="py-20">
        <Container>
          <SectionTitle>Nuestros precios</SectionTitle>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {[
              {
                title: "Estándar",
                price: "380.000",
                features: [
                  "Hasta 150 Mbps",
                  "Soporte técnico estándar",
                  "Kit básico de instalación",
                  "1 año de garantía",
                  "Incluye entrega"                    
                ]
              },
              {
                title: "Premium",
                price: "430.000",
                featured: true,
                features: [
                  "Hasta 200 Mbps prioritarios",
                  "24/7 soporte técnico prioritario",
                  "Instalación profesional",
                  "2 años de garantía",
                  "Incluye entrga"
                ]
              },

            ].map((pricing, index) => (
              <PricingCard key={index} {...pricing} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 py-20">
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">¿Listo para experimentar el futuro del internet?</h2>
            <p className="text-lg mb-8 text-blue-200">Únete a millones de usuarios a nivel mundial</p>
					  <a href="https://wa.me/+56994370903">
              <button className="bg-blue-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-300 transition-all duration-300 flex items-center gap-2 mx-auto hover-lift">
                Pide el tuyo ahora <ArrowRight className="w-5 h-5" />
              </button>
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default App;