import { useState, useRef } from "react";
import { gsap } from "gsap";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import React from "react";
import BasicTabs from "./BasicTabs";
import NavBar from "../NavBar/NavBar";

function Shop() {
  // State to keep track of the currently displayed image
  const [displayedImage, setDisplayedImage] = useState("./Product.png");
  const [value, setValue] = React.useState<number | null>(2);

  const imageRef = useRef(null);

  // Handler to change the displayed image with GSAP animation
  const handleImageClick = (newImage: string) => {
    const tl = gsap.timeline();

    tl.to(imageRef.current, {
      y: 20,
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setDisplayedImage(newImage);
        tl.to(imageRef.current, { y: -20, opacity: 1, duration: 0.5 });
      },
    });
  };

  const [selectedSize, setSelectedSize] = useState("");

  const handleClick = (size: string) => {
    setSelectedSize(size);
  };

  const sizes = ["S", "M", "L", "XL"];

  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const initialImgLike = "./Like.svg";
  const newImgLike = "./LikeClicked.png";
  const [imgLike, setImgLike] = useState(initialImgLike);
  const [imgWidth, setImgWidth] = useState("24px");

  const handleLikeClick = () => {
    setImgLike((prevSrc) => {
      if (prevSrc === initialImgLike) {
        setImgWidth("40px"); // New width for newImgLike
        return newImgLike;
      } else {
        setImgWidth("40px"); // Reset to default width for initialImgLike
        return initialImgLike;
      }
    });
  };
  return (
    <div className=" overflow-x-hidden">
      <NavBar />
      <div className="flex justify-center items-center mt-5 gap-x-5">
        <div className="flex gap-x-2">
          <div className="flex flex-col gap-y-2">
            <div
              className="bg-[#FBFBFB] flex items-center justify-center w-28 h-28 cursor-pointer"
              onClick={() => handleImageClick("./Product8.png")}
            >
              <img src="./Product8.png" className="w-32" alt="Shop Product 1" />
            </div>
            <div
              className="bg-[#FBFBFB] flex items-center justify-center w-28 h-28 cursor-pointer"
              onClick={() => handleImageClick("./Product.png")}
            >
              <img src="./Product.png" alt="Product" />
            </div>
            <div
              className="bg-[#FBFBFB] flex items-center justify-center w-28 h-28 cursor-pointer"
              onClick={() => handleImageClick("./Product8.png")}
            >
              <img src="./Product8.png" className="w-32" alt="Shop Product 1" />
            </div>
            <div
              className="bg-[#FBFBFB] flex items-center justify-center w-28 h-28 cursor-pointer"
              onClick={() => handleImageClick("./Product.png")}
            >
              <img src="./Product.png" alt="Product" />
            </div>
          </div>
          <div className="bg-[#FBFBFB] flex items-center justify-center p-20 ">
            <img
              ref={imageRef}
              src={displayedImage}
              className=" w-full h-auto"
              alt="Displayed Product"
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col justify-start gap-y-2">
          <h1 className=" font-bold text-xl">Barberton Daisy</h1>
          <div className="flex justify-between">
            <p className="text-[#46A358] font-bold">$119.00</p>
            <div className="flex gap-x-2 ">
              <Box
                sx={{
                  "& > legend": { mt: 2 },
                }}
              >
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(_event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </Box>
              <p className="text-[#3D3D3D]">19 Customer Review</p>
            </div>
          </div>
          <hr />
          <p className="font-bold">Short description:</p>
          <p className=" leading-7">
            The ceramic cylinder planters come with a wooden stand to help
            elevate your plants off the ground. The ceramic cylinder planters
            come with a wooden stand to help elevate your plants off the ground.
          </p>
          <p className="font-bold">Size</p>
          <div className="flex gap-x-2 pb-3">
            {sizes.map((size) => (
              <div
                key={size}
                onClick={() => handleClick(size)}
                className={`rounded-full w-9 h-9 flex justify-center items-center cursor-pointer border ${
                  selectedSize === size
                    ? "border-[#46A358] text-[#46A358] font-bold border-2"
                    : "border-black text-black"
                }`}
              >
                {size}
              </div>
            ))}
          </div>
          <div className="flex gap-x-6 items-center pb-3">
            <div className="flex gap-x-4 items-center">
              <button
                onClick={increment}
                className="flex justify-center items-center text-white font-bold bg-[#46A358] w-10 h-10 rounded-full"
              >
                +
              </button>
              <p className="font-bold">{count}</p>
              <button
                onClick={decrement}
                className="flex justify-center items-center text-white font-bold bg-[#46A358] w-10 h-10 rounded-full"
              >
                -
              </button>
            </div>
            <div className="flex gap-x-2">
              <button className="uppercase w-36 p-2 rounded font-semibold bg-[#46A358] text-white ">
                Buy now
              </button>
              <button className="uppercase w-36 rounded font-semibold text-[#46A358] bg-transparent border border-[#46A358] p-2">
                Add to cart
              </button>
              <button
                onClick={handleLikeClick}
                className="rounded w-10 flex items-center justify-center font-semibold text-[#46A358] bg-transparent border border-[#46A358] p-2"
              >
                <img src={imgLike} alt="" style={{ width: imgWidth }} />
              </button>
            </div>
          </div>
          <p className="text-[#727272]">SKU: 1995751877966</p>
          <p className="text-[#727272]">Categories: Potter Plants</p>
          <p className="text-[#727272]">Tags: Home, Garden, Plants</p>
          <div className="flex gap-x-5 items-center pt-3">
            <p className="font-semibold">Share this product:</p>
            <div className="flex gap-x-5">
              <img
                className=" cursor-pointer"
                src="./FacebookIcon.svg"
                alt=""
              />
              <img className=" cursor-pointer" src="./TwitterIcon.svg" alt="" />
              <img
                className=" cursor-pointer"
                src="./LinkedinIcon.svg"
                alt=""
              />
              <img className=" cursor-pointer" src="./MessageIcon.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
      <br />

      <BasicTabs />
    </div>
  );
}

export default Shop;
