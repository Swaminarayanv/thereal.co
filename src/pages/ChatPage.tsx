import { useState } from 'react';
import { Send, Bot } from 'lucide-react';
import { motion } from 'framer-motion';

export const ChatPage = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: input, isUser: true }]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "Thank you for your message. This is a demo response from the AI assistant.", 
        isUser: false 
      }]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-slate-950 pt-20 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          className="bg-slate-900/80 backdrop-blur-lg rounded-lg shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Chat Header */}
          <div className="bg-slate-800 p-4 border-b border-slate-700">
            <div className="flex items-center space-x-3">
              <Bot className="text-blue-400" size={24} />
              <div>
                <h2 className="text-lg font-semibold text-white">AI Assistant</h2>
                <p className="text-sm text-slate-400">Always here to help</p>
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-[600px] overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] rounded-lg p-3 ${
                  message.isUser 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-slate-800 text-slate-200'
                }`}>
                  <p className="text-sm">{message.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Chat Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-slate-700 bg-slate-800">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-slate-700 text-white rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <motion.button
                type="submit"
                className="bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};