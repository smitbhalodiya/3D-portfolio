import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const navItems = [
  { name: 'Home', href: '/', type: 'route' },
  { name: 'About', href: '/#about', type: 'hash' },
  { name: 'Projects', href: '/#projects', type: 'hash' },
  { name: 'Experience', href: '/#experience', type: 'hash' },
  { name: 'Blog', href: '/blog', type: 'route' },
  { name: 'Contact', href: '/#contact', type: 'hash' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: { name: string; href: string; type: string }) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (item.type === 'hash') {
      // Navigate to the hash URL. 
      // This updates the location.hash, triggering the useEffect in Index.tsx to scroll.
      navigate(item.href);
    } else {
      // Standard route
      navigate(item.href);
      window.scrollTo(0, 0);
    }
  };

  const isActive = (item: { name: string; href: string; type: string }) => {
    // Home is only active if we are on the home path AND there is no hash
    if (item.href === '/') {
      return location.pathname === '/' && location.hash === '';
    }
    // Hash links are active if the path is home AND the hash matches
    if (item.type === 'hash') {
      return location.pathname === '/' && location.hash === item.href.replace('/', '');
    }
    // Other routes (like /blog)
    return location.pathname.startsWith(item.href);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-card py-3' : 'py-6'
        }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <motion.a
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('/'); window.scrollTo(0, 0); }}
          className="font-heading text-xl font-bold text-gradient"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SB
        </motion.a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className={`text-sm font-medium transition-colors duration-300 relative group ${isActive(item) ? 'text-primary' : 'text-muted-foreground hover:text-primary'
                  }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${isActive(item) ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
              </a>
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-screen w-3/4 glass-card p-8 pt-20 md:hidden"
            >
              <ul className="flex flex-col gap-6">
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className={`text-lg font-medium transition-colors ${isActive(item) ? 'text-primary' : 'text-foreground hover:text-primary'
                        }`}
                    >
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Navigation;
