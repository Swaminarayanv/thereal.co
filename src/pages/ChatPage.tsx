import { useState } from 'react';
import { Bot, Sparkles, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';

export const ChatPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          className="bg-slate-900/80 backdrop-blur-lg rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="bg-slate-800 p-4 border-b border-slate-700">
            <div className="flex items-center space-x-3">
              <Bot className="text-blue-400" size={24} />
              <div>
                <h2 className="text-lg font-semibold text-white">AI Assistant</h2>
                <p className="text-sm text-slate-400">Always here to help</p>
              </div>
            </div>
          </div>

          {/* Tools Section */}
          <div className="p-6 space-y-6">
            {/* Content Enhancement */}
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="text-white font-medium mb-4 flex items-center">
                <Sparkles size={18} className="text-blue-400 mr-2" />
                Content Enhancement
              </h3>
              <div className="space-y-3">
                <button className="w-full text-left px-4 py-3 bg-slate-900/50 hover:bg-slate-900 text-blue-400 rounded-lg transition-colors">
                  Humanize Text
                </button>
                <button className="w-full text-left px-4 py-3 bg-slate-900/50 hover:bg-slate-900 text-blue-400 rounded-lg transition-colors">
                  Paraphrase Content
                </button>
                <button className="w-full text-left px-4 py-3 bg-slate-900/50 hover:bg-slate-900 text-blue-400 rounded-lg transition-colors">
                  Summarize Text
                </button>
                <button className="w-full text-left px-4 py-3 bg-slate-900/50 hover:bg-slate-900 text-blue-400 rounded-lg transition-colors">
                  Extract Key Points
                </button>
              </div>
            </div>

            {/* Tone Adjustment */}
            <div className="bg-slate-800/50 rounded-lg p-4">
              <h3 className="text-white font-medium mb-4 flex items-center">
                <RefreshCw size={18} className="text-blue-400 mr-2" />
                Tone Adjustment
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button className="text-center px-4 py-2 bg-slate-900/50 hover:bg-slate-900 text-blue-400 rounded-lg transition-colors">
                  Professional
                </button>
                <button className="text-center px-4 py-2 bg-slate-900/50 hover:bg-slate-900 text-blue-400 rounded-lg transition-colors">
                  Casual
                </button>
                <button className="text-center px-4 py-2 bg-slate-900/50 hover:bg-slate-900 text-blue-400 rounded-lg transition-colors">
                  Academic
                </button>
                <button className="text-center px-4 py-2 bg-slate-900/50 hover:bg-slate-900 text-blue-400 rounded-lg transition-colors">
                  Creative
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};