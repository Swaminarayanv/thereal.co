import { Mail, MapPin, Phone, Users, BookOpen, Award, Target } from 'lucide-react';
import { Button } from '../components/shared/Button';

export const AboutPage = () => {
  return (
    <div className="bg-slate-950 pt-8 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">About RoyalBlog</h1>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            We are dedicated to creating a space where elegant ideas flourish and profound knowledge is accessible to all discerning minds.
          </p>

          <div className="relative h-0.5 w-32 mx-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
          </div>
        </div>

        {/* Our story */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold text-white mb-4">Our Story</h2>
              <p className="text-slate-300 mb-4">
                RoyalBlog was founded in 2020 with a vision to create a digital haven for thoughtful discourse and intellectual exploration. What began as a small passion project has grown into a thriving community of writers, thinkers, and readers united by a shared appreciation for elegant expression and profound ideas.
              </p>
              <p className="text-slate-300">
                We believe that knowledge becomes wisdom when shared with grace and purpose. Our platform serves as both canvas and gallery for the finest thoughts our contributors have to offer, each article carefully crafted to enlighten, inspire, and provoke meaningful reflection.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-amber-500 to-purple-600 opacity-30 blur-lg"></div>
              <img 
                src="https://images.pexels.com/photos/5053740/pexels-photo-5053740.jpeg" 
                alt="Team collaboration" 
                className="rounded-lg relative z-10"
              />
            </div>
          </div>
        </div>

        {/* Mission and values */}
        <div className="bg-slate-900 rounded-xl p-8 mb-20">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-white mb-4">Our Mission & Values</h2>
              <p className="text-slate-300 max-w-3xl mx-auto">
                We are driven by core principles that guide our content creation and community engagement.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-900/50 mb-4">
                  <BookOpen className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">Knowledge</h3>
                <p className="text-slate-300">
                  We believe in the power of well-researched, thoughtfully presented information to transform minds and lives.
                </p>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-900/50 mb-4">
                  <Users className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">Community</h3>
                <p className="text-slate-300">
                  We foster an inclusive environment where diverse perspectives are valued and respectful discourse flourishes.
                </p>
              </div>
              
              <div className="bg-slate-800 rounded-lg p-6 text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-indigo-900/50 mb-4">
                  <Target className="h-8 w-8 text-amber-400" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">Excellence</h3>
                <p className="text-slate-300">
                  We pursue the highest standards in our content, design, and reader experience, never settling for less than our best.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">Our Editorial Team</h2>
            <p className="text-slate-300 max-w-3xl mx-auto">
              Meet the dedicated professionals behind RoyalBlog's curated content and elegant design.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alexandra Reynolds",
                title: "Editor-in-Chief",
                image: "https://images.pexels.com/photos/3746314/pexels-photo-3746314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "With 15 years in publishing, Alexandra brings unparalleled editorial vision to RoyalBlog."
              },
              {
                name: "Marcus Chen",
                title: "Senior Writer",
                image: "https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "A philosophy PhD with a talent for making complex ideas accessible and engaging."
              },
              {
                name: "Sophia Patel",
                title: "Creative Director",
                image: "https://images.pexels.com/photos/3772511/pexels-photo-3772511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                bio: "Award-winning designer responsible for RoyalBlog's distinctive aesthetic and visual identity."
              }
            ].map(member => (
              <div key={member.name} className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden group">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-amber-400 text-sm mb-3">{member.title}</p>
                  <p className="text-slate-300 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-xl p-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-serif font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-slate-300 max-w-3xl mx-auto">
                Have questions, feedback, or interested in contributing to RoyalBlog? We'd love to hear from you.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-4">
                    <Mail className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Email Us</h4>
                    <p className="text-slate-300 text-sm">contact@royalblog.com</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-6">
                  <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-4">
                    <Phone className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Call Us</h4>
                    <p className="text-slate-300 text-sm">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-8">
                  <div className="h-10 w-10 rounded-full bg-amber-500/20 flex items-center justify-center mr-4">
                    <MapPin className="h-5 w-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Location</h4>
                    <p className="text-slate-300 text-sm">123 Elegant Street, Suite 456<br />Wisdom City, WC 90210</p>
                  </div>
                </div>

                <div className="bg-slate-800/50 rounded-lg p-6">
                  <h4 className="text-white font-medium mb-3">Write for RoyalBlog</h4>
                  <p className="text-slate-300 text-sm mb-4">
                    We're always looking for talented writers to join our community. If you have expertise in philosophy, culture, science, or art, we'd love to hear from you.
                  </p>
                  <Button variant="primary" size="sm">
                    Submit a Pitch
                  </Button>
                </div>
              </div>

              <div>
                <form className="bg-slate-800/40 rounded-lg p-6">
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Your Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 bg-slate-900/60 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 bg-slate-900/60 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 bg-slate-900/60 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                    <textarea 
                      id="message" 
                      rows={4}
                      className="w-full px-4 py-2 bg-slate-900/60 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-amber-500"
                    ></textarea>
                  </div>
                  
                  <Button variant="primary" fullWidth>
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};