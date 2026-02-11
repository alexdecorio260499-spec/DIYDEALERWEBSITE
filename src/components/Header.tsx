import React, { useState, useEffect } from 'react';


interface HeaderProps {
  onNavigate?: (page: 'home' | 'about' | 'terms' | 'privacy' | 'contact') => void;
  onCheckoutClose?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, onCheckoutClose }) => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Allow default behavior for new tab/window (Cmd+Click, Ctrl+Click, middle-click)
    if (e.metaKey || e.ctrlKey || e.button === 1) {
      return;
    }
    e.preventDefault();
    closeMobileMenu();
    onCheckoutClose?.(); // Close checkout modal if open

    if (href === '#about') {
      onNavigate?.('about');
    } else if (href === '#contact') {
      onNavigate?.('contact');
    } else if (href === '/') {
      onNavigate?.('home');
      window.scrollTo(0, 0);
    } else {
      // For hash links, we need to ensure we're on home first
      onNavigate?.('home');
      // Small timeout to allow render before scrolling
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  const links = [
    { name: 'Our Services', href: '#visible-offers' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About Us', href: '#about' },
  ];

  return (
    <header className="fixed top-0 w-full z-[80] transition-all duration-300 bg-black/20 backdrop-blur-xl border-b border-white/10 py-4">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="/"
          onClick={(e) => handleLinkClick(e, '/')}
          className="text-white text-2xl font-bold tracking-tight z-50 relative font-serif"
        >
          DIY DEALER DESIGNS
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-white text-sm font-medium tracking-wide hover:text-[#5cb25d] transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="bg-white text-[#1a2e1a] px-6 py-2 rounded-full font-bold text-sm tracking-wide hover:bg-gray-100 transition-colors shadow-md uppercase"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-white z-[80] relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-md"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={`fixed top-[72px] left-0 right-0 z-[70] transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}
          style={{ backgroundColor: '#1a2e1a', height: 'calc(100vh - 72px)' }}
        >
          <nav className="flex flex-col items-center gap-8 pt-24 w-full">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-white text-2xl font-serif font-light tracking-wider hover:text-[#5cb25d] transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={(e) => handleLinkClick(e, '#contact')}
              className="text-white text-2xl font-serif font-light tracking-wider hover:text-[#5cb25d] transition-colors"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
