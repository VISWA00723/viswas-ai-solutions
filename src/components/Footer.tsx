import { motion } from 'framer-motion';

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
          <div className="text-muted-foreground text-sm flex flex-col items-center gap-2">
            <span>
              Built with{' '}
              <a
                href="https://viswa.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                viswa.dev
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/viswa-v-r-41871324a/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                LinkedIn
              </a>
              {' | '}
              <a
                href="https://github.com/viswavr"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-primary"
              >
                GitHub
              </a>
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}