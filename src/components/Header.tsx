import React, { useState, useEffect } from 'react';


const Header: React.FC = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Sections found in the code or implicit
  // Replacing old links with the site's actual links but structure of new header
  const links = [
    { name: 'Our Services', href: '#visible-offers' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'About Us', href: '#' },
  ];


  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${sticky ? 'bg-black/20 backdrop-blur-xl border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="font-serif text-2xl md:text-3xl text-white font-bold tracking-wider relative z-50">
          DIY DEALER DESIGNS
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white text-sm font-medium tracking-wide hover:opacity-80 transition-opacity uppercase"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-white z-50 relative w-8 h-8 flex flex-col justify-center gap-1.5"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-full h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 flex items-center justify-center transition-all duration-500 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
          <nav className="flex flex-col items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white text-2xl font-serif font-light tracking-wider hover:text-primary transition-colors"
                onClick={closeMobileMenu}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
