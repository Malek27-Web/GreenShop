import { useState } from "react";

function NavBar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  const menuItems = ["Home", "Shop", "Plant Care", "Blogs"];

  return (
    <div>
      <div className="hidden md:visible md:flex flex-col gap-y-2 ">
        <nav className="flex justify-around p-4 items-center ">
          <div>
            <img className="cursor-pointer" src="./Logo.svg" alt="Logo" />
          </div>
          <ul className="flex gap-x-5 cursor-pointer">
            {menuItems.map((item, index) => (
              <li
                key={index}
                style={{
                  fontWeight: activeIndex === index ? "bold" : "",
                  textDecoration: activeIndex === index ? "underline" : "",
                  textUnderlineOffset: activeIndex === index ? "2.125rem" : "",
                  color: activeIndex === index ? "#46A358" : "",
                  textDecorationColor: activeIndex === index ? "#46A358" : "",
                  textDecorationThickness: activeIndex === index ? "4px" : "",
                }}
                onClick={() => handleClick(index)}
                className="hover:underline underline-offset-[2.125rem] decoration-[#46A358] decoration-4 hover:font-bold"
              >
                {item}
              </li>
            ))}
          </ul>

          <ul className="flex gap-x-5 cursor-pointer items-center">
            <li>
              <img src="./Search.svg" alt="Search" />
            </li>
            <li>
              <img src="./ShoppingBefore.svg" alt="Shopping" />
            </li>
            <li>
              <button className="bg-[#46A358] p-2 flex items-center gap-x-2 text-white rounded w-28 justify-center">
                <img src="./Logout.svg" alt="Logout" />
                Login
              </button>
            </li>
          </ul>
        </nav>
        <div className="w-5/6 h-[0.3px] bg-[#46A35880] border-solid self-center"></div>
      </div>

      <div className="visible flex items-center justify-center gap-x-2 p-2 w-full mt-3 md:hidden">
        <div className="relative">
          <input
            type="text"
            placeholder="Find your plants"
            className="bg-[#F8F8F8] pl-10 pr-4 py-2 border rounded-lg outline-none"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <img className="h-5 w-5" src="./Search1.svg" alt="Search" />
          </div>
        </div>
        <div className="flex items-center justify-center bg-[#46A358] p-3 rounded-xl">
          <img src="./Filter.svg" alt="Filter" />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
