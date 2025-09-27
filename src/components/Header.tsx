import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, Brain, Shield, Rocket } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "AI Development", href: "#ai-development", icon: Brain },
    { name: "Security", href: "#security", icon: Shield },
    { name: "Business", href: "#business", icon: Zap },
    { name: "Innovations", href: "#innovations", icon: Rocket },
    { name: "About Us", href: "#about", icon: null },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/11c867c3-e3e8-4b9a-aee8-fdc3a33aa91f.png" 
              alt="ITAsociety Logo" 
              className="h-10 w-auto animate-neural-pulse"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <Button
            variant="enterprise"
            size="sm"
            aria-label="Contact the ITAsociety team"
            onClick={() => window.location.href = "/#contatti"}
          >
            Contact Us
          </Button>
          <Button
            variant="hero"
            size="sm"
            aria-label="Request a personalized demo"
            onClick={() => window.location.href = "/#demo"}
          >
            Request a Demo
          </Button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-foreground hover:text-primary transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button
                  variant="enterprise"
                  size="sm"
                  aria-label="Contact the ITAsociety team"
                  onClick={() => window.location.href = "/#contatti"}
                >
            Contact Us
          </Button>
          <Button
            variant="hero"
            size="sm"
            aria-label="Request a personalized demo"
            onClick={() => window.location.href = "/#demo"}
          >
            Request a Demo
          </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
      <LanguageSwitcher />
    </header>
  );
};