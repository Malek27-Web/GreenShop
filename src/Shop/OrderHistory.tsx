import * as React from "react";
import Radio from "@mui/material/Radio";
import OrderResumeCart from "./OrderResumeCart";
import { green } from "@mui/material/colors";

function OrderHistory() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className="w-1/4 ">
      <h1
        className="
           font-bold"
      >
        Your order
      </h1>

      <div className="flex leading-9 justify-between">
        <p className="font-semibold">Products</p>
        <p className="font-semibold">Subtotal</p>
      </div>
      <div className="w-full h-[0.3px] bg-[#46A35880] border-solid self-center "></div>
      <OrderResumeCart
        imagePath="./Product.png"
        name="Barberton Daisy"
        reference="SKU: 1995751877966"
        quantite={2}
        price={119.0}
      />
      <OrderResumeCart
        imagePath="./Product5.png"
        name="Blushing Bromeliad"
        reference="SKU: 19957518757065"
        quantite={2}
        price={139.0}
      />
      <OrderResumeCart
        imagePath="./Product6.png"
        name="Aluminum Plant"
        reference="SKU: 1995751877786"
        quantite={3}
        price={179.0}
      />
      <p className="text-right leading-9">
        Have a coupon code?
        <span className="cursor-pointer text-[#46A358] font-semibold ">
          click here
        </span>
      </p>

      <div className="flex flex-col">
        <div className="flex justify-between leading-9">
          <p>Subtotal</p>
          <p className="font-bold">$2,683,00</p>
        </div>
        <div className="flex justify-between leading-9">
          <p>Coupon Discount</p>
          <p> (-) 00.00</p>
        </div>
        <div className="flex justify-between leading-9">
          <p>Shipping </p>
          <p className="font-bold">$16.00</p>
        </div>
        <p className="cursor-pointer text-[#46A358] leading-9 text-right">
          View Shipping charge
        </p>
        <div className="w-full h-[0.3px] bg-[#46A35880] border-solid self-center leading-10 "></div>

        <div className="flex justify-between leading-9">
          <p className="font-bold">Total </p>
          <p className="font-bold text-[#46A358]">$2,699.00</p>
        </div>
        <p className="font-bold leading-10">Payment Method</p>

        <div className="flex flex-col gap-y-3 justify-center items-center">
          <div
            onClick={() => handleChange("a")}
            className={`flex items-center w-80 p-1 rounded border cursor-pointer ${
              selectedValue === "a" ? "border-green-500" : "border-[#EAEAEA]"
            }`}
          >
            <Radio
              checked={selectedValue === "a"}
              onChange={(event) => handleChange(event.target.value)}
              value="a"
              name="radio-buttons"
              inputProps={{ "aria-label": "B" }}
              sx={{
                color: green[800],
                "&.Mui-checked": {
                  color: green[600],
                },
              }}
            />
            <img src="./payment_method.svg" alt="" />
          </div>

          <div
            onClick={() => handleChange("b")}
            className={`flex items-center w-80 p-1 rounded border cursor-pointer ${
              selectedValue === "b" ? "border-green-500" : "border-[#EAEAEA]"
            }`}
          >
            <Radio
              checked={selectedValue === "b"}
              onChange={(event) => handleChange(event.target.value)}
              value="b"
              name="radio-buttons"
              inputProps={{ "aria-label": "B" }}
              sx={{
                color: green[800],
                "&.Mui-checked": {
                  color: green[600],
                },
              }}
            />
            <p>Dorect bank transfer</p>
          </div>

          <div
            onClick={() => handleChange("c")}
            className={`flex items-center w-80 p-1 rounded border cursor-pointer ${
              selectedValue === "c" ? "border-green-500" : "border-[#EAEAEA]"
            }`}
          >
            <Radio
              checked={selectedValue === "c"}
              onChange={(event) => handleChange(event.target.value)}
              value="c"
              name="radio-buttons"
              inputProps={{ "aria-label": "C" }}
              sx={{
                color: green[800],
                "&.Mui-checked": {
                  color: green[600],
                },
              }}
            />
            <p>Cash on delivery</p>
          </div>
          <br />
          <button className="bg-[#46A358] font-Poppins font-bold  text-sm rounded w-5/6 h-9 text-center text-white  text-nowrap">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderHistory;
