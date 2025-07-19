import { motion } from 'framer-motion';
import { Heart, Code, Coffee } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Logo/Name */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Viswa V R
            </h3>
            <p className="text-muted-foreground mt-2">AI/ML Developer</p>
          </div>

          {/* Tagline */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-primary" />
            <span>Powered by</span>
            <Coffee className="w-4 h-4 text-orange-400" />
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Viswa V R. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Designed and developed with modern web technologies
            </p>
          </div>

          {/* Floating Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <motion.div
              animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full"
            ></motion.div>
            <motion.div
              animate={{ y: [0, 10, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              className="absolute top-1/2 right-1/3 w-1 h-1 bg-accent/40 rounded-full"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}