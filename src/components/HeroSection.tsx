import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Scene3D } from './Scene3D';
import { ParticleSystem } from './ParticleSystem';
import { Mail, Phone, MapPin, Github, Linkedin, Download, Sparkles } from 'lucide-react';
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
      
      {/* Dynamic Background Effects */}
      <div className="absolute inset-0">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 270, 180, 90, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear",
            delay: -5
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          animate={{ 
            x: [0, 100, -100, 0],
            y: [0, -50, 50, 0],
            scale: [1, 1.1, 0.9, 1]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary-glow/15 rounded-full blur-2xl"
        ></motion.div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-primary animate-pulse" />
                <span className="text-primary font-semibold text-lg">Hello, I'm</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
                className="text-5xl md:text-7xl font-bold"
              >
                <span className="bg-gradient-primary bg-clip-text text-transparent glow-text animate-text-glow">
                  Viswa V R
                </span>
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="text-2xl md:text-3xl font-semibold text-muted-foreground"
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
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              AI/ML Developer with expertise in machine learning, deep learning, and data-driven solutions. 
              Passionate about solving real-world challenges with AI and building scalable, efficient solutions.
            </motion.p>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.8 }}
              className="flex flex-wrap gap-4 text-sm text-muted-foreground"
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
              className="flex flex-wrap gap-4"
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
                variant="outline"
                className="border-muted text-muted-foreground hover:bg-muted hover:text-foreground magnetic-hover transition-all duration-300"
              >
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.7, duration: 0.8 }}
              className="flex space-x-4"
            >
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary magnetic-hover transition-all duration-300 hover:shadow-glow">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary magnetic-hover transition-all duration-300 hover:shadow-glow">
                <Linkedin className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
            className="relative h-[600px] lg:h-[700px]"
          >
            <Scene3D className="w-full h-full" />
            
            {/* Enhanced Floating Elements */}
            <div className="absolute inset-0 pointer-events-none">
              <motion.div
                animate={{ 
                  y: [0, -30, 0],
                  rotate: [0, 180, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 right-20 w-16 h-16 bg-gradient-primary rounded-lg shadow-glow"
              ></motion.div>
              <motion.div
                animate={{ 
                  y: [0, 40, 0],
                  x: [0, 20, 0],
                  rotate: [0, -180, -360]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-32 left-10 w-12 h-12 bg-accent rounded-full shadow-accent"
              ></motion.div>
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.5, 1]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute top-1/3 left-20 w-8 h-8 border-2 border-primary rounded-sm"
              ></motion.div>
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute top-1/2 right-10 w-6 h-6 bg-primary-glow rounded-full"
              ></motion.div>
            </div>
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