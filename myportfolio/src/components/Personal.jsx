import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

// Importar componentes modulares
import NavigationButtons from './NavigationButtons';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import EducationSection from './EducationSection';
import CertificateModal from './CertificateModal';
import { Appear } from './Appear';

export default function Personal({ info }) {
  // Estado para la sección activa y controles de animación
  const [activeSection, setActiveSection] = useState("about");
  const [certificate, setCertificate] = useState(null);

  // Manejador para cambio de sección
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };
  
  // Manejador para certificados
  const openCertificate = (img) => {
    setCertificate(img);
  };
  
  const closeCertificate = () => {
    setCertificate(null);
  };

  // Extraer nombres de secciones del info para los botones de navegación
  const sections = {
    about: info.About.Title,
    skills: info.Skills.title,
    education: info.Education.Title
  };
  
  return (
    <div id={info.id} className="w-full min-h-screen flex flex-col items-center justify-start pt-24 bg-[#110E2F] overflow-x-hidden">
      {/* Título */}
      <Appear>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          {info.language === "English" ? "Hello, I'm " : "Hola, Soy "} 
          <span className="text-[#DA0BFF]">Katherine Contreras</span>
        </h1>
      </Appear>
      
      {/* Botones de Navegación */}
      <NavigationButtons 
        sections={sections} 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      
      {/* Contenedor del Contenido */}
      <div className="w-full flex-1 px-4 pb-12">
        <AnimatePresence mode="wait">
          {/* Sección Sobre mí */}
          {activeSection === "about" && (
            <AboutSection info={info.About} />
          )}
          
          {/* Sección de Habilidades */}
          {activeSection === "skills" && (
            <SkillsSection skillsInfo={info.Skills} />
          )}
          
          {/* Sección de Educación */}
          {activeSection === "education" && (
            <EducationSection 
              educationInfo={info.Education} 
              onOpenCertificate={openCertificate} 
            />
          )}
        </AnimatePresence>
      </div>
      
      {/* Modal de Certificados */}
      <CertificateModal 
        certificate={certificate} 
        onClose={closeCertificate} 
      />
    </div>
  );
}