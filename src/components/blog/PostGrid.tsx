import { useState } from 'react';
import { PostCard } from './PostCard';
import { Button } from '../shared/Button';
import { Filter } from 'lucide-react';

interface PostGridProps {
  posts: any[];
  onPostSelect: (post: any) => void;
}

export const PostGrid = ({ posts, onPostSelect }: PostGridProps) => {
  const [category, setCategory] = useState('all');
  const [visiblePosts, setVisiblePosts] = useState(6);
  
  const categories = ['all', ...Array.from(new Set(posts.map(post => post.category.toLowerCase())))];
  
  const filteredPosts = category === 'all' 
    ? posts 
    : posts.filter(post => post.category.toLowerCase() === category);

  const loadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 3, filteredPosts.length));
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="flex items-center mb-4 md:mb-0">
          <Filter size={18} className="text-amber-400 mr-2" />
          <h3 className="text-white text-sm font-medium">Filter by:</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => {
                setCategory(cat);
                setVisiblePosts(6);
              }}
              className={`px-3 py-1 text-xs rounded-full capitalize transition-colors ${
                category === cat 
                  ? 'bg-amber-500 text-white' 
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {filteredPosts.slice(0, visiblePosts).map(post => (
          <PostCard key={post.id} post={post} onPostSelect={onPostSelect} />
        ))}
      </div>

      {visiblePosts < filteredPosts.length && (
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            onClick={loadMore}
          >
            Load More Articles
          </Button>
        </div>
      )}

      {filteredPosts.length === 0 && (
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-8 text-center mt-8">
          <p className="text-white text-lg mb-2">No articles found in this category</p>
          <p className="text-slate-400">Try selecting a different category from the filter options above.</p>
        </div>
      )}
    </div>
  );
};