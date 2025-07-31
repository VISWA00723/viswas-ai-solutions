import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Download, ExternalLink } from 'lucide-react';

const navigationSections = [
  {
    title: 'Navigation',
    links: [
      { label: 'Home', href: '#home' },
      { label: 'About Viswa V R', href: '#about' },
      { label: 'AI/ML Skills', href: '#skills' },
      { label: 'Experience', href: '#experience' },
      { label: 'Projects', href: '#projects' },
      { label: 'Education', href: '#education' },
      { label: 'Contact', href: '#contact' }
    ]
  },
  {
    title: 'Skills & Expertise',
    links: [
      { label: 'AI/ML Development', href: '#skills' },
      { label: 'Machine Learning', href: '#skills' },
      { label: 'Deep Learning', href: '#skills' },
      { label: 'Python Development', href: '#skills' },
      { label: 'Data Science', href: '#skills' },
      { label: 'Full Stack Development', href: '#skills' }
    ]
  },
  {
    title: 'Connect',
    links: [
      { label: 'LinkedIn Profile', href: 'https://www.linkedin.com/in/viswa-v-r-41871324a/', external: true },
      { label: 'GitHub Portfolio', href: 'https://github.com/VISWA00723', external: true },
      { label: 'Download Resume', href: '/DOC-20250524-WA0000_.pdf', external: true },
      { label: 'Email Me', href: 'mailto:viswavr54@gmail.com', external: true },
      { label: 'Call Me', href: 'tel:+916380985188', external: true }
    ]
  }
];

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <h3 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
              Viswa V R
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              AI/ML Developer & Full Stack Engineer from Bengaluru. Expert in machine learning, 
              deep learning, and innovative AI solutions.
            </p>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
              <MapPin className="w-4 h-4" />
              <span>Bengaluru, India</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
              <Mail className="w-4 h-4" />
              <span>viswavr54@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="w-4 h-4" />
              <span>+91 6380985188</span>
            </div>
          </motion.div>

          {/* Navigation Sections */}
          {navigationSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="space-y-4"
            >
              <h4 className="font-semibold text-foreground">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target={link.href.startsWith('http') ? '_blank' : undefined}
                        rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm flex items-center gap-1"
                      >
                        {link.label}
                        {link.href.startsWith('http') && <ExternalLink className="w-3 h-3" />}
                      </a>
                    ) : (
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm text-left"
                      >
                        {link.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-muted-foreground text-sm text-center md:text-left">
            <p>© 2025 Viswa V R (ViswaVR). All rights reserved.</p>
            <p className="mt-1">
              AI/ML Developer Portfolio | Machine Learning Expert | Full Stack Engineer | Bengaluru
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://github.com/VISWA00723" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/viswa-v-r-41871324a/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="/DOC-20250524-WA0000_.pdf" 
              download
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
              aria-label="Download Resume"
            >
              <Download className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}