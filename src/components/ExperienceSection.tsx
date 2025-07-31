import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Building } from 'lucide-react';

const experience = {
  title: 'Graduate Engineering Trainee - AI/ML Development',
  company: 'Rangsons Aerospace Private Limited',
  location: 'Bangalore',
  period: 'Dec 2024 - Present',
  projects: [
    {
      title: 'RFP Processing System',
      description: 'Developing an AI-powered system for automated Request for Proposal (RFP) processing. Implemented text extraction, document summarization, and a Q&A module to answer queries from RFPs. Integrated multi-PDF support, using Streamlit & Flask and automated documentation generation.',
      technologies: ['Python', 'NLP', 'Streamlit', 'Flask', 'PDF Processing', 'AI/ML']
    },
    {
      title: 'RGB to Infrared (IR) Image Conversion',
      description: 'Re-Designed a deep learning model to convert RGB images to infrared, enhancing visibility for aerospace applications. Optimized the model for high accuracy and efficiency in real-time scenarios.',
      technologies: ['Deep Learning', 'Computer Vision', 'PyTorch', 'Image Processing', 'Model Optimization']
    },
    {
      title: 'Resume Filtration & Summarization System',
      description: 'Built an AI-driven tool for automatic resume classification, summarization with voice-over, and autofill. Implemented NLP techniques to extract key insights and match resumes to job roles.',
      technologies: ['NLP', 'Text Classification', 'Voice Synthesis', 'Machine Learning', 'Python']
    }
  ]
};

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Professional AI/ML Experience
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience in AI/ML development and deployment
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-card border-border/50 shadow-lg hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <CardTitle className="text-xl md:text-2xl mb-2">{experience.title}</CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{experience.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experience.projects.map((project, index) => (
                    <motion.div
                      key={project.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="border-l-2 border-primary pl-6 relative"
                    >
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full animate-pulse"></div>
                      <h4 className="text-lg font-semibold mb-2 text-primary">{project.title}</h4>
                      <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-xs bg-muted/70 hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}