import { Button } from "@/components/ui/button";
import { Smartphone, Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-hero p-2 rounded-lg">
              <Smartphone className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              ReDeal Togo
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#deals" className="text-foreground hover:text-primary transition-smooth">
              Nos Deals
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-smooth">
              Comment ça marche
            </a>
            <a href="#simulator" className="text-foreground hover:text-primary transition-smooth">
              Simulateur
            </a>
            <Button variant="hero" size="default">
              Commencer
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <a href="#deals" className="text-foreground hover:text-primary transition-smooth">
              Nos Deals
            </a>
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-smooth">
              Comment ça marche
            </a>
            <a href="#simulator" className="text-foreground hover:text-primary transition-smooth">
              Simulateur
            </a>
            <Button variant="hero" size="default" className="w-full">
              Commencer
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
