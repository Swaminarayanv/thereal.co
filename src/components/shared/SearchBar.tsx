import { useState } from 'react';
import { Search, X } from 'lucide-react';
import { mockPosts } from '../../utils/data';

interface SearchBarProps {
  onClose?: () => void;
}

export const SearchBar = ({ onClose }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.length > 2) {
      const results = mockPosts.filter(post => 
        post.title.toLowerCase().includes(term.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(term.toLowerCase()) ||
        post.category.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="w-full">
      <div className="relative">
        <div className="flex items-center bg-slate-800 rounded-lg overflow-hidden border border-slate-700 focus-within:border-amber-500 transition-colors">
          <Search className="ml-3 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search for articles, topics, or keywords..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full py-3 px-3 bg-transparent text-white outline-none text-sm"
            autoFocus
          />
          {searchTerm && (
            <button 
              className="mr-3 text-slate-400 hover:text-white transition-colors"
              onClick={() => {
                setSearchTerm('');
                setSearchResults([]);
              }}
            >
              <X size={18} />
            </button>
          )}
        </div>
        {onClose && (
          <button 
            className="absolute right-0 top-0 -mt-8 text-slate-400 hover:text-white transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        )}
      </div>

      {searchResults.length > 0 && (
        <div className="mt-4 max-h-96 overflow-y-auto bg-slate-800 rounded-lg border border-slate-700 divide-y divide-slate-700">
          {searchResults.map(result => (
            <div key={result.id} className="p-3 hover:bg-slate-700 transition-colors">
              <h4 className="text-white font-medium">{result.title}</h4>
              <p className="text-slate-400 text-sm line-clamp-1">{result.excerpt}</p>
              <div className="flex items-center mt-1">
                <span className="text-xs text-amber-400">{result.category}</span>
                <span className="text-xs text-slate-500 ml-2">• {result.readTime} min read</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {searchTerm.length > 2 && searchResults.length === 0 && (
        <div className="mt-4 p-4 bg-slate-800 rounded-lg border border-slate-700 text-center">
          <p className="text-slate-400">No results found for "{searchTerm}"</p>
        </div>
      )}

      {searchTerm.length > 0 && searchTerm.length <= 2 && (
        <div className="mt-2 text-xs text-slate-400">
          Please enter at least 3 characters to search
        </div>
      )}
    </div>
  );
};