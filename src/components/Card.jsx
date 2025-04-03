

export default function Card() {
  const cards = ["Card 1", "Card 2", "Card 3"];

  return (
    <div className="relative min-h-[200vh] flex flex-col items-center">
      <div className="sticky top-20 flex flex-col gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="w-[80vw] h-40 bg-blue-500 text-white flex items-center justify-center rounded-xl shadow-lg"
            style={{ top: `${i * 100}px`, position: "sticky" }}
          >
            {card}
          </div>
        ))}
      </div>
    </div>
  );
}
