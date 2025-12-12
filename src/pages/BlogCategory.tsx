import { motion } from 'framer-motion';
import { useParams, Link, Navigate } from 'react-router-dom';
import { blogPosts } from '@/data/blog-posts';
import Meta from '@/components/seo/Meta';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const BlogCategory = () => {
    const { category } = useParams();
    // Decode the category from URL (e.g. handle spaces if any, though slugs are better usually)
    // For simplicity, we assume generic exact match or case insensitive match
    const decodedCategory = decodeURIComponent(category || '');

    const filteredPosts = blogPosts.filter(post =>
        post.tags.some(tag => tag.toLowerCase() === decodedCategory.toLowerCase())
    );

    if (!category) {
        return <Navigate to="/blog" replace />;
    }

    return (
        <>
            <Meta
                title={`${decodedCategory} - Blog`}
                description={`Articles about ${decodedCategory}`}
                keywords={[decodedCategory, 'Blog', 'Tech']}
                canonical={`https://smitbhalodiya.vercel.app/blog/category/${category}`}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div className="mb-8 flex items-center gap-3">
                    <div className="p-3 bg-primary/10 rounded-full text-primary">
                        <Tag size={24} />
                    </div>
                    <h1 className="font-heading text-3xl md:text-4xl font-bold">
                        {decodedCategory}
                    </h1>
                </div>

                {filteredPosts.length === 0 ? (
                    <div className="glass-card p-8 rounded-2xl text-center">
                        <p className="text-muted-foreground">No posts found in this category.</p>
                        <Button variant="link" asChild className="mt-4">
                            <Link to="/blog">View all posts</Link>
                        </Button>
                    </div>
                ) : (
                    <div className="grid gap-8">
                        {filteredPosts.map((post, index) => (
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
                )}
            </motion.div>
        </>
    );
};

// Start: Fix for missing import Button
import { Button } from '@/components/ui/button';

export default BlogCategory;
