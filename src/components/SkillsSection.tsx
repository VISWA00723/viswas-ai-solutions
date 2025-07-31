import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Brain, Database, Cloud, Globe, Cpu } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['Python (Proficient)', 'Java', 'C++', 'JavaScript', 'HTML', 'CSS'],
    color: 'text-primary'
  },
  {
    title: 'AI/ML & Data Science',
    icon: Brain,
    skills: ['Deep Learning', 'Predictive Analytics', 'Statistical Modeling', 'Computer Vision', 'NLP'],
    color: 'text-accent'
  },
  {
    title: 'GenAI Tools',
    icon: Cpu,
    skills: ['Transformers', 'LLaMA', 'Mistral', 'DALL·E', 'Stable Diffusion'],
    color: 'text-primary-glow'
  },
  {
    title: 'Libraries & Frameworks',
    icon: Database,
    skills: ['NumPy', 'Pandas', 'Matplotlib', 'OpenCV', 'FAISS', 'PaddleOCR', 'scikit-learn', 'TensorFlow', 'PyTorch'],
    color: 'text-green-400'
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['SQL', 'NoSQL', 'Relational Database Management'],
    color: 'text-orange-400'
  },
  {
    title: 'Cloud & Deployment',
    icon: Cloud,
    skills: ['AWS', 'FastAPI', 'Streamlit'],
    color: 'text-blue-400'
  }
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI/ML & Technical Skills
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proficient in cutting-edge technologies and frameworks for AI/ML development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full bg-gradient-card border-border/50 hover:shadow-glow transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-muted/50 ${category.color} group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-semibold ml-3">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-muted/70 hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Floating Skill Icons */}
        <div className="relative mt-16 h-32 overflow-hidden">
          <motion.div
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 transform -translate-y-1/2 flex space-x-8 text-4xl text-muted-foreground/30"
          >
            {['🐍', '🤖', '⚡', '🧠', '📊', '☁️', '🔬', '🎯'].map((emoji, index) => (
              <span key={index} className="animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                {emoji}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}