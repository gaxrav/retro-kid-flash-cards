
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [wiggle, setWiggle] = useState(false);
  
  const handleLogoClick = () => {
    setWiggle(true);
    setTimeout(() => setWiggle(false), 500);
  };

  return (
    <header className="py-4 border-b-8 border-retro-black bg-retro-teal">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div 
            className={`flex items-center gap-2 ${wiggle ? "animate-wiggle" : ""}`}
            onClick={handleLogoClick}
          >
            <span className="text-4xl font-pixel text-retro-black cursor-pointer">
              Retro
            </span>
            <span className="text-4xl font-pixel text-retro-pink">
              Cards
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-4">
            <Button 
              variant="outline" 
              className="font-retro text-xl bg-retro-yellow text-retro-black border-4 border-retro-black hover:bg-retro-purple hover:text-white retro-shadow"
            >
              Home
            </Button>
            <Button 
              variant="outline" 
              className="font-retro text-xl bg-retro-yellow text-retro-black border-4 border-retro-black hover:bg-retro-purple hover:text-white retro-shadow"
            >
              Categories
            </Button>
            <Button 
              variant="outline" 
              className="font-retro text-xl bg-retro-yellow text-retro-black border-4 border-retro-black hover:bg-retro-purple hover:text-white retro-shadow"
            >
              Create
            </Button>
          </nav>
          
          <Button 
            className="md:hidden font-retro bg-retro-yellow text-retro-black border-4 border-retro-black hover:bg-retro-purple hover:text-white retro-shadow"
          >
            Menu
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
