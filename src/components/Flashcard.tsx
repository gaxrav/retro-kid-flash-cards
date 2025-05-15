
import { Card } from "@/components/ui/card";
import { useState } from "react";

interface FlashcardProps {
  question: string;
  answer: string;
}

const Flashcard = ({ question, answer }: FlashcardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };
  
  return (
    <div className="card-flip w-full max-w-md mx-auto h-[300px] cursor-pointer" onClick={handleCardClick}>
      <div className={`card-inner w-full h-full ${isFlipped ? "flipped" : ""}`}>
        <Card className="card-front flex items-center justify-center p-6 bg-retro-yellow border-8 border-retro-black">
          <div className="font-retro text-3xl text-retro-black text-center">
            {question}
          </div>
        </Card>
        
        <Card className="card-back flex items-center justify-center p-6 bg-retro-purple border-8 border-retro-black">
          <div className="font-retro text-3xl text-white text-center">
            {answer}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Flashcard;
