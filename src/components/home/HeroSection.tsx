import { ArrowRight } from 'lucide-react';
import { Button } from '../shared/Button';
import { mockPosts } from '../../utils/data';

interface HeroSectionProps {
  onPostSelect: (post: any) => void;
}

export const HeroSection = ({ onPostSelect }: HeroSectionProps) => {
  const featuredPost = mockPosts[0];

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/998641/pexels-photo-998641.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/80 to-slate-950"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-4">
              Discover <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Wisdom</span>
            </h1>
            <p className="text-slate-300 text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              Elegant insights for the discerning mind. Explore our curated collection of thought-provoking articles on knowledge, culture, and philosophy.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Button 
                variant="primary" 
                size="lg" 
                icon={<ArrowRight size={16} />} 
                iconPosition="right"
                onClick={() => onPostSelect(featuredPost)}
              >
                Read Featured Article
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
              >
                Explore Categories
              </Button>
            </div>
          </div>

          <div className="relative border border-slate-800 bg-slate-900/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-xl transition-transform hover:scale-[1.01] group cursor-pointer"
            onClick={() => onPostSelect(featuredPost)}>
            <div className="h-56 overflow-hidden">
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 bg-blue-600 text-white text-xs uppercase tracking-wider py-1 px-2 rounded-full">
                Featured
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center text-xs text-slate-400 mb-2">
                <span className="text-blue-400">{featuredPost.category}</span>
                <span className="mx-2">•</span>
                <span>{featuredPost.date}</span>
                <span className="mx-2">•</span>
                <span>{featuredPost.readTime} min read</span>
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-2">{featuredPost.title}</h3>
              <p className="text-slate-300 mb-4 line-clamp-2">{featuredPost.excerpt}</p>
              <div className="flex items-center">
                <img 
                  src={featuredPost.author.avatar} 
                  alt={featuredPost.author.name} 
                  className="h-8 w-8 rounded-full mr-3"
                />
                <div>
                  <p className="text-sm font-medium text-white">{featuredPost.author.name}</p>
                  <p className="text-xs text-slate-400">{featuredPost.author.title}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-slate-950 to-transparent"></div>
    </div>
  );
};