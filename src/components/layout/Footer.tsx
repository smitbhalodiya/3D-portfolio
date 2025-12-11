import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Smit Bhalodiya. Built with passion.
          </p>
          <p className="text-muted-foreground text-sm">
            Designed & Developed with{' '}
            <span className="text-primary">React</span> &{' '}
            <span className="text-secondary">Three.js</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
