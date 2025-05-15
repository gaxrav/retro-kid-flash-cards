
import CategoryCard from "./CategoryCard";

const categories = [
  { 
    title: "Math", 
    cardsCount: 24, 
    color: "teal",
    icon: "🧮"
  },
  { 
    title: "Science", 
    cardsCount: 18, 
    color: "pink",
    icon: "🧪"
  },
  { 
    title: "History", 
    cardsCount: 30, 
    color: "yellow",
    icon: "📜"
  },
  { 
    title: "Geography", 
    cardsCount: 15, 
    color: "purple",
    icon: "🌍"
  },
  { 
    title: "Languages", 
    cardsCount: 42, 
    color: "blue",
    icon: "💬"
  },
  { 
    title: "Computer Science", 
    cardsCount: 27, 
    color: "teal",
    icon: "💻"
  }
];

const CategoryGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      {categories.map((category, index) => (
        <CategoryCard 
          key={index}
          title={category.title}
          cardsCount={category.cardsCount}
          color={category.color}
          icon={category.icon}
        />
      ))}
    </div>
  );
};

export default CategoryGrid;
