import { useState } from 'react';
import { Bot, Star, TrendingUp as Trending, Users, Search, Plus } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/shared/Button';

interface ChatCard {
  id: string;
  title: string;
  description: string;
  image: string;
  views?: string;
  category: string;
}

const mockChats: ChatCard[] = [
  {
    id: '1',
    title: "Philosophy Expert",
    description: "Discuss deep philosophical concepts and theories",
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    views: "25.1k",
    category: "Featured"
  },
  {
    id: '2',
    title: "Creative Writing Assistant",
    description: "Get help with your writing projects",
    image: "https://images.pexels.com/photos/3059747/pexels-photo-3059747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    views: "18.2k",
    category: "Popular"
  },
  {
    id: '3',
    title: "Research Helper",
    description: "Your academic research companion",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    views: "15.9k",
    category: "Trending"
  }
];

export const ChatPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('For You');

  const categories = ['For You', 'Featured', 'Popular', 'Trending'];

  return (
    <div className="min-h-screen bg-slate-950 pt-20 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header with Search and Create Button */}
          <div className="flex items-center justify-between mb-8">
            <div className="relative flex-1 max-w-xl">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search chats..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
              />
            </div>
            <Button
              variant="primary"
              size="lg"
              icon={<Plus size={20} />}
              className="ml-4"
            >
              Create New Chat
            </Button>
          </div>

          {/* Category Navigation */}
          <div className="flex space-x-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Chat Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockChats.map((chat) => (
              <motion.div
                key={chat.id}
                className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden hover:border-slate-700 transition-all cursor-pointer group"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={chat.image}
                    alt={chat.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                  {chat.views && (
                    <div className="absolute bottom-3 right-3 bg-slate-900/90 text-white text-xs px-2 py-1 rounded-full">
                      {chat.views} views
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-medium text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {chat.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-3 line-clamp-2">
                    {chat.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                      {chat.category}
                    </span>
                    <Bot className="text-slate-400 group-hover:text-blue-400 transition-colors" size={18} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};