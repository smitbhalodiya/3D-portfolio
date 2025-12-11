import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A fully responsive e-commerce website with modern UI/UX, shopping cart functionality, and seamless checkout experience.',
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'REST API'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
    color: '#00d9ff',
  },
  {
    title: 'Portfolio Dashboard',
    description: 'An interactive dashboard with data visualization, real-time updates, and comprehensive analytics features.',
    technologies: ['HTML5', 'CSS3', 'jQuery', 'Chart.js'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
    color: '#7c3aed',
  },
  {
    title: 'WordPress Theme',
    description: 'Custom WordPress theme with advanced customization options, Elementor compatibility, and optimized performance.',
    technologies: ['WordPress', 'PHP', 'Sass', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
    color: '#00d9ff',
  },
  {
    title: 'Corporate Website',
    description: 'Modern corporate website with smooth animations, responsive design, and SEO optimization for maximum visibility.',
    technologies: ['Bootstrap', 'JavaScript', 'Sass', 'Photoshop'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    liveUrl: '#',
    githubUrl: '#',
    color: '#7c3aed',
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: '-50px' });

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <div
        className="glass-card overflow-hidden rounded-2xl transition-all duration-500 hover:glow-box"
        style={{
          transform: isHovered ? 'translateY(-10px) rotateX(5deg)' : 'translateY(0) rotateX(0)',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Image */}
        <div className="relative h-56 overflow-hidden">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
          
          {/* Floating 3D icon */}
          <motion.div
            className="absolute top-4 right-4 p-3 glass-card rounded-xl"
            animate={{
              rotateY: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1,
            }}
            transition={{ duration: 0.6 }}
          >
            <Code2 className="text-primary" size={24} />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono bg-muted text-primary rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3">
            <Button asChild variant="glow" size="sm" className="flex-1">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink size={16} className="mr-2" />
                Live Demo
              </a>
            </Button>
            <Button asChild variant="outline" size="sm">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github size={16} />
              </a>
            </Button>
          </div>
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-2xl"
          animate={{
            boxShadow: isHovered
              ? `0 0 60px ${project.color}30, inset 0 0 60px ${project.color}10`
              : '0 0 0 transparent',
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.article>
  );
};

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work. Each project represents unique challenges and creative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
