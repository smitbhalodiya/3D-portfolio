import { Helmet } from 'react-helmet-async';

interface MetaProps {
    title: string;
    description: string;
    keywords?: string[];
    canonical?: string;
}

const Meta = ({ title, description, keywords, canonical }: MetaProps) => {
    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{title} | Smit Bhalodiya</title>
            <meta name="title" content={`${title} | Smit Bhalodiya`} />
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords.join(', ')} />}
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph / Facebook */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {canonical && <meta property="og:url" content={canonical} />}
            <meta property="og:site_name" content="Smit Bhalodiya Portfolio" />
            <meta property="og:locale" content="en_US" />
            {/* Default Image for now - can be parameterized later if needed */}
            <meta property="og:image" content="/og-image.png" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            {canonical && <meta property="twitter:url" content={canonical} />}
            <meta property="twitter:title" content={title} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content="/og-image.png" />
            <meta property="twitter:creator" content="@smitbhalodiya" />
        </Helmet>
    );
};

export default Meta;
