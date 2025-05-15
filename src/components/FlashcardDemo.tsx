
import { useState } from "react";
import Flashcard from "./Flashcard";
import { Button } from "@/components/ui/button";

const demoFlashcards = [
  {
    question: "What is the capital of France?",
    answer: "Paris"
  },
  {
    question: "What is 7 x 8?",
    answer: "56"
  },
  {
    question: "Who wrote Romeo and Juliet?",
    answer: "William Shakespeare"
  }
];

const FlashcardDemo = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
  const handlePrevCard = () => {
    setCurrentCardIndex((prev) => (prev === 0 ? demoFlashcards.length - 1 : prev - 1));
  };
  
  const handleNextCard = () => {
    setCurrentCardIndex((prev) => (prev === demoFlashcards.length - 1 ? 0 : prev + 1));
  };
  
  return (
    <div className="my-12">
      <h2 className="text-center font-pixel text-2xl mb-8 text-retro-pink">Try a Flashcard!</h2>
      <div className="mb-8">
        <Flashcard 
          question={demoFlashcards[currentCardIndex].question}
          answer={demoFlashcards[currentCardIndex].answer}
        />
      </div>
      <div className="flex justify-center gap-4">
        <Button 
          onClick={handlePrevCard}
          className="font-retro text-xl bg-retro-blue text-white border-4 border-retro-black retro-shadow hover:bg-retro-purple"
        >
          Previous
        </Button>
        <Button 
          onClick={handleNextCard}
          className="font-retro text-xl bg-retro-blue text-white border-4 border-retro-black retro-shadow hover:bg-retro-purple"
        >
          Next
        </Button>
      </div>
      <p className="text-center font-retro text-lg text-white mt-4">Card {currentCardIndex + 1} of {demoFlashcards.length}</p>
    </div>
  );
};

export default FlashcardDemo;
