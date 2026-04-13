import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogData';
import { ArrowLeft, Clock, Calendar, User, Tag } from 'lucide-react';
import './PageStyles.css';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="container py-24 text-center">
        <h2>Post not found</h2>
        <Link to="/blogs" className="btn btn-primary mt-4">Back to Blogs</Link>
      </div>
    );
  }

  // Schema.org Article Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "author": {
      "@type": "Organization",
      "name": "PowerPlatform Geeks"
    },
    "datePublished": post.date,
    "genre": post.category
  };

  return (
    <div className="page bg-white">
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta property="og:title" content={post.metaTitle} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <div className="container max-w-3xl mx-auto py-12 px-4">
        <Link to="/blogs" className="inline-flex items-center text-blue-primary hover:text-blue-dark mb-8 transition-colors">
          <ArrowLeft size={16} className="mr-2" /> Back to All Blogs
        </Link>

        <header className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="bg-blue-50 text-blue-primary px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
              {post.category}
            </span>
            <div className="flex items-center text-secondary text-sm">
              <Calendar size={14} className="mr-1" /> {post.date}
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">{post.title}</h1>
        </header>

        <article className="prose prose-slate max-w-none">
          <p className="text-xl text-slate-700 leading-relaxed mb-8 italic">
            {post.content.introduction}
          </p>

          {post.content.headings.map((heading, i) => (
            <div key={i} className="mb-8">
              <h2 className="text-2xl font-bold text-slate-800 mb-4">{heading.title}</h2>
              <p className="text-secondary leading-relaxed mb-4">{heading.text}</p>
            </div>
          ))}

          <section className="bg-slate-50 border-l-4 border-blue-primary p-6 my-10 rounded-r-xl">
            <h3 className="text-lg font-bold text-slate-800 mb-3">Real-World Use Case</h3>
            <p className="text-secondary italic mb-0">{post.content.useCase}</p>
          </section>
        </article>

        <footer className="mt-12 pt-12 border-t border-color">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-blue-primary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">P</div>
              <div>
                <p className="text-sm font-bold text-slate-800 m-0">PowerPlatform Geeks</p>
                <p className="text-xs text-secondary m-0">Expert Insights</p>
              </div>
            </div>
            <Link to="/contact" className="btn btn-primary btn-sm">Get in Touch</Link>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BlogPost;
