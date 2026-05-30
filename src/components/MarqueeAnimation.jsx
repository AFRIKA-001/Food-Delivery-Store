import MarqueeImages from "./marqueeImages";

function MarqueeAnimation() {
  const productCards = [
    { id: 1, image: "🍊" },
    { id: 2, image: "🍉" },
    { id: 3, image: "🍓" },
    { id: 4, image: "🍎" },
    { id: 5, image: "🍑" },
    { id: 6, image: "🍇" },
    { id: 7, image: "🥕" },
    { id: 8, image: "🫐" },
    { id: 9, image: "🍋" },
    { id: 10, image: "🫑" },
    { id: 11, image: "🌶️" },
  ];

  return (
    <section className="py-22 bg-linear-to-r from-orange-400 via-yellow-300 to-orange-400 border-y border-orange-100 overflow-hidden">

      <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-800 mb-8">
        Fresh Ingredients Delivered Daily
      </h2>

      <div className="relative flex overflow-hidden">

        <ul className="flex min-w-full gap-8 animate-marquee">
          {productCards.map((item) => (
            <li key={item.id}>
              <MarqueeImages items={item} />
            </li>
          ))}
        </ul>

        <ul className="flex min-w-full gap-8 animate-marquee">
          {productCards.map((item) => (
            <li key={`duplicate-${item.id}`}>
              <MarqueeImages items={item} />
            </li>
          ))}
        </ul>

      </div>

    </section>
  );
}

export default MarqueeAnimation;