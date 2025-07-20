import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Scene3D } from './Scene3D';
import { ParticleSystem } from './ParticleSystem';
import { Mail, Phone, MapPin, Github, Linkedin, Download } from 'lucide-react';
import { useRef } from 'react';

export function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.section 
      ref={ref}
      id="home" 
      className="min-h-screen relative overflow-hidden bg-background morphing-bg"
      style={{ y, opacity }}
    >
      {/* Particle System */}
      <ParticleSystem />
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-8 md:py-0">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-6 md:space-y-8 text-center lg:text-left"
          >
            <div className="space-y-4">
              
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                <span className="bg-gradient-primary bg-clip-text text-transparent glow-text animate-text-glow">
                  Viswa V R
                </span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground"
              >
                <motion.span
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="bg-gradient-accent bg-clip-text text-transparent"
                  style={{ backgroundSize: '200% 200%' }}
                >
                  AI/ML Developer
                </motion.span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex items-center space-x-2 text-muted-foreground"
              >
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                >
                  <MapPin className="w-4 h-4" />
                </motion.div>
                <span>Bengaluru, India</span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              AI/ML Developer with expertise in machine learning, deep learning, and data-driven solutions. 
              Passionate about solving real-world challenges with AI and building scalable, efficient solutions.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-2 sm:gap-4 text-sm text-muted-foreground"
            >
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>viswavr54@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+91 6380985188</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
            >
              <Button
                onClick={scrollToProjects}
                className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all duration-300 magnetic-hover animate-pulse-glow"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground magnetic-hover hover:shadow-accent transition-all duration-300"
              >
                Get In Touch
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-muted text-muted-foreground hover:bg-muted hover:text-foreground magnetic-hover transition-all duration-300"
              >
                <a href="/DOC-20250524-WA0000_.pdf" download>
                  <Download className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              className="flex justify-center lg:justify-start space-x-4"
            >
              <a href="https://github.com/VISWA00723" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary magnetic-hover transition-all duration-300 hover:shadow-glow">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/viswa-v-r-41871324a/" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary magnetic-hover transition-all duration-300 hover:shadow-glow">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] order-first lg:order-last"
          >
            <Scene3D className="w-full h-full" />
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center relative overflow-hidden"
        >
          <motion.div
            animate={{ 
              y: [-10, 20, -10],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gradient-primary rounded-full mt-2"
          ></motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}