import { Clock, BookOpen, Users } from 'lucide-react';

interface PostCardProps {
  post: any;
  onPostSelect: (post: any) => void;
}

export const PostCard = ({ post, onPostSelect }: PostCardProps) => {
  return (
    <div 
      className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:translate-y-[-5px] hover:border-slate-700 cursor-pointer group"
      onClick={() => onPostSelect(post)}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-900 to-transparent opacity-40"></div>
        <div className="absolute top-3 right-3 bg-blue-500/90 text-white text-xs uppercase tracking-wider py-1 px-2 rounded-full">
          {post.category}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center text-xs text-slate-400 mb-2">
          <span className="flex items-center">
            <Clock size={12} className="mr-1" />
            {post.readTime} min read
          </span>
          {post.popularity && (
            <>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <BookOpen size={12} className="mr-1" />
                {post.popularity}+ reads
              </span>
            </>
          )}
          {post.comments && (
            <>
              <span className="mx-2">•</span>
              <span className="flex items-center">
                <Users size={12} className="mr-1" />
                {post.comments} comments
              </span>
            </>
          )}
        </div>
        <h3 className="text-xl font-serif font-bold text-white mb-2 line-clamp-2 group-hover:text-blue-300 transition-colors">
          {post.title}
        </h3>
        <p className="text-slate-300 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center">
          <img 
            src={post.author.avatar} 
            alt={post.author.name} 
            className="h-7 w-7 rounded-full mr-3"
          />
          <div>
            <p className="text-xs font-medium text-white">{post.author.name}</p>
            <p className="text-xs text-slate-400">{post.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};