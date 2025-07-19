import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Eye, Users, TrendingUp } from 'lucide-react';

const projects = [
  {
    title: 'Face Recognition Attendance System',
    description: 'Developed a real-time face recognition system for automated attendance tracking. Improved algorithm efficiency, enhancing accuracy by 20%. Integrated with relational databases for seamless record management.',
    achievements: ['20% accuracy improvement', 'Real-time processing', 'Database integration'],
    technologies: ['Python', 'OpenCV', 'Face Recognition', 'SQL', 'Real-time Processing'],
    icon: Eye,
    color: 'text-blue-400'
  },
  {
    title: 'Crop Yield Prediction Using Machine Learning',
    description: 'Built a predictive model using the Random Forest algorithm to forecast crop yields based on location, season, and crop type. Achieved 85% accuracy, aiding in agricultural planning.',
    achievements: ['85% prediction accuracy', 'Agricultural planning support', 'Multi-factor analysis'],
    technologies: ['Python', 'Random Forest', 'Machine Learning', 'Data Analysis', 'Agricultural AI'],
    icon: TrendingUp,
    color: 'text-green-400'
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Academic Projects
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Innovative projects showcasing AI/ML expertise and problem-solving skills
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 group">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-muted/50 ${project.color} group-hover:scale-110 transition-transform duration-300`}>
                      <project.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Achievements */}
                  <div>
                    <h4 className="font-semibold mb-3 text-primary">Key Achievements</h4>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-muted/70 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Visual Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <Users className="w-5 h-5" />
            <span>More projects available on request</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}