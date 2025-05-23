import { Facebook, Twitter, Instagram, Mail, Github, Linkedin, MapPin, Phone, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

interface FooterProps {
  onPageChange: (page: string) => void;
}

export const Footer = ({ onPageChange }: FooterProps) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const projects = [
    {
      title: "AI-Powered Chat Interface",
      description: "Real-time conversation with advanced language models",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      demo: "#",
      tech: ["React", "TypeScript", "OpenAI"]
    },
    {
      title: "Knowledge Base Platform",
      description: "Centralized information management system",
      image: "https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      demo: "#",
      tech: ["Next.js", "Supabase", "Tailwind"]
    },
    {
      title: "Interactive Learning Portal",
      description: "Engaging educational content delivery platform",
      image: "https://images.pexels.com/photos/5905700/pexels-photo-5905700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      demo: "#",
      tech: ["React", "Node.js", "MongoDB"]
    }
  ];

  return (
    <footer className="bg-slate-900 border-t border-indigo-900/40">
      <div className="container mx-auto px-4">
        {/* Page Up Button */}
        <div className="relative -top-6 flex justify-center">
          <motion.button
            onClick={scrollToTop}
            className="bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ArrowUp size={24} />
          </motion.button>
        </div>

        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <h3 className="text-xl font-serif font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                THE REALS
              </h3>
            </div>
            <p className="text-slate-300 mb-4 text-sm">
              Knowledge leads to compassion, compassion leads to freedom, and that is our foundation core.
            </p>
            <div className="space-y-2 text-sm text-slate-300">
              <div className="flex items-center">
                <MapPin size={16} className="text-blue-400 mr-2" />
                <span>123 Innovation Drive, Tech City, TC 12345</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="text-blue-400 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="text-blue-400 mr-2" />
                <span>contact@thereals.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-blue-400 font-medium uppercase tracking-wider mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onPageChange('home')} className="text-slate-300 hover:text-blue-300 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('blog')} className="text-slate-300 hover:text-blue-300 transition-colors">
                  Articles
                </button>
              </li>
              <li>
                <button onClick={() => onPageChange('about')} className="text-slate-300 hover:text-blue-300 transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-300 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-slate-300 hover:text-blue-300 transition-colors">Terms of Service</a>
              </li>
            </ul>
          </div>

          {/* Featured Projects */}
          <div className="lg:col-span-2">
            <h4 className="text-blue-400 font-medium uppercase tracking-wider mb-4 text-sm">Featured Projects</h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {projects.map((project, index) => (
                <div key={index} className="bg-slate-800 rounded-lg overflow-hidden group">
                  <div className="h-32 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-3">
                    <h5 className="text-white text-sm font-medium mb-1">{project.title}</h5>
                    <p className="text-slate-400 text-xs mb-2 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="text-xs bg-blue-500/20 text-blue-300 px-1.5 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} The Reals. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};