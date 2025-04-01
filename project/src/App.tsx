import React, { useCallback } from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import type { Engine } from "tsparticles-engine";
import { motion, useScroll, useSpring } from "framer-motion";
import lagarlabsLogo from './assets/lagarlabs-logo.png';
import rdigitalLogo from './assets/rdigital-logo.png';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/34670581236', '_blank');
  };

  const handleCall = () => {
    window.location.href = 'tel:+34670581236';
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, margin: "-20%" },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    viewport: { once: false, margin: "-20%" }
  };

  const staggerItem = {
    initial: { opacity: 0, x: -20 },
    whileInView: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <div className="relative">
      <motion.div className="progress-bar" style={{ scaleX }} />
      
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#1a1a2e",
            },
          },
          particles: {
            color: {
              value: ["#9333ea", "#4f46e5", "#6366f1", "#8b5cf6", "#a855f7"],
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "out",
              },
              random: true,
              speed: 0.5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 100,
            },
            opacity: {
              value: 0.7,
              random: true,
              anim: {
                enable: true,
                speed: 0.5,
                opacity_min: 0.1,
                sync: false,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false,
              },
            },
            links: {
              enable: true,
              distance: 150,
              color: "#a855f7",
              opacity: 0.2,
              width: 1,
            },
            blur: {
              enable: true,
              strength: 5,
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },
            },
            modes: {
              grab: {
                distance: 200,
                links: {
                  opacity: 0.5,
                },
              },
            },
          },
        }}
      />

      <section className="section">
        <motion.div 
          className="section-content text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Explorando el Futuro
          </h1>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Innovación y tecnología al servicio de tu entidad
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a 
              href="#challenge"
              className="glass px-8 py-3 rounded-full inline-flex items-center gap-2 card-hover"
            >
              Descubre más
            </a>
          </motion.div>
        </motion.div>
      </section>

      <section id="challenge" className="section">
        <motion.div 
          className="section-content glass p-8 md:p-12"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8">El Desafío Digital</h2>
          <p className="text-lg mb-6">
            Vivimos una revolución tecnológica liderada por la Inteligencia Artificial,
            pero gran parte de la ciudadanía aún no sabe qué es, cómo se usa ni cómo
            protegerse de sus riesgos.
          </p>
          
          <p className="text-lg font-semibold mb-4">Esto genera:</p>
          
          <ul className="space-y-4">
            <motion.li className="bullet-point" {...fadeInUp}>
              <div className="bullet"></div>
              Desconfianza en la tecnología
            </motion.li>
            <motion.li className="bullet-point" {...fadeInUp}>
              <div className="bullet"></div>
              Vulnerabilidad ante fraudes digitales
            </motion.li>
            <motion.li className="bullet-point" {...fadeInUp}>
              <div className="bullet"></div>
              Una brecha digital cada vez más profunda
            </motion.li>
            <motion.li className="bullet-point" {...fadeInUp}>
              <div className="bullet"></div>
              Ciudadanía menos competitiva
            </motion.li>
          </ul>
        </motion.div>
      </section>

      <section id="solution" className="section">
        <motion.div 
          className="section-content glass p-8 md:p-12"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8">Nuestra Solución</h2>
          <p className="text-lg mb-8">
            Una formación adaptada a distintos niveles, con enfoque práctico y motivador.
          </p>

          <div className="space-y-12">
            <motion.div {...fadeInUp}>
              <h3 className="text-2xl font-semibold mb-4">Modalidad 1: Para personas sin conocimientos técnicos</h3>
              <ul className="space-y-4">
                <motion.li className="bullet-point" {...fadeInUp}>
                  <div className="bullet"></div>
                  Aprenderán desde cero qué es la IA
                </motion.li>
                <motion.li className="bullet-point" {...fadeInUp}>
                  <div className="bullet"></div>
                  Crearán proyectos con IA generativa
                </motion.li>
              </ul>
            </motion.div>

            <motion.div {...fadeInUp}>
              <h3 className="text-2xl font-semibold mb-4">Modalidad 2: Para personas con conocimientos básicos</h3>
              <ul className="space-y-4">
                <motion.li className="bullet-point" {...fadeInUp}>
                  <div className="bullet"></div>
                  Formación avanzada en desarrollo e IA
                </motion.li>
                <motion.li className="bullet-point" {...fadeInUp}>
                  <div className="bullet"></div>
                  Desarrollo de proyectos reales
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section id="methodology" className="section">
        <motion.div 
          className="section-content glass p-8 md:p-12"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8">Metodología</h2>
          <ul className="space-y-4">
            <motion.li className="bullet-point" {...fadeInUp}>
              <div className="bullet"></div>
              Clases dinámicas con retos reales
            </motion.li>
            <motion.li className="bullet-point" {...fadeInUp}>
              <div className="bullet"></div>
              Evaluación continua personalizada
            </motion.li>
            <motion.li className="bullet-point" {...fadeInUp}>
              <div className="bullet"></div>
              Proyecto final demostrativo
            </motion.li>
            <motion.li className="bullet-point" {...fadeInUp}>
              <div className="bullet"></div>
              Evento final con premios
            </motion.li>
            <motion.li className="bullet-point" {...fadeInUp}>
              <div className="bullet"></div>
              Visibilidad institucional
            </motion.li>
          </ul>
        </motion.div>
      </section>

      <section id="benefits" className="section">
        <motion.div 
          className="section-content glass p-8 md:p-12"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8">Beneficios para el Ayuntamiento</h2>
          <ul className="space-y-4">
            <motion.li className="bullet-point" {...fadeInUp}>
              <div className="bullet"></div>
              Ciudadanía más formada y moderna
            </motion.li>
            <motion.li className="bullet-point" {...fadeInUp}>
              <div className="bullet"></div>
              Impulso al emprendimiento local
            </motion.li>
            <motion.li className="bullet-point" {...fadeInUp}>
              <div className="bullet"></div>
              Referente en transformación digital
            </motion.li>
            <motion.li className="bullet-point" {...fadeInUp}>
              <div className="bullet"></div>
              Reducción de la brecha digital
            </motion.li>
            <motion.li className="bullet-point" {...fadeInUp}>
              <div className="bullet"></div>
              Visibilidad como motor de cambio
            </motion.li>
          </ul>
        </motion.div>
      </section>

      <section id="requirements" className="section">
        <motion.div 
          className="section-content glass p-8 md:p-12"
          {...fadeInUp}
        >
          <h2 className="text-3xl font-bold mb-8">¿Qué Necesitamos?</h2>
          <p className="text-lg mb-6">
            Nos encargamos de todo - contenido, profesorado, organización y resultados.
          </p>
          <ul className="space-y-4">
            <motion.li className="bullet-point" {...fadeInUp}>
              <div className="bullet"></div>
              Financiación para la formación
            </motion.li>
            <motion.li className="bullet-point" {...fadeInUp}>
              <div className="bullet"></div>
              Espacios municipales
            </motion.li>
            <motion.li className="bullet-point" {...fadeInUp}>
              <div className="bullet"></div>
              Apoyo en difusión institucional
            </motion.li>
            <motion.li className="bullet-point" {...fadeInUp}>
              <div className="bullet"></div>
              Reconocimiento a finalistas
            </motion.li>
          </ul>
        </motion.div>
      </section>

      <section id="contact" className="section">
        <motion.div 
          className="section-content text-center"
          {...fadeInUp}
        >
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            ¿Hablamos?
          </h2>
          <p className="text-2xl font-medium mb-3">Josué Barrios - Lagarlabs</p>
          <a 
            href="mailto:lagarlabs@gmail.com" 
            className="text-purple-400 hover:text-purple-300 transition-colors text-xl block mb-12 hover:scale-105 transform duration-300"
          >
            lagarlabs@gmail.com
          </a>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <motion.button
              onClick={handleCall}
              className="glass w-full sm:w-auto px-6 sm:px-8 py-4 rounded-full flex items-center justify-center gap-3 card-hover group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 sm:w-6 h-5 sm:h-6 group-hover:text-purple-400 transition-colors" />
              <span className="text-base sm:text-lg">Llamar</span>
            </motion.button>
            <motion.button
              onClick={handleWhatsApp}
              className="glass w-full sm:w-auto px-6 sm:px-8 py-4 rounded-full flex items-center justify-center gap-3 card-hover group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="w-5 sm:w-6 h-5 sm:h-6 group-hover:text-purple-400 transition-colors" />
              <span className="text-base sm:text-lg">WhatsApp</span>
            </motion.button>
          </div>
        </motion.div>
      </section>

      <footer className="w-full py-6 px-4">
        <motion.div 
          className="glass max-w-4xl mx-auto p-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <motion.div 
              className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src={lagarlabsLogo}
                alt="Lagarlabs"
                className="h-8 w-auto"
              />
              <span className="font-medium">Lagarlabs</span>
            </motion.div>
            <div className="hidden md:block w-px h-8 bg-white/20"></div>
            <motion.div 
              className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img
                src={rdigitalLogo}
                alt="RDigital"
                className="h-8 w-auto"
              />
              <span className="font-medium">RDigital</span>
            </motion.div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;