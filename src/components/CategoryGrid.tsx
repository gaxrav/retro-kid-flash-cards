import CategoryCard from "./CategoryCard";

const categories = [
  {
    title: "History",
    cardsCount: 30,
    color: "yellow",
    icon: "📜",
  },
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
