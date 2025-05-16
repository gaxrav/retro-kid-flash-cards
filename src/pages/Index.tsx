
import { useState } from "react";
import Flashcard from "@/components/Flashcard";

const historyFlashcards = [
  {
    question: "When was the Declaration of Independence signed?",
    answer: "July 4, 1776"
  },
  {
    question: "Who was the first President of the United States?",
    answer: "George Washington"
  },
  {
    question: "What event started World War I?",
    answer: "The assassination of Archduke Franz Ferdinand"
  },
  {
    question: "When did the Berlin Wall fall?",
    answer: "November 9, 1989"
  },
  {
    question: "Who was the first female Prime Minister of the UK?",
    answer: "Margaret Thatcher"
  }
];

const Index = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  
  const handlePrevCard = () => {
    setCurrentCardIndex((prev) => (prev === 0 ? historyFlashcards.length - 1 : prev - 1));
  };
  
  const handleNextCard = () => {
    setCurrentCardIndex((prev) => (prev === historyFlashcards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-retro-darkblue p-6">
      <header className="py-4 mb-8">
        <h1 className="font-pixel text-4xl text-retro-yellow text-center">
          History Flashcards
        </h1>
      </header>
      
      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-8">
          <Flashcard 
            question={historyFlashcards[currentCardIndex].question}
            answer={historyFlashcards[currentCardIndex].answer}
          />
        </div>
        
        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={handlePrevCard}
            className="font-retro text-xl bg-retro-blue text-white border-4 border-retro-black retro-shadow hover:bg-retro-purple px-6 py-2 rounded"
          >
            Previous
          </button>
          <button 
            onClick={handleNextCard}
            className="font-retro text-xl bg-retro-blue text-white border-4 border-retro-black retro-shadow hover:bg-retro-purple px-6 py-2 rounded"
          >
            Next
          </button>
        </div>
        
        <p className="text-center font-retro text-lg text-white mt-4">
          Card {currentCardIndex + 1} of {historyFlashcards.length}
        </p>
      </main>
    </div>
  );
};

export default Index;
