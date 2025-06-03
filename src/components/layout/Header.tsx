import { useState, useEffect } from 'react';
import { Menu, X, Search, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { SearchBar } from '../shared/SearchBar';
import { motion } from 'framer-motion';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Header = ({ currentPage, onPageChange }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleNavClick = (page: string) => {
    onPageChange(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`w-full transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center cursor-pointer group" 
            onClick={() => handleNavClick('home')}
            whileHover={{ scale: 1.02 }}
          >
            <div>
              <motion.h1 
                className="text-3xl font-serif font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                THE REALS
              </motion.h1>
              <p className="text-xs text-blue-200/90 font-light tracking-widest">KNOWLEDGE • COMPASSION • FREEDOM</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavItem label="HOME" isActive={currentPage === 'home'} onClick={() => handleNavClick('home')} />
            <NavItem label="ARTICLES" isActive={currentPage === 'blog'} onClick={() => handleNavClick('blog')} />
            <NavItem label="TOOLS" isActive={currentPage === 'chat'} onClick={() => handleNavClick('chat')} />
            <NavItem label="ABOUT" isActive={currentPage === 'about'} onClick={() => handleNavClick('about')} />
            
            {/* Social Links */}
            <div className="flex items-center space-x-4 ml-4 border-l border-slate-700 pl-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Github size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors">
                <Twitter size={18} />
              </a>
            </div>

            <button 
              className="text-white hover:text-blue-300 transition-colors" 
              onClick={toggleSearch}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-white mr-2 hover:text-blue-300 transition-colors" 
              onClick={toggleSearch}
              aria-label="Search"
            >
              <Search size={20} />
            </button>
            <button 
              className="text-white hover:text-blue-300 transition-colors" 
              onClick={toggleMobileMenu}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Search Overlay */}
      {isSearchOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md p-4 shadow-lg">
          <SearchBar onClose={toggleSearch} />
        </div>
      )}

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavItem label="HOME" isActive={currentPage === 'home'} onClick={() => handleNavClick('home')} />
            <MobileNavItem label="ARTICLES" isActive={currentPage === 'blog'} onClick={() => handleNavClick('blog')} />
            <MobileNavItem label="TOOLS" isActive={currentPage === 'chat'} onClick={() => handleNavClick('chat')} />
            <MobileNavItem label="ABOUT" isActive={currentPage === 'about'} onClick={() => handleNavClick('about')} />
          </div>
        </div>
      )}
    </header>
  );
};

interface NavItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem = ({ label, isActive, onClick }: NavItemProps) => (
  <motion.button
    className={`relative font-medium text-sm tracking-wider ${
      isActive ? 'text-blue-400' : 'text-white hover:text-blue-200'
    } transition-colors duration-300`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {label}
    {isActive && (
      <motion.span 
        className="absolute -bottom-2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600"
        layoutId="underline"
      />
    )}
  </motion.button>
);

const MobileNavItem = ({ label, isActive, onClick }: NavItemProps) => (
  <motion.button
    className={`py-2 px-4 text-left font-medium text-sm tracking-wider ${
      isActive ? 'text-blue-400 bg-slate-800/50' : 'text-white'
    } hover:bg-slate-800/30 transition-colors duration-300 rounded`}
    onClick={onClick}
    whileTap={{ scale: 0.95 }}
  >
    {label}
  </motion.button>
);