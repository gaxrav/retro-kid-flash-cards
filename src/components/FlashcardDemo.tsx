import { Button } from "@/components/ui/button";
import { useState } from "react";
import Flashcard from "./Flashcard";

const demoFlashcards = [
  {
    question: "When did the Battle of Marathon take place?",
    answer: "490 B.C.",
  },
  {
    question:
      "Who were the two main opposing forces in the Battle of Marathon?",
    answer: "The Athenians and the Persians (led by Datis and Artaphernes)",
  },
  {
    question: "What was the composition of the Athenian army at Marathon?",
    answer:
      "The Athenians had 10,000 regular infantry, each attended by a light-armed slave, but no cavalry or archers.",
  },
  {
    question:
      "Who was the Polemarch and what was his role in the Athenian army?",
    answer:
      "The Polemarch was a magistrate who had the privilege of leading the right wing of the army in battle and participating in war councils.",
  },
  {
    question:
      "What was the estimated size of the Persian force that sailed from Cilicia?",
    answer:
      "Approximately 100,000 men, though this included mariners and camp followers.",
  },
  {
    question:
      "What was the significance of Miltiades' previous role in the Chersonese?",
    answer:
      "He had been a tyrant of the Chersonese, which was a controversial position in Greek society, but his military success and service to Athens helped him gain public favor.",
  },
  {
    question:
      "What was the geographical extent of the Persian Empire under Darius?",
    answer:
      "It included modern Asiatic and European Turkey, Persia, Georgia, Armenia, Balkh, Punjab, Afghanistan, Balochistan, Egypt, and Tripoli.",
  },
  {
    question: "What was Datis' specific mission regarding Eretria and Athens?",
    answer:
      "He was ordered to capture both cities and bring their inhabitants as slaves to the Persian king.",
  },
  {
    question:
      "How did the Athenians prepare for battle on the day of Marathon?",
    answer:
      "They were inspired by local associations, including the sacred region of Hercules and the fountain of Macaria, who had sacrificed herself for liberty.",
  },
  {
    question:
      "What were the key differences in military equipment between the Persians and Greeks?",
    answer:
      "The Persians had light wicker shields and no body armor, while the Greeks had better armor and were trained to maintain formation.",
  },
  {
    question:
      "What was the significance of the Battle of Marathon in terms of European-Asian relations?",
    answer:
      "It was the first major victory of Europeans over Asians, breaking the prestige of Asian military superiority.",
  },
  {
    question:
      "What was the role of Themistocles at Marathon, and what would he later become known for?",
    answer:
      "He was one of the ten Athenian generals at Marathon, and would later become known as the founder of the Athenian navy.",
  },
  {
    question:
      "How did the Persian Empire's approach to governance differ from European states?",
    answer:
      "The Persian Empire maintained a more stable and uniform system of governance, while European states were characterized by variety and change.",
  },
  {
    question:
      "What was the significance of the Battle of Marathon in terms of Greek independence?",
    answer:
      "It was the first major victory that inspired Greek confidence and led to future successful resistance against Persian invasions.",
  },
  {
    question:
      "What was the composition of the Athenian command structure at Marathon?",
    answer:
      "There were eleven members: ten generals (one from each Athenian tribe) and one Polemarch.",
  },
  {
    question:
      "How did the Persian Empire's size compare to other ancient Asian kingdoms?",
    answer:
      "It was the largest empire of its time, incorporating all major Asian kingdoms except China.",
  },
  {
    question:
      "What was the significance of the Battle of Marathon in terms of military tactics?",
    answer:
      "It demonstrated the effectiveness of the Greek phalanx formation against the more loosely organized Persian forces.",
  },
  {
    question:
      "What was the role of local Greek islanders in the Persian campaign?",
    answer:
      "They were compelled to join the Persian forces with their ships and men.",
  },
  {
    question:
      "How did the Battle of Marathon influence future Persian-Greek conflicts?",
    answer:
      "It set the pattern for future conflicts, with Persia attempting larger invasions that were ultimately repelled by Greek forces.",
  },
  {
    question:
      "What was the long-term historical significance of the Battle of Marathon?",
    answer:
      "It marked a critical turning point in history, establishing European military confidence and independence from Asian dominance, and setting the stage for the development of Western civilization.",
  },
];

const FlashcardDemo = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handlePrevCard = () => {
    setCurrentCardIndex((prev) =>
      prev === 0 ? demoFlashcards.length - 1 : prev - 1
    );
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prev) =>
      prev === demoFlashcards.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="my-12">
      <h2 className="text-center font-pixel text-2xl mb-8 text-retro-pink">
        Try a Flashcard!
      </h2>
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
      <p className="text-center font-retro text-lg text-white mt-4">
        Card {currentCardIndex + 1} of {demoFlashcards.length}
      </p>
    </div>
  );
};

export default FlashcardDemo;
