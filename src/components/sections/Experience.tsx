import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Front-End Developer',
    company: 'CleVision Technologies Private Limited',
    location: 'Ahmedabad, Gujarat, India',
    period: 'April 2023 - Present',
    duration: '2+ years',
    description: 'Leading front-end development projects, implementing responsive designs, and optimizing web performance. Working with modern frameworks and ensuring cross-browser compatibility.',
  },
  {
    type: 'work',
    title: 'Frontend Developer',
    company: 'Drop Techno Lab',
    location: 'Ahmedabad, Gujarat, India',
    period: 'January 2021 - April 2023',
    duration: '2 years 4 months',
    description: 'Developed and maintained multiple client websites, created custom WordPress themes, and implemented responsive UI components using modern CSS frameworks.',
  },
  {
    type: 'education',
    title: "Bachelor's Degree",
    company: 'Saurashtra University, Rajkot',
    location: 'Gujarat, India',
    period: '2018 - 2021',
    duration: '3 years',
    description: 'Bachelor\'s degree in Information Technology. Focused on web technologies, programming fundamentals, and software development principles.',
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="experience" className="py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative mb-12 md:mb-16 ${index % 2 === 0 ? 'md:pr-[50%] md:text-right' : 'md:pl-[50%] md:ml-auto'
                }`}
            >
              {/* Timeline dot */}
              <motion.div
                className={`absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-background ${exp.type === 'work' ? 'bg-primary' : 'bg-secondary'
                  }`}
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
              />

              {/* Content card */}
              <div
                className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 rounded-2xl hover:glow-box transition-shadow duration-300"
                >
                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 ${exp.type === 'work'
                      ? 'bg-primary/10 text-primary'
                      : 'bg-secondary/10 text-secondary'
                      }`}
                  >
                    {exp.type === 'work' ? (
                      <Briefcase size={24} />
                    ) : (
                      <GraduationCap size={24} />
                    )}
                  </div>

                  {/* Title & Company */}
                  <h3 className="font-heading text-xl font-bold text-foreground mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium mb-2">{exp.company}</p>
                  <p className="text-muted-foreground text-sm mb-3">{exp.location}</p>

                  {/* Period */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                    <span className="text-primary">• {exp.duration}</span>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed text-left">
                    {exp.description}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
