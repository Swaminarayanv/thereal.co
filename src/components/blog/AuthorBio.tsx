import { Mail, Globe, Twitter, Linkedin } from 'lucide-react';

interface AuthorBioProps {
  author: {
    name: string;
    title: string;
    avatar: string;
    bio: string;
    social?: {
      twitter?: string;
      linkedin?: string;
      website?: string;
      email?: string;
    };
  };
}

export const AuthorBio = ({ author }: AuthorBioProps) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 flex flex-col sm:flex-row gap-6 items-center sm:items-start">
      <div className="shrink-0">
        <img 
          src={author.avatar} 
          alt={author.name}
          className="h-24 w-24 rounded-full border-2 border-amber-500 p-1" 
        />
      </div>
      <div>
        <h3 className="text-xl font-serif font-bold text-white mb-1 text-center sm:text-left">{author.name}</h3>
        <p className="text-amber-400 text-sm mb-3 text-center sm:text-left">{author.title}</p>
        <p className="text-slate-300 text-sm mb-4">{author.bio}</p>
        
        {author.social && (
          <div className="flex justify-center sm:justify-start space-x-4">
            {author.social.twitter && (
              <a href={author.social.twitter} className="text-slate-400 hover:text-amber-400 transition-colors">
                <Twitter size={18} />
              </a>
            )}
            {author.social.linkedin && (
              <a href={author.social.linkedin} className="text-slate-400 hover:text-amber-400 transition-colors">
                <Linkedin size={18} />
              </a>
            )}
            {author.social.website && (
              <a href={author.social.website} className="text-slate-400 hover:text-amber-400 transition-colors">
                <Globe size={18} />
              </a>
            )}
            {author.social.email && (
              <a href={`mailto:${author.social.email}`} className="text-slate-400 hover:text-amber-400 transition-colors">
                <Mail size={18} />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};