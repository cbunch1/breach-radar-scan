import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
// Use direct upload URL since download failed

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Recent Breaches', href: '/recent-breaches' },
    { name: 'Pricing', href: '/pricing' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/59b841fc-13da-4542-b020-b14e2e6e3b13.png" 
                alt="DataBreached Logo" 
                className="h-8 w-auto"
                onError={(e) => {
                  console.error('Logo failed to load:', e.currentTarget.src);
                  e.currentTarget.style.border = '2px solid red';
                }}
                onLoad={() => console.log('Logo loaded successfully')}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'text-sm font-medium transition-smooth',
                    isActive(item.href)
                      ? 'text-primary font-semibold'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center space-x-4">
              <Button asChild variant="cta" size="default">
                <Link to="/pricing">Download DataBreached</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <nav className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      'px-3 py-2 text-sm font-medium transition-smooth rounded-lg',
                      isActive(item.href)
                        ? 'text-primary bg-primary/10 font-semibold'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2">
                  <Button asChild variant="cta" size="default" className="w-full">
                    <Link to="/pricing">Download DataBreached</Link>
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="/lovable-uploads/59b841fc-13da-4542-b020-b14e2e6e3b13.png" 
                  alt="DataBreached Logo" 
                  className="h-8 w-auto"
                  onError={(e) => {
                    console.error('Footer logo failed to load:', e.currentTarget.src);
                    e.currentTarget.style.border = '2px solid red';
                  }}
                  onLoad={() => console.log('Footer logo loaded successfully')}
                />
              </div>
              <p className="text-muted-foreground text-sm max-w-md">
                <span className="font-medium text-foreground">Global Defenders Against Cyber Threats</span>
              </p>
              <p className="text-xs text-muted-foreground mt-4">
                © 2018-2025 DataBreached. All rights reserved.
              </p>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/privacy" className="hover:text-foreground transition-smooth">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-foreground transition-smooth">Terms of Service</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a 
                    href="https://t.me/databreachedorg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-smooth flex items-center gap-2"
                  >
                    Contact on Telegram
                  </a>
                </li>
                <li>
                  <a 
                    href="https://t.me/databreachedorg" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-smooth"
                  >
                    @databreachedorg
                  </a>
                </li>
                <li className="text-xs mt-2">
                  <span className="text-muted-foreground">
                    DataBreached.org<br />
                    175 Greenwich St<br />
                    New York, NY 10007 USA
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Missing cn utility function import
function cn(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default Layout;