import { motion } from 'framer-motion';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center space-x-2 text-sm text-muted-foreground py-4"
      aria-label="Breadcrumb"
    >
      <button
        onClick={() => scrollToSection('#home')}
        className="flex items-center hover:text-primary transition-colors duration-200"
        aria-label="Go to Home"
      >
        <Home className="w-4 h-4" />
        <span className="sr-only">Home</span>
      </button>
      
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4 text-muted-foreground/50" />
          {item.current ? (
            <span className="font-medium text-foreground" aria-current="page">
              {item.label}
            </span>
          ) : (
            <button
              onClick={() => scrollToSection(item.href)}
              className="hover:text-primary transition-colors duration-200"
            >
              {item.label}
            </button>
          )}
        </div>
      ))}
    </motion.nav>
  );
}