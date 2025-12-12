import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Meta from '@/components/seo/Meta';
import { Calendar } from 'lucide-react';

const Building3DPortfolio = () => {
    return (
        <>
            <Meta
                title="Building a 3D Portfolio with React Three Fiber"
                description="Learn how to create immersive 3D web experiences using R3F and Three.js."
                keywords={['React Three Fiber', 'Three.js', '3D Web', 'Portfolio']}
                canonical="https://smitbhalodiya.vercel.app/blog/building-3d-portfolio"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Building a 3D Portfolio with React Three Fiber",
                        "image": "https://smitbhalodiya.vercel.app/og-image.png",
                        "datePublished": "2025-12-10",
                        "author": {
                            "@type": "Person",
                            "name": "Smit Bhalodiya",
                            "url": "https://smitbhalodiya.vercel.app/"
                        },
                        "publisher": {
                            "@type": "Person",
                            "name": "Smit Bhalodiya",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://smitbhalodiya.vercel.app/favicon.ico"
                            }
                        },
                        "description": "Learn how to create immersive 3D web experiences using R3F and Three.js."
                    })}
                </script>
            </Helmet>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <header className="mb-8">
                    <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4 text-gradient leading-tight">
                        Building a 3D Portfolio with React Three Fiber
                    </h1>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={16} className="mr-2" />
                        December 10, 2025
                    </div>
                </header>

                <div className="glass-card p-8 md:p-12 rounded-2xl prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:underline">
                    <p>
                        Three.js has revolutionized how we create 3D experiences on the web. Combined with React Three Fiber (R3F), it becomes even more powerful and declarative.
                    </p>

                    <h2>Why R3F?</h2>
                    <p>
                        React Three Fiber is a React renderer for Three.js. It allows you to build your scene using reusable components, manage state with hooks, and tap into the vast ecosystem of React libraries.
                    </p>

                    <h2>Getting Started</h2>
                    <p>
                        To start, you just need a Canvas component:
                    </p>

                    <div className="not-prose bg-muted/50 p-4 rounded-lg my-4 overflow-x-auto">
                        <code className="text-sm font-mono text-foreground">
                            {`import { Canvas } from '@react-three/fiber'

export default function App() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />
    </Canvas>
  )
}`}
                        </code>
                    </div>

                    <p>
                        This simple code sets up a complete 3D scene! From here, you can add OrbitControls, environment maps, and load complex GLTF models.
                    </p>
                </div>
            </motion.div>
        </>
    );
};

export default Building3DPortfolio;
