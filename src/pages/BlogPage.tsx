import { SearchBar } from '../components/shared/SearchBar';
import { PostGrid } from '../components/blog/PostGrid';
import { mockPosts } from '../utils/data';

interface BlogPageProps {
  onPostSelect: (post: any) => void;
}

export const BlogPage = ({ onPostSelect }: BlogPageProps) => {
  return (
    <div className="bg-slate-950 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-white mb-4">Our Articles</h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Explore our collection of thought-provoking articles on knowledge, culture, and philosophy, crafted with elegance and insight.
          </p>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <SearchBar />
        </div>

        <PostGrid posts={mockPosts} onPostSelect={onPostSelect} />
      </div>
    </div>
  );
};