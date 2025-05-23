import { Bookmark, Award, TrendingUp } from 'lucide-react';
import { PostCard } from '../blog/PostCard';
import { mockPosts } from '../../utils/data';
import { Button } from '../shared/Button';

interface FeaturedPostsProps {
  onPostSelect: (post: any) => void;
  onPageChange: (page: string) => void;
}

export const FeaturedPosts = ({ onPostSelect, onPageChange }: FeaturedPostsProps) => {
  // Skip the first post (used in hero) and take the next 6
  const posts = mockPosts.slice(1, 7);

  return (
    <section className="bg-gradient-to-b from-slate-950 to-slate-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <div className="flex items-center mb-2">
              <Award className="text-amber-400 mr-2" size={20} />
              <h4 className="text-xs font-medium uppercase tracking-wider text-amber-400">Curated Selection</h4>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-white">Featured Articles</h2>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="mr-2 text-slate-400">
              <TrendingUp size={16} />
            </span>
            <span className="text-sm text-slate-300">
              Sorted by <span className="text-amber-400">popularity</span>
            </span>
          </div>
        </div>

        {/* Decorative divider */}
        <div className="relative h-0.5 w-full mb-12 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map(post => (
            <PostCard key={post.id} post={post} onPostSelect={onPostSelect} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            variant="outline"
            size="lg"
            icon={<Bookmark size={16} />}
            onClick={() => onPageChange('blog')}
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};