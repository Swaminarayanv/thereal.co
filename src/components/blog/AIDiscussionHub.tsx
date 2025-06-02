import { useState } from 'react';
import { MessageSquare, Brain, Sparkles, RefreshCw, ChevronDown, ChevronUp, Send } from 'lucide-react';
import { Button } from '../shared/Button';
import { motion, AnimatePresence } from 'framer-motion';

interface AIDiscussionHubProps {
  articleTitle: string;
  articleContent: string;
}

export const AIDiscussionHub = ({ articleTitle, articleContent }: AIDiscussionHubProps) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [activeTab, setActiveTab] = useState<'discuss' | 'tools'>('discuss');
  const [userInput, setUserInput] = useState('');
  const [discussions, setDiscussions] = useState<Array<{ id: number; text: string; isAI: boolean }>>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    // Add user message
    setDiscussions(prev => [...prev, { id: Date.now(), text: userInput, isAI: false }]);
    setUserInput('');

    // Simulate AI response
    setTimeout(() => {
      setDiscussions(prev => [...prev, {
        id: Date.now(),
        text: "This is a simulated AI response. In the actual implementation, this would be replaced with real AI-generated content.",
        isAI: true
      }]);
    }, 1000);
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg mt-12">
      {/* Header */}
      <div className="p-4 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Brain className="text-blue-400" size={20} />
          <h3 className="text-lg font-medium text-white">AI Discussion Hub</h3>
        </div>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-slate-400 hover:text-white transition-colors"
        >
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Tabs */}
            <div className="flex border-b border-slate-800">
              <button
                className={`flex-1 py-2 px-4 text-sm font-medium ${
                  activeTab === 'discuss'
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-slate-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('discuss')}
              >
                <div className="flex items-center justify-center space-x-2">
                  <MessageSquare size={16} />
                  <span>Discuss</span>
                </div>
              </button>
              <button
                className={`flex-1 py-2 px-4 text-sm font-medium ${
                  activeTab === 'tools'
                    ? 'text-blue-400 border-b-2 border-blue-400'
                    : 'text-slate-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('tools')}
              >
                <div className="flex items-center justify-center space-x-2">
                  <Sparkles size={16} />
                  <span>AI Tools</span>
                </div>
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              {activeTab === 'discuss' ? (
                <div>
                  {/* Quick Actions */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<Brain size={14} />}
                    >
                      Generate Summary
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<MessageSquare size={14} />}
                    >
                      Key Takeaways
                    </Button>
                  </div>

                  {/* Discussion Thread */}
                  <div className="space-y-4 mb-4 max-h-96 overflow-y-auto">
                    {discussions.map(message => (
                      <div
                        key={message.id}
                        className={`flex ${message.isAI ? 'justify-start' : 'justify-end'}`}
                      >
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.isAI
                              ? 'bg-slate-800 text-slate-200'
                              : 'bg-blue-600 text-white'
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input Form */}
                  <form onSubmit={handleSubmit} className="flex space-x-2">
                    <input
                      type="text"
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      placeholder="Ask about this article or share your thoughts..."
                      className="flex-1 bg-slate-800 border border-slate-700 rounded-lg px-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      icon={<Send size={16} />}
                    >
                      Send
                    </Button>
                  </form>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-slate-800 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Content Enhancement</h4>
                    <div className="space-y-2">
                      <Button
                        variant="outline"
                        size="sm"
                        fullWidth
                        icon={<Sparkles size={14} />}
                      >
                        Humanize Text
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        fullWidth
                        icon={<RefreshCw size={14} />}
                      >
                        Paraphrase
                      </Button>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-lg p-4">
                    <h4 className="text-white font-medium mb-2">Tone Adjustment</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">Professional</Button>
                      <Button variant="outline" size="sm">Casual</Button>
                      <Button variant="outline" size="sm">Academic</Button>
                      <Button variant="outline" size="sm">Creative</Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};