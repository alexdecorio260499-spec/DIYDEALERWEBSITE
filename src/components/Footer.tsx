
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-6 px-6 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 items-start text-center md:text-left">

          {/* Brand & Socials - Compact */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-bold tracking-tight text-[#1a2e1a] block mb-3">
              DIY DEALER
            </span>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              Professional garden design & staging.
            </p>
            <div className="flex gap-3">
              {['instagram', 'linkedin', 'facebook', 'pinterest'].map(social => (
                <a key={social} href="#" className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-[#1a2e1a] hover:text-white transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-4 h-4 bg-current mask-icon" />
                </a>
              ))}
            </div>
          </div>

          {/* Links - Services */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-bold text-[#1a2e1a] mb-3 uppercase tracking-widest text-xs">Services</h5>
            <ul className="space-y-2 text-gray-500 text-sm font-medium">
              <li><a href="#visible-offers" className="hover:text-[#1a2e1a] transition-colors">Quick Vision</a></li>
              <li><a href="#visible-offers" className="hover:text-[#1a2e1a] transition-colors">Dual Vision</a></li>
              <li><a href="#visible-offers" className="hover:text-[#1a2e1a] transition-colors">Signature Design</a></li>
            </ul>
          </div>

          {/* Links - Company */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-bold text-[#1a2e1a] mb-3 uppercase tracking-widest text-xs">Company</h5>
            <ul className="space-y-2 text-gray-500 text-sm font-medium">
              <li><a href="#" className="hover:text-[#1a2e1a] transition-colors">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-[#1a2e1a] transition-colors">Testimonials</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
          <p>© 2025 DIY DEALER. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#1a2e1a] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#1a2e1a] transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
