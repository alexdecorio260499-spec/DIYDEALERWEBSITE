
import React from 'react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'about' | 'terms' | 'privacy') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#about') {
      onNavigate?.('about');
    } else if (href === '#terms') {
      onNavigate?.('terms');
    } else if (href === '#privacy') {
      onNavigate?.('privacy');
    } else {
      onNavigate?.('home');
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <footer className="bg-[#1a1a1a] pt-20 pb-10 px-6 border-t border-gsd-olive/20 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start text-center md:text-left">

          {/* Brand & Tagline */}
          <div className="flex flex-col items-center md:items-start group">
            <span className="text-2xl font-serif font-bold tracking-tight text-white block mb-4 group-hover:text-gsd-olive transition-colors duration-300">
              DIY DEALER
            </span>
            <p className="text-gsd-grey text-sm mb-6 leading-relaxed max-w-xs">
              Professional garden design made accessible. Visualise your dream sanctuary before you build.
            </p>
            <div className="text-xs text-gsd-grey/80 space-y-1">
              <p>yourdiydealer@gmail.com</p>
              <p>+44 (0)7944 081 823</p>
            </div>
          </div>

          {/* Links - Services */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-serif text-lg text-white mb-6">Packages</h5>
            <ul className="space-y-3 text-gsd-grey text-sm font-sans hover:text-white transition-colors">
              <li><a href="#offers" onClick={(e) => handleLinkClick(e, '#visible-offers')} className="hover:text-gsd-olive transition-colors">Garden Clarity</a></li>
              <li><a href="#offers" onClick={(e) => handleLinkClick(e, '#visible-offers')} className="hover:text-gsd-olive transition-colors">The Complete Vision</a></li>
              <li><a href="#offers" onClick={(e) => handleLinkClick(e, '#visible-offers')} className="hover:text-gsd-olive transition-colors">Signature Design</a></li>
            </ul>
          </div>

          {/* Links - Company */}
          <div className="flex flex-col items-center md:items-start">
            <h5 className="font-serif text-lg text-white mb-6">Company</h5>
            <ul className="space-y-3 text-gsd-grey text-sm font-sans">
              <li><a href="#about" onClick={(e) => handleLinkClick(e, '#about')} className="hover:text-gsd-olive transition-colors">About Us</a></li>
              <li><a href="#terms" onClick={(e) => handleLinkClick(e, '#terms')} className="hover:text-gsd-olive transition-colors">Terms & Conditions</a></li>
              <li><a href="#privacy" onClick={(e) => handleLinkClick(e, '#privacy')} className="hover:text-gsd-olive transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gsd-grey text-[10px] font-bold uppercase tracking-widest">
            © 2026 DIY DEALER | All rights reserved
          </p>
          {/* Optional Socials or minimal badge */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
