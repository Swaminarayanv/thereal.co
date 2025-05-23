import { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { BlogPage } from './pages/BlogPage';
import { PostPage } from './pages/PostPage';
import { AboutPage } from './pages/AboutPage';
import { ChatPage } from './pages/ChatPage';
import { ParticlesBackground } from './components/shared/ParticlesBackground';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentPost, setCurrentPost] = useState(null);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handlePostSelect = (post: any) => {
    setCurrentPost(post);
    setCurrentPage('post');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-950 to-indigo-950 relative">
      <ParticlesBackground />
      
      <div className="fixed w-full z-50">
        <Header currentPage={currentPage} onPageChange={handlePageChange} />
      </div>
      
      <main className="flex-grow pt-20">
        {currentPage === 'home' && <HomePage onPostSelect={handlePostSelect} onPageChange={handlePageChange} />}
        {currentPage === 'blog' && <BlogPage onPostSelect={handlePostSelect} />}
        {currentPage === 'post' && <PostPage post={currentPost} />}
        {currentPage === 'chat' && <ChatPage />}
        {currentPage === 'about' && <AboutPage />}
      </main>
      
      <Footer onPageChange={handlePageChange} />
    </div>
  );
}

export default App;