import { useState } from "react";
import Slider from "@mui/material/Slider";
import React from "react";

function AsideHome() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleClick = (index: number) => {
    setActiveIndex(index);
  };
  const listItems = [
    { name: "House Plants", count: 33 },
    { name: "Potter Plants", count: 12 },
    { name: "Seeds", count: 65 },
    { name: "Small Plants", count: 39 },
    { name: "Big Plants", count: 23 },
    { name: "Succulents", count: 17 },
    { name: "Terrariums", count: 19 },
    { name: "Gardening", count: 13 },
    { name: "Accessories", count: 18 },
  ];
  const [selectedItem, setSelectedItem] = useState<number | null>(null);

  const handleClickSize = (index: number) => {
    setSelectedItem(index);
  };

  const items = [
    { text: "Small", count: 119 },
    { text: "Medium", count: 86 },
    { text: "Large", count: 78 },
  ];

  function valuetext(value: number) {
    return `${value}°C`;
  }
  const [value, setValue] = React.useState<number[]>([39, 1500]);

  const handleChange = (_event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
  };
  return (
    <div className="bg-[#FBFBFB] h-[47rem]   ml-32 md:flex hidden  md:visible ">
      <div className="flex-col p-4">
        <div>
          <h1 className="pl-3 text-[#3D3D3D] font-Poppins font-bold text-lg">
            Categories
          </h1>
          <ul className="flex-col pl-8  ">
            {listItems.map((item, index) => (
              <li
                key={index}
                className={`flex leading-9  text-sm  whitespace-nowrap justify-between  font-Poppins text-[#3D3D3D] font-semibold cursor-pointer w-full ${
                  activeIndex === index ? "text-[#46A358]" : "text-[#3D3D3D]"
                }`}
                onClick={() => handleClick(index)}
              >
                <p>{item.name}</p> <span>({item.count})</span>
              </li>
            ))}
          </ul>
        </div>
        <br />
        <div className="">
          <h1 className="pl-4 text-[#3D3D3D] font-bold text-lg">Price Range</h1>
          <Slider
            getAriaLabel={() => "Temperature range"}
            value={value}
            min={39}
            max={1500}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            sx={{
              width: 300,
              color: "success.main",
            }}
          />
          <p className="pl-4 text-[#3D3D3D] font-Poppins font-medium">
            Price:{" "}
            <span className="text-[#46A358]">
              {" "}
              ${value[0]} - ${value[1]}
            </span>
          </p>
          <br />
          <button className=" p-2 rounded text-white w-20 bg-[#46A358]">
            Filter
          </button>
        </div>
        <br />
        <div>
          <h1 className="pl-4 text-[#3D3D3D] font-bold text-lg">Size</h1>
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => handleClickSize(index)}
                className={`flex leading-9 justify-between gap-x-24 whitespace-nowrap pl-8  font-semibold cursor-pointer ${
                  selectedItem === index ? "text-[#46A358]" : "text-[#3D3D3D]"
                }`}
              >
                <p>{item.text}</p> <span>({item.count})</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AsideHome;
