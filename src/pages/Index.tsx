import { useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ExperienceSection } from '@/components/ExperienceSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { EducationSection } from '@/components/EducationSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import SEO from '@/components/SEO';

const Index = () => {
  useEffect(() => {
    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO 
        title="Viswa V R - AI/ML Developer & Full Stack Engineer | Top AI Expert Bengaluru"
        description="Viswa V R - Leading AI/ML Developer, Full Stack Engineer, and Data Scientist from Bengaluru. Expert in machine learning, deep learning, React, Node.js, Python, and cutting-edge web technologies. Available for AI consulting and development projects."
        keywords="Viswa V R, Viswa Developer, AI Developer Bengaluru, ML Engineer India, Full Stack Developer, Machine Learning Expert, Deep Learning Specialist, React Developer, Node.js Expert, Python Developer, Data Scientist, AI Consultant, ML Consultant, Bengaluru AI Expert, India ML Developer, Artificial Intelligence Expert, AI Solutions, ML Engineering, Data Science Expert, Software Engineer Bengaluru"
        url="https://viswap.netlify.app"
        type="website"
      />
      <ScrollProgress />
      <Navigation />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
