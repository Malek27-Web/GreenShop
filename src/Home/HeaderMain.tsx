import { useMediaQuery } from "react-responsive";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function HeaderMain() {
  const isMdOrLarger = useMediaQuery({ query: "(min-width: 768px)" });
  const [selectedLi, setSelectedLi] = useState<number>(0);
  const imgRef = useRef<HTMLImageElement>(null);
  const titleTextRef = useRef<HTMLParagraphElement>(null);
  const descriptionTextRef = useRef<HTMLParagraphElement>(null);

  const titles = [
    "Let’s make a better planet",
    "Discover the beauty of nature",
    "Bring green to your life",
  ];
  const descriptions = [
    "We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!",
    "Explore our collection of beautiful and unique plants that bring life to any space.",
    "Create a lush, green oasis in your home with our selection of vibrant plants.",
  ];
  const shortDescriptions = [
    "We are an online plant shop offering a range of trendy plants.",
    "Explore our collection of beautiful and unique plants.",
    "Create a lush, green oasis in your home with our vibrant plants.",
  ];
  const images = ["./Plant.svg", "./Plant2.png", "./Plant3.png"];

  useEffect(() => {
    if (imgRef.current) {
      gsap.fromTo(
        imgRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 }
      );
    }
    if (titleTextRef.current && descriptionTextRef.current) {
      gsap.fromTo(
        [titleTextRef.current, descriptionTextRef.current],
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.1 }
      );
    }
  }, [selectedLi]);

  const handleClick = (index: number) => {
    if (index !== selectedLi) {
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          x: -100,
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            setSelectedLi(index);
            gsap.fromTo(
              imgRef.current,
              { x: 100, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.5 }
            );
          },
        });
      } else {
        setSelectedLi(index);
      }

      if (titleTextRef.current && descriptionTextRef.current) {
        gsap.to([titleTextRef.current, descriptionTextRef.current], {
          x: -100,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          onComplete: () => {
            setSelectedLi(index);
            gsap.fromTo(
              [titleTextRef.current, descriptionTextRef.current],
              { x: 100, opacity: 0 },
              { x: 0, opacity: 1, duration: 0.5, stagger: 0.1 }
            );
          },
        });
      }
    }
  };
  const getTitleWithHighlight = (title: string) => {
    const words = title.split(" ");
    const lastWord = words.pop();
    return (
      <>
        {words.join(" ")} <span className="text-[#46A358]">{lastWord}</span>
      </>
    );
  };
  return (
    <div>
      <div className=" flex relative    justify-center">
        <div className=" pl-7 md:bg-none flex  items-center    justify-around flex-row-reverse bg-[url('./BackgroundColor.svg')] bg-repeat bg-center bg-cover md:bg-[#F5F5F580] w-10/12  md:w-10/12 h-56 rounded-3xl md:rounded-none md:h-96  mt-3">
          <img
            className="w-4/12 md:w-3/12"
            src={images[selectedLi]}
            ref={imgRef}
          />
          <div className="flex flex-col  gap-y-1 md:gap-y-4 w-2/6 ">
            <p className=" font-Poppins text-[#3D3D3D] whitespace-nowrap   text-xs md:text-lg font-medium uppercase">
              Welcome to GreenShop
            </p>
            <p
              ref={titleTextRef}
              className="text-sm  md:text-4xl font-extrabold font-Poppins text-[#3D3D3D] uppercase"
            >
              {getTitleWithHighlight(titles[selectedLi])}
            </p>
            <p
              ref={descriptionTextRef}
              className="text-[#727272] font-Poppins text-[10px] w-5/6 md:text-sm"
            >
              {isMdOrLarger
                ? descriptions[selectedLi]
                : shortDescriptions[selectedLi]}
            </p>
            <button className=" bg-transparent self-start  text-[#46A358] md:bg-[#46A358] font-Poppins font-bold  text-sm rounded w-5/6 md:w-3/6 h-9 text-center md:text-white uppercase text-nowrap">
              {isMdOrLarger ? "SHOP NOW" : "SHOP NOW → "}
            </button>
          </div>
        </div>
        <br />
        <div className=" absolute bottom-2">
          <ul className="flex">
            {[".", ".", "."].map((dot, index) => (
              <li
                key={index}
                className={`font-bold text-4xl cursor-pointer ${
                  selectedLi === index ? "text-[#46A358]" : "text-[#46A3584D]"
                }`}
                onClick={() => handleClick(index)}
              >
                {dot}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeaderMain;
