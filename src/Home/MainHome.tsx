import { useEffect, useRef, useState } from "react";
import AsideHome from "./AsideHome";
import AllPlants from "./AllPlants";
import NewArrivals from "./NewArrivals";
import Sales from "./Sales";
import gsap from "gsap";
import FindMoreCard from "./FindMoreCard";
import BlogCard from "./BlogCard";
import Footer from "../Footer/Footer";

function MainHome() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const contentRef = useRef<HTMLDivElement>(null);

  const handleClick = (index: number) => {
    if (index !== activeIndex) {
      if (contentRef.current) {
        gsap.to(contentRef.current, {
          x: -100,
          opacity: 0,
          duration: 0.5,
          onComplete: () => {
            setActiveIndex(index);
          },
        });
      } else {
        setActiveIndex(index);
      }
    }
  };

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 }
      );
    }
  }, [activeIndex]);

  const menuItems = ["All Plants", "New Arrivals", "Sale"];

  const renderComponent = () => {
    switch (activeIndex) {
      case 0:
        return <AllPlants />;
      case 1:
        return <NewArrivals />;
      case 2:
        return <Sales />;
      default:
        return <AllPlants />;
    }
  };

  const [activeButton, setActiveButton] = useState<number>(0);

  const handleButtonClick = (buttonId: number) => {
    setActiveButton(buttonId);
  };
  return (
    <div className="relative">
      <div className=" flex  justify-center  ">
        <AsideHome />
        <div className=" w-2/3 ">
          <div className="flex justify-center md:justify-between overflow-hidden pl-5 h-10 w-full">
            <ul className="flex mr-7 md:mr-0  gap-x-3 md:gap-x-5 cursor-pointer ">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  style={{
                    fontWeight: activeIndex === index ? "bold" : "",
                    textDecoration: activeIndex === index ? "underline" : "",
                    textUnderlineOffset:
                      activeIndex === index ? "1.125rem" : "",
                    color: activeIndex === index ? "#46A358" : "",
                    textDecorationColor: activeIndex === index ? "#46A358" : "",
                    textDecorationThickness: activeIndex === index ? "4px" : "",
                  }}
                  onClick={() => handleClick(index)}
                  className="hover:underline underline-offset-[1.125rem] decoration-[#46A358] decoration-4 hover:font-bold whitespace-nowrap text-sm md:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
            <div className="md:flex md:items-start hidden md:visible h-10">
              <p className="text-xs font-Poppins text-[#3D3D3D] font-semibold md:text-base">
                Sort by:
              </p>
              <select
                className="text-xs font-Poppins text-[#3D3D3D]  font-semibold md:text-base"
                name=""
                id=""
              >
                <option value="">Default sorting</option>
              </select>
            </div>
          </div>
          <br />
          <div ref={contentRef}>{renderComponent()}</div>
        </div>
      </div>
      <div className="md:visible invisible md:flex absolute top-auto mt-12 gap-x-3 right-9">
        {[1, 2, 3, "»"].map((button, index) => (
          <button
            key={index}
            className={`text-lg font-lg border border-solid border-[#E5E5E5] rounded w-9 h-9 ${
              activeButton === index
                ? "bg-[#46A358] text-white font-bold"
                : "text-black"
            }`}
            onClick={() => handleButtonClick(index)}
          >
            {button}
          </button>
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="flex flex-col gap-y-6 md:gap-y-0  md:flex-row justify-center md:justify-around items-center overflow-hidden">
        <FindMoreCard
          imagePath="SummerCactus.png"
          title="Summer Cactus & Succulents"
          description="We are an online plant shop offering a wide range of cheap and trendy plants"
        />
        <FindMoreCard
          imagePath="StylingTrends.png"
          title="Styling Trends & much more"
          description="We are an online plant shop offering a wide range of cheap and trendy plants"
        />
      </div>
      <br />
      <br />
      <br />
      <div className="flex flex-col items-center gap-y-5 md:gap-y-0 md:flex-row md:justify-around">
        <BlogCard
          imgLink="./BlogPlant1.png"
          dateBlog="September 12 I Read in 6 minutes"
          title="Cactus & Succulent Care Tips"
          description="Cacti are succulents are easy care plants for any home or patio."
        />
        <BlogCard
          imgLink="./BlogPlant2.png"
          dateBlog="September 13 I Read in 2 minutes"
          title="Top 10 Succulents for Your Home"
          description="Best in hanging baskets. Prefers medium to high light."
        />
        <BlogCard
          imgLink="./BlogPlant3.png"
          dateBlog="September 15 I Read in 3 minutes"
          title="Cacti & Succulent Care Tips"
          description="Cacti and succulents thrive in containers and because most are.."
        />
        <BlogCard
          imgLink="./BlogPlant4.png"
          dateBlog="September 15 I Read in 2 minutes"
          title="Best Houseplants Room by Room"
          description="The benefits of houseplants are endless. In addition to.."
        />
      </div>
      <br />
      <Footer />
    </div>
  );
}

export default MainHome;
