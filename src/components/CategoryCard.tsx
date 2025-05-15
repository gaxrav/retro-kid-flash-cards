
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CategoryCardProps {
  title: string;
  cardsCount: number;
  color: string;
  icon: string;
}

const CategoryCard = ({ title, cardsCount, color, icon }: CategoryCardProps) => {
  const [isHover, setIsHover] = useState(false);
  
  const colorClasses = {
    teal: "bg-retro-teal",
    pink: "bg-retro-pink",
    yellow: "bg-retro-yellow",
    purple: "bg-retro-purple",
    blue: "bg-retro-blue"
  };
  
  return (
    <Card 
      className={`${colorClasses[color as keyof typeof colorClasses]} border-4 border-retro-black retro-shadow transition-transform ${isHover ? "scale-105" : ""} cursor-pointer`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className="p-6 text-center">
        <div className="text-4xl mb-2">{icon}</div>
        <h3 className="font-pixel text-lg mb-2 text-retro-black">{title}</h3>
        <p className="font-retro text-xl text-retro-black">{cardsCount} cards</p>
        <Button 
          className="mt-4 font-retro text-xl bg-retro-black text-white border-2 border-white hover:bg-white hover:text-retro-black"
        >
          Study Now
        </Button>
      </div>
    </Card>
  );
};

export default CategoryCard;
