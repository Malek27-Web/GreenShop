import { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import Card from "../Home/Card";

function SliderPlants() {
  const [selectedLi, setSelectedLi] = useState<number>(0);
  const [previousLi, setPreviousLi] = useState<number>(0);
  const cardContainerRef = useRef<HTMLDivElement>(null);

  const handleDotClick = (index: number) => {
    setPreviousLi(selectedLi);
    setSelectedLi(index);
  };

  const cards = [
    {
      imagePath: "./Product.png",
      name: "Barberton Daisy",
      price: "$119.00",
    },

    {
      imagePath: "./Product2.png",
      name: "Angel Wing Begonia",
      price: "$169.00",
    },
    {
      imagePath: "./Product3.png",
      name: "African Violet",
      price: "$199.00",
    },
    {
      imagePath: "./Product5.png",
      name: "Blushing Bromeliad",
      price: "$139.00",
    },
    {
      imagePath: "./Product6.png",
      name: "Aluminum Plant",
      price: "$179.00",
    },
    {
      imagePath: "./Product7.png",
      name: "Bird's Nest Fern",
      price: "$99.00",
    },
    {
      imagePath: "./Product8.png",
      name: "Broadleaf Lady Palm",
      price: "$59.00",
    },
    {
      imagePath: "./Product.png",
      name: "Barberton Daisy",
      price: "$119.00",
    },
    {
      imagePath: "./Product3.png",
      name: "African Violet",
      price: "$199.00",
    },
    {
      imagePath: "./Product5.png",
      name: "Blushing Bromeliad",
      price: "$139.00",
    },
  ];

  const visibleCards = 5;
  const startIndex = selectedLi * visibleCards;
  const endIndex = startIndex + visibleCards;

  useEffect(() => {
    if (cardContainerRef.current) {
      const direction = selectedLi > previousLi ? 1 : -1; // 1 for forward, -1 for backward
      const xValue = direction === 1 ? 100 : -100;

      gsap.fromTo(
        cardContainerRef.current,
        { x: xValue, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 }
      );
    }
  }, [selectedLi, previousLi]);

  return (
    <div>
      <div className="flex flex-col w-1/2 justify-center items-center">
        <h1 className="font-semibold text-[#46A358]  text-xl leading-9 underline underline-offset-8  ">
          Related Products:
        </h1>
      </div>

      <br />
      <div className="flex justify-around" ref={cardContainerRef}>
        {cards.slice(startIndex, endIndex).map((card, index) => (
          <Card
            key={index}
            imagePath={card.imagePath}
            name={card.name}
            price={card.price}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <ul className="flex">
          {Array.from({ length: Math.ceil(cards.length / visibleCards) }).map(
            (_dot, index) => (
              <li
                key={index}
                className={`font-bold text-4xl cursor-pointer ${
                  selectedLi === index ? "text-[#46A358]" : "text-[#46A3584D]"
                }`}
                onClick={() => handleDotClick(index)}
              >
                {"."}
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default SliderPlants;
