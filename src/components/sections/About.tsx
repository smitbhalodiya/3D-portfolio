import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['Laravel', 'WordPress', 'React', 'Node.js'],
  },
  {
    title: 'UI/UX',
    skills: ['Bootstrap', 'TailwindCSS', 'ShadCN', 'FlyonUI', 'Motion.dev'],
  },
  {
    title: 'Tools',
    skills: ['Gulp', 'Vercel', 'Shell Scripting', 'Nunjucks'],
  },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </motion.div>

        <div className="flex flex-col gap-16">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            {/* Profile Image */}
            <motion.div
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden glass-card p-2 group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src="/my-profile.png"
                  alt="Smit Bhalodiya"
                  className="w-full h-auto rounded-xl object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              className="lg:col-span-7"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="glass-card p-8 rounded-2xl h-full">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Hi! I am a <span className="text-primary font-semibold">Front-End Developer</span> with a passion for the latest solutions and interactive design. With over 4 years of professional experience in web development, I specialize in creating beautiful, responsive, and performant web applications.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I have strong experience with cross-browser compatibility issues and optimization for web. I'm an expert in responsive web design and can quickly analyze and fix UI bugs.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  My tech stack includes <span className="text-foreground">JavaScript, TypeScript, React, Laravel,</span> and more. I'm always eager to learn new technologies and apply them to create innovative solutions.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Skills */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors"
              >
                <h3 className="text-lg font-semibold text-primary mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-medium bg-background/50 text-foreground rounded border border-white/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
