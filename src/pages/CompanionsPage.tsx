import { Bot, Sparkles, TrendingUp, Users, Search } from 'lucide-react';
import { motion } from 'framer-motion';

interface Companion {
  id: string;
  name: string;
  avatar: string;
  creator: string;
  description: string;
  interactions: number;
}

export const CompanionsPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-20 pb-16">
      <div className="container mx-auto px-4">
        {/* Search Bar */}
        <div className="flex items-center space-x-4 mb-8">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search companions..."
              className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500"
            />
            <Search className="absolute right-3 top-2.5 text-slate-400" size={20} />
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Create
          </button>
        </div>

        {/* For You Section */}
        <section className="mb-12">
          <h2 className="text-xl text-white font-medium mb-4">For you</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Companion Card Template */}
            <div className="bg-slate-900 border border-slate-800 rounded-lg p-4 hover:border-slate-700 transition-all cursor-pointer">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-12 h-12 rounded-full bg-slate-800"></div>
                <div>
                  <h3 className="text-white font-medium">Companion Name</h3>
                  <p className="text-slate-400 text-sm">By Creator</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm line-clamp-2">Short description about the companion...</p>
            </div>
          </div>
        </section>

        {/* Featured Section */}
        <section className="mb-12">
          <h2 className="text-xl text-white font-medium mb-4">Featured</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Similar companion cards */}
          </div>
        </section>

        {/* Popular Section */}
        <section className="mb-12">
          <h2 className="text-xl text-white font-medium mb-4">Popular</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Similar companion cards */}
          </div>
        </section>

        {/* Trending Section */}
        <section className="mb-12">
          <h2 className="text-xl text-white font-medium mb-4">Trending</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Similar companion cards */}
          </div>
        </section>
      </div>
    </div>
  );
};