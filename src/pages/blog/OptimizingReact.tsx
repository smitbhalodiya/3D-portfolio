import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import Meta from '@/components/seo/Meta';
import { Calendar } from 'lucide-react';

const OptimizingReact = () => {
    return (
        <>
            <Meta
                title="Optimizing React Applications for Performance"
                description="Tips and tricks to make your React apps fly."
                keywords={['React Performance', 'Optimization', 'Web Development']}
                canonical="https://smitbhalodiya.vercel.app/blog/optimizing-react-performance"
            />
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Article",
                        "headline": "Optimizing React Applications for Performance",
                        "image": "https://smitbhalodiya.vercel.app/og-image.png",
                        "datePublished": "2025-11-25",
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
                        "description": "Tips and tricks to make your React apps fly."
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
                        Optimizing React Applications for Performance
                    </h1>
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar size={16} className="mr-2" />
                        November 25, 2025
                    </div>
                </header>

                <div className="glass-card p-8 md:p-12 rounded-2xl prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary hover:prose-a:underline">
                    <p>
                        Performance is key for user retention. When building large scale applications, small renders can add up to cause UI lag. Here are a few ways to speed up your React app.
                    </p>

                    <h3>1. Code Splitting</h3>
                    <p>
                        Use <code>React.lazy</code> and <code>Suspense</code> to load components only when needed. This reduces the initial bundle size.
                    </p>

                    <h3>2. Memoization</h3>
                    <p>
                        Use <code>useMemo</code> and <code>useCallback</code> to prevent unnecessary re-computations and re-renders of child components.
                    </p>

                    <h3>3. Virtualization</h3>
                    <p>
                        If rendering large lists (100+ items), the DOM can get heavy. Use libraries like <code>react-window</code> to only render the items currently in view.
                    </p>
                </div>
            </motion.div>
        </>
    );
};

export default OptimizingReact;
