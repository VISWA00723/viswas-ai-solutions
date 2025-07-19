import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';

const education = {
  degree: 'Master of Computer Applications (MCA)',
  institution: 'Kalasalingam University',
  cgpa: '8.05',
  period: '2023-2025',
  status: 'In Progress'
};

const certifications = [
  {
    title: 'Python for Machine Learning',
    issuer: 'Rathinam College',
    category: 'Programming & ML'
  },
  {
    title: 'AWS Cloud Computing',
    issuer: 'Karpagam College of Engineering',
    category: 'Cloud Technology'
  },
  {
    title: 'Introduction to Web Development',
    issuer: 'Elisiyam',
    category: 'Web Development'
  },
  {
    title: 'HTML and CSS Certification',
    issuer: 'Elisiyam',
    category: 'Web Development'
  },
  {
    title: 'C, C++ & Data Structures',
    issuer: 'SSI',
    category: 'Programming'
  },
  {
    title: 'Digital Marketing Certification',
    issuer: 'Coursera',
    category: 'Marketing'
  }
];

const categoryColors = {
  'Programming & ML': 'text-blue-400',
  'Cloud Technology': 'text-orange-400',
  'Web Development': 'text-green-400',
  'Programming': 'text-purple-400',
  'Marketing': 'text-pink-400'
};

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              Education & Certifications
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Academic background and professional certifications
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-muted/50 text-primary">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Education</CardTitle>
                    <p className="text-muted-foreground">Academic Qualification</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-primary">{education.degree}</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <BookOpen className="w-4 h-4" />
                      <span className="font-medium">{education.institution}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      <span>{education.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" />
                      <span className="font-semibold">CGPA: {education.cgpa}</span>
                      <Badge variant="secondary" className="ml-2 bg-primary/20 text-primary">
                        {education.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="mt-8 p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold mb-3 text-primary">Academic Highlights</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Strong foundation in Computer Applications
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Specialized in AI/ML technologies
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      Consistent academic performance
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-muted/50 text-accent">
                    <Award className="w-8 h-8" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Certifications</CardTitle>
                    <p className="text-muted-foreground">Professional Credentials</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={cert.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 bg-muted/20 rounded-lg border border-border/30 hover:border-primary/50 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                        </div>
                        <Badge 
                          variant="secondary" 
                          className={`text-xs ${categoryColors[cert.category as keyof typeof categoryColors]} bg-transparent border`}
                        >
                          {cert.category}
                        </Badge>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          {[
            { label: 'Certifications', value: '6+' },
            { label: 'Technologies', value: '15+' },
            { label: 'Projects', value: '10+' },
            { label: 'CGPA', value: '8.05' }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}