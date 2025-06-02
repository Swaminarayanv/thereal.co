import { useEffect } from 'react';
import { ArrowLeft, Bookmark, Share2, Clock, Calendar, Tag } from 'lucide-react';
import { AuthorBio } from '../components/blog/AuthorBio';
import { AIDiscussionHub } from '../components/blog/AIDiscussionHub';
import { Button } from '../components/shared/Button';
import { mockPosts } from '../utils/data';

interface PostPageProps {
  post: any;
}

export const PostPage = ({ post }: PostPageProps) => {
  // If post is null, use the first post as a fallback
  const currentPost = post || mockPosts[0];

  // Scroll to top when post changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPost]);

  // Get related posts (same category, excluding current post)
  const relatedPosts = mockPosts
    .filter(p => p.id !== currentPost.id && p.category === currentPost.category)
    .slice(0, 3);

  return (
    <div className="bg-slate-950 pt-8 pb-16">
      <div className="container mx-auto px-4">
        {/* Header section */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center text-blue-400 mb-4">
            <button className="inline-flex items-center text-sm hover:underline">
              <ArrowLeft size={16} className="mr-1" />
              Back to Articles
            </button>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
            {currentPost.title}
          </h1>

          <div className="flex flex-wrap items-center text-sm text-slate-300 gap-4 mb-8">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2 text-blue-400" />
              {currentPost.date}
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2 text-blue-400" />
              {currentPost.readTime} min read
            </div>
            <div className="flex items-center">
              <Tag size={16} className="mr-2 text-blue-400" />
              {currentPost.category}
            </div>
          </div>

          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <img 
                src={currentPost.author.avatar} 
                alt={currentPost.author.name} 
                className="h-10 w-10 rounded-full mr-3"
              />
              <div>
                <p className="text-sm font-medium text-white">{currentPost.author.name}</p>
                <p className="text-xs text-slate-400">{currentPost.author.title}</p>
              </div>
            </div>

            <div className="flex space-x-2">
              <Button 
                variant="outline" 
                size="sm" 
                icon={<Bookmark size={16} />}
              >
                Save
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                icon={<Share2 size={16} />}
              >
                Share
              </Button>
            </div>
          </div>
        </div>

        {/* Featured image */}
        <div className="max-w-5xl mx-auto mb-12 relative rounded-lg overflow-hidden">
          <img 
            src={currentPost.image} 
            alt={currentPost.title} 
            className="w-full h-auto object-cover rounded-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-950 to-transparent opacity-20"></div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg prose-invert prose-headings:font-serif prose-headings:font-bold prose-p:text-slate-300 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-blue-500 prose-blockquote:bg-slate-900 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-md mb-12">
            <p className="text-xl font-serif text-slate-200 mb-6 leading-relaxed">
              {currentPost.excerpt}
            </p>
            
            <h2>Introduction</h2>
            <p>
              In the vast landscape of modern philosophy, few concepts have been as thoroughly examined and persistently misunderstood as the relationship between knowledge, compassion, and freedom. This trinity of human experience forms the cornerstone of enlightened thought, yet their interconnections remain elusive to many.
            </p>
            
            <blockquote>
              "True freedom is not the absence of constraints, but the presence of wisdom to navigate them with grace."
            </blockquote>
            
            <p>
              When we consider the historical context, the evolution of these concepts reveals a fascinating pattern. From ancient philosophical treatises to contemporary academic discourse, the pursuit of harmonizing these elements has driven much of human intellectual progress.
            </p>
            
            <h2>The Foundation of Knowledge</h2>
            <p>
              Knowledge, in its purest form, transcends mere information. It represents an integrated understanding that encompasses both theoretical comprehension and practical wisdom. This distinction is crucial, as it separates true knowledge from the accumulated data that often masquerades as wisdom in our information-saturated age.
            </p>
            
            <p>
              The acquisition of genuine knowledge requires disciplined study, critical thinking, and an openness to perspectives that challenge our preconceptions. It is a continuous process rather than a destination—an endless refinement of understanding through experience, reflection, and discourse.
            </p>

            <h2>Compassion as a Bridge</h2>
            <p>
              While knowledge illuminates the path, compassion provides the motivation to walk it. Compassion transforms abstract understanding into meaningful action, connecting intellectual insights with the lived realities of human experience. Without this crucial component, knowledge remains sterile and self-contained, unable to effect positive change in the world.
            </p>
            
            <p>
              The practice of compassion extends beyond mere sympathy or emotional response. It encompasses a deep recognition of shared humanity and an active commitment to alleviating suffering wherever it is encountered. In this sense, compassion serves as both ethical compass and motivating force.
            </p>

            <h2>Freedom Through Integration</h2>
            <p>
              The synthesis of knowledge and compassion ultimately leads to a refined concept of freedom—not simply the absence of external constraints, but the presence of internal clarity and purpose. This freedom manifests as the ability to act with intention rather than impulse, to choose consciously rather than react habitually.
            </p>
            
            <p>
              Such freedom represents the highest expression of human potential, wherein individuals navigate life's complexities with both wisdom and heart. It stands in stark contrast to popular notions of freedom as unlimited choice or unrestrained pursuit of desire.
            </p>

            <h2>Conclusion</h2>
            <p>
              As we continue to explore the interconnections between knowledge, compassion, and freedom, we uncover a framework for living that integrates mind and heart, theory and practice, self and other. This holistic approach offers not only philosophical satisfaction but practical guidance for addressing the complex challenges of our time.
            </p>
            
            <p>
              The journey toward this integration is neither simple nor straightforward, but it represents perhaps the most worthwhile endeavor available to us as thinking, feeling beings. In pursuing this trinity of virtues, we move ever closer to fulfilling our potential as individuals and as a society.
            </p>
          </div>

          {/* AI Discussion Hub */}
          <AIDiscussionHub 
            articleTitle={currentPost.title}
            articleContent={currentPost.content}
          />

          {/* Tags */}
          <div className="border-t border-slate-800 pt-8 mb-12">
            <div className="flex flex-wrap gap-2">
              <span className="text-sm text-slate-300 mr-2">Tags:</span>
              {['Philosophy', 'Wisdom', 'Personal Growth', 'Knowledge'].map(tag => (
                <span 
                  key={tag}
                  className="bg-slate-800 text-slate-300 text-xs px-3 py-1 rounded-full hover:bg-slate-700 transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Author bio */}
          <AuthorBio author={currentPost.author} />

          {/* Related articles */}
          {relatedPosts.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-serif font-bold text-white mb-8">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <div 
                    key={relatedPost.id}
                    className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-slate-700 transition-all cursor-pointer group"
                  >
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={relatedPost.image} 
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-medium text-white mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-slate-400">{relatedPost.readTime} min read</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};