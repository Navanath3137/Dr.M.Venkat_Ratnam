import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dr. M Venkat Ratnam</h3>
            <p className="text-gray-400 leading-relaxed">
              Senior Scientist at National Atmospheric Research Laboratory,
              advancing atmospheric science research.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-yellow-400" />
                <span>vratnam@narl.gov.in</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-yellow-400" />
                <span>+91 9246999369</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-yellow-400" />
                <span>Gadanki, Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-yellow-400 transition-colors">
                About
              </a>
              <a href="#research" className="block text-gray-400 hover:text-yellow-400 transition-colors">
                Research
              </a>
              <a href="#awards" className="block text-gray-400 hover:text-yellow-400 transition-colors">
                Awards
              </a>
              <a href="#publications" className="block text-gray-400 hover:text-yellow-400 transition-colors">
                Publications
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>2026 Dr. M Venkat Ratnam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
