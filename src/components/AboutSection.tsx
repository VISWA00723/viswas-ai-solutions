import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Target, Lightbulb, Rocket, Users } from 'lucide-react';

const aboutStats = [
  { label: 'Years Experience', value: '2+', icon: Target },
  { label: 'Projects Completed', value: '10+', icon: Rocket },
  { label: 'Technologies', value: '15+', icon: Lightbulb },
  { label: 'Collaborations', value: '5+', icon: Users }
];

const highlights = [
  'Expertise in AI/ML development and deployment',
  'Strong foundation in Python, Java, and C++',
  'Experience with cutting-edge GenAI tools',
  'Real-world project implementation',
  'Database management and cloud deployment',
  'Continuous learning and skill development'
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              About Viswa V R - AI/ML Developer
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate AI/ML developer dedicated to creating innovative solutions
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Professional AI/ML Developer Summary</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I am an AI/ML Developer with expertise in machine learning, deep learning, and data-driven solutions. 
                  Currently pursuing my Master's in Computer Applications while working as a Graduate Engineering Trainee 
                  at Rangsons Aerospace Private Limited in Bangalore.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My passion lies in developing and deploying AI-powered applications, automation systems, and data pipelines 
                  that solve real-world challenges. I thrive on building scalable, efficient solutions using cutting-edge 
                  technologies and frameworks.
                </p>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-primary">Key Highlights</h4>
                <div className="grid grid-cols-1 gap-3">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-muted-foreground">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Current Focus */}
              <div className="p-6 bg-gradient-card rounded-lg border border-border/50">
                <h4 className="font-semibold mb-3 text-primary">Current Focus</h4>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    {['RFP Processing Systems', 'Image Processing', 'Resume Analytics', 'Deep Learning Models'].map((focus) => (
                      <Badge
                        key={focus}
                        variant="secondary"
                        className="text-xs bg-primary/20 text-primary border border-primary/30"
                      >
                        {focus}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content - Stats Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-6">
                {aboutStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 group">
                      <CardContent className="p-6 text-center">
                        <div className="mb-4">
                          <div className="p-3 rounded-lg bg-muted/50 text-primary inline-flex group-hover:scale-110 transition-transform duration-300">
                            <stat.icon className="w-6 h-6" />
                          </div>
                        </div>
                        <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                        <div className="text-sm text-muted-foreground">{stat.label}</div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Card className="bg-gradient-accent border-border/50 hover:shadow-accent transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-semibold mb-3 text-accent-foreground">Vision & Goals</h4>
                    <p className="text-accent-foreground/80 text-sm leading-relaxed">
                      To leverage artificial intelligence and machine learning to create innovative solutions 
                      that make a positive impact on society, while continuously expanding my expertise in 
                      emerging technologies and fostering collaborative relationships in the tech community.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Fun Fact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="text-center p-6 bg-muted/20 rounded-lg border border-border/30"
              >
                <div className="text-4xl mb-2">🚀</div>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-primary">Fun Fact:</span> I improved face recognition 
                  algorithm efficiency by 20% and achieved 85% accuracy in crop yield prediction!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}