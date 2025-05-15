
import Header from "@/components/Header";
import CategoryGrid from "@/components/CategoryGrid";
import FlashcardDemo from "@/components/FlashcardDemo";
import PixelDecoration from "@/components/PixelDecoration";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="relative">
          <PixelDecoration position="topRight" />
          <PixelDecoration position="bottomLeft" />
          
          <section className="mb-12 text-center">
            <h1 className="font-pixel text-4xl mb-4 text-retro-pink">
              Learn with <span className="text-retro-yellow">Retro</span> Flashcards
            </h1>
            <p className="font-retro text-2xl text-white max-w-2xl mx-auto">
              The most rad way to study and memorize everything you need to know! 
              Flip through digital flashcards with awesome retro vibes.
            </p>
            <div className="mt-8 flex justify-center gap-4 flex-wrap">
              <Button 
                className="font-retro text-2xl bg-retro-pink text-white border-4 border-retro-black hover:bg-retro-yellow hover:text-retro-black retro-shadow"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                className="font-retro text-2xl bg-transparent text-retro-yellow border-4 border-retro-yellow hover:bg-retro-yellow hover:text-retro-black"
              >
                How It Works
              </Button>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="font-pixel text-2xl mb-6 text-retro-teal text-center">Popular Categories</h2>
            <CategoryGrid />
          </section>
          
          <FlashcardDemo />
          
          <section className="bg-retro-blue border-4 border-retro-black p-6 mt-12 rounded-md retro-shadow">
            <div className="text-center">
              <h2 className="font-pixel text-2xl mb-4 text-white">Create Your Own Flashcards</h2>
              <p className="font-retro text-xl text-white mb-6">
                Make your own custom flashcards for any subject. It's totally easy and super fun!
              </p>
              <Button 
                className="font-retro text-xl bg-retro-yellow text-retro-black border-4 border-retro-black hover:bg-retro-purple hover:text-white retro-shadow"
              >
                Create Now
              </Button>
            </div>
          </section>
        </div>
      </main>
      
      <footer className="bg-retro-black py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="font-retro text-white text-lg">
            © 2025 RetroCards - The most radical flashcard app around!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
