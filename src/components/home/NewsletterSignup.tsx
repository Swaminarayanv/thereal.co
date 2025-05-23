import { Mail } from 'lucide-react';
import { Button } from '../shared/Button';

export const NewsletterSignup = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg')] bg-cover bg-fixed">
        <div className="absolute inset-0 bg-indigo-950/90 backdrop-blur-sm"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-slate-950 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-slate-950 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-amber-500/20 mb-6">
            <Mail className="h-8 w-8 text-amber-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
            Stay <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">Enlightened</span>
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Subscribe to our newsletter and receive weekly curated articles, exclusive insights, and special offers directly to your inbox.
          </p>

          <form className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-800/80 border border-slate-700 text-white focus:outline-none focus:border-amber-500 transition-colors"
                required
              />
              <Button variant="primary" size="lg">
                Subscribe Now
              </Button>
            </div>
            <p className="text-xs text-slate-400 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};