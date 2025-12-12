import { Link, Outlet } from 'react-router-dom';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { blogPosts } from '@/data/blog-posts';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BlogLayout = () => {
    return (
        <div className="relative min-h-screen bg-background overflow-x-hidden">
            <Navigation />

            <main className="pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-6xl">
                    {/* Back Button */}
                    <div className="mb-8">
                        <Button variant="ghost" asChild className="pl-0 hover:bg-transparent">
                            <Link to="/blog" className="text-muted-foreground hover:text-primary">
                                <ArrowLeft size={20} className="mr-2" />
                                Back to Blog
                            </Link>
                        </Button>
                    </div>

                    <div className="grid lg:grid-cols-[1fr_300px] gap-12">
                        {/* Main Content Area */}
                        <article className="min-w-0">
                            <Outlet />
                        </article>

                        {/* Sidebar */}
                        <aside className="space-y-8">
                            <div className="glass-card p-6 rounded-xl sticky top-32">
                                <h3 className="font-heading text-lg font-bold mb-4">Recent Posts</h3>
                                <div className="space-y-4">
                                    {blogPosts.map(post => (
                                        <Link
                                            key={post.slug}
                                            to={`/blog/${post.slug}`}
                                            className="block group"
                                        >
                                            <h4 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                                                {post.title}
                                            </h4>
                                            <span className="text-xs text-muted-foreground">{post.date}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="glass-card p-6 rounded-xl">
                                <h3 className="font-heading text-lg font-bold mb-4">Categories</h3>
                                <div className="flex flex-wrap gap-2">
                                    {Array.from(new Set(blogPosts.flatMap(p => p.tags))).map(tag => (
                                        <Link
                                            key={tag}
                                            to={`/blog/category/${encodeURIComponent(tag)}`}
                                            className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                                        >
                                            {tag}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default BlogLayout;
