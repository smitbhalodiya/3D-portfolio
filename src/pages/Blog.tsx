import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '@/data/blog-posts';
import Meta from '@/components/seo/Meta';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { Calendar, ArrowRight } from 'lucide-react';

const Blog = () => {
    return (
        <>
            <Meta
                title="Blog"
                description="Insights on Web Development, 3D Graphics, and Tech."
                keywords={['Blog', 'Web Development', 'React', 'Three.js']}
                canonical="https://smitbhalodiya.vercel.app/blog"
            />
            <div className="relative min-h-screen bg-background overflow-x-hidden">
                <Navigation />

                <main className="pt-32 pb-20 px-6">
                    <div className="container mx-auto max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-16"
                        >
                            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                                My <span className="text-gradient">Journal</span>
                            </h1>
                            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
                            <p className="text-muted-foreground max-w-2xl mx-auto">
                                Thoughts, tutorials, and insights on web development and 3D graphics.
                            </p>
                        </motion.div>

                        <div className="grid gap-8">
                            {blogPosts.map((post, index) => (
                                <motion.article
                                    key={post.slug}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="glass-card p-8 rounded-2xl group hover:glow-box transition-all duration-300"
                                >
                                    <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between mb-4">
                                        <h2 className="text-2xl font-bold font-heading group-hover:text-primary transition-colors">
                                            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                                        </h2>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Calendar size={16} className="mr-2" />
                                            {post.date}
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground mb-6 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex gap-2">
                                            {post.tags.map(tag => (
                                                <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                        <Link
                                            to={`/blog/${post.slug}`}
                                            className="inline-flex items-center text-primary font-medium hover:underline"
                                        >
                                            Read more <ArrowRight size={16} className="ml-1" />
                                        </Link>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Blog;
