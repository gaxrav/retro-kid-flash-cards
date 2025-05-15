
const PixelDecoration = ({ position }: { position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight" }) => {
  const positions = {
    topLeft: "top-0 left-0",
    topRight: "top-0 right-0",
    bottomLeft: "bottom-0 left-0",
    bottomRight: "bottom-0 right-0"
  };
  
  const getRandomColor = () => {
    const colors = ["bg-retro-teal", "bg-retro-pink", "bg-retro-yellow", "bg-retro-purple"];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  return (
    <div className={`absolute ${positions[position]} w-24 h-24 pointer-events-none`}>
      <div className="relative">
        <div className={`absolute top-0 left-0 w-8 h-8 ${getRandomColor()}`}></div>
        <div className={`absolute top-0 left-8 w-8 h-8 ${getRandomColor()}`}></div>
        <div className={`absolute top-8 left-0 w-8 h-8 ${getRandomColor()}`}></div>
      </div>
    </div>
  );
};

export default PixelDecoration;
