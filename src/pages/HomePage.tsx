import { HeroSection } from '../components/home/HeroSection';
import { FeaturedPosts } from '../components/home/FeaturedPosts';
import { NewsletterSignup } from '../components/home/NewsletterSignup';

interface HomePageProps {
  onPostSelect: (post: any) => void;
  onPageChange: (page: string) => void;
}

export const HomePage = ({ onPostSelect, onPageChange }: HomePageProps) => {
  return (
    <div>
      <HeroSection onPostSelect={onPostSelect} />
      <FeaturedPosts onPostSelect={onPostSelect} onPageChange={onPageChange} />
      <NewsletterSignup />
    </div>
  );
};