export interface BlogPost {
    title: string;
    slug: string;
    date: string;
    excerpt: string;
    tags: string[];
}

export const blogPosts: BlogPost[] = [
    {
        title: 'Building a 3D Portfolio with React Three Fiber',
        slug: 'building-3d-portfolio',
        date: 'December 10, 2025',
        excerpt: 'Learn how to create immersive 3D web experiences using R3F and Three.js.',
        tags: ['React', 'Three.js', 'Web Development'],
    },
    {
        title: 'Optimizing React Applications for Performance',
        slug: 'optimizing-react-performance',
        date: 'November 25, 2025',
        excerpt: 'Tips and tricks to make your React apps fly.',
        tags: ['React', 'Performance', 'JavaScript'],
    },
];
