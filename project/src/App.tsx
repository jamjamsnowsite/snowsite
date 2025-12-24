import { Instagram, MessageCircle, Mail } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-900">Gudauri Pro</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors">Gallery</a>
              <a href="#location" className="text-gray-700 hover:text-blue-600 transition-colors">Location</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Book Now
            </a>
          </div>
        </div>
      </nav>

      <Hero />
      <About />
      <Gallery />
      <Location />
      <Contact />

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Gudauri Pro</h3>
              <p className="text-gray-400">
                Professional snowboard instruction in the heart of the Caucasus Mountains
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#gallery" className="block text-gray-400 hover:text-white transition-colors">Gallery</a>
                <a href="#location" className="block text-gray-400 hover:text-white transition-colors">Location</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <MessageCircle size={24} />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Gudauri Pro Snowboard Instruction. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
