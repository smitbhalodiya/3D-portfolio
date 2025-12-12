import Scene from '@/components/three/Scene';
import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Projects from '@/components/sections/Projects';
import Experience from '@/components/sections/Experience';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

import Meta from '@/components/seo/Meta';

const Index = () => {
  return (
    <>
      <Meta
        title="Smit Bhalodiya - Front-End Developer"
        description="3D Portfolio of Smit Bhalodiya - Creative Developer"
        keywords={['3D Portfolio', 'React', 'Three.js', 'Web Developer']}
        canonical="https://smitbhalodiya.vercel.app/"
      />
      <div className="relative min-h-screen bg-background overflow-x-hidden">
        {/* 3D Background Scene */}
        <Scene />

        {/* Main Content with higher z-index */}
        <div className="relative" style={{ zIndex: 10 }}>
          {/* Navigation */}
          <Navigation />

          {/* Sections */}
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Index;
