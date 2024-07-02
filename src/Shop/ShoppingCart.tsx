import { useEffect, useState } from "react";
import NavBar from "../NavBar/NavBar";
import CartCard from "./CartCard";
import SliderPlants from "./SliderPlants";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function ShoppingCart() {
  interface CartItem {
    imagePath: string;
    name: string;
    refrence: string;
    price: string;
    count: number;
  }

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      imagePath: "./Product.png",
      name: "Barberton Daisy",
      refrence: "SKU: 1995751877966",
      price: "119.00",
      count: 1,
    },
    {
      imagePath: "./Product5.png",
      name: "Blushing Bromeliad",
      refrence: "SKU: 19957518757065",
      price: "139.00",
      count: 1,
    },
    {
      imagePath: "./Product6.png",
      name: "Aluminum Plant",
      refrence: "SKU: 1995751877786",
      price: "179.00",
      count: 1,
    },
  ]);

  const [subtotal, setSubtotal] = useState(0);

  const calculateSubtotal = (items: CartItem[]) => {
    const newSubtotal = items.reduce((sum, item) => {
      const price = parseFloat(item.price);
      return sum + price * item.count;
    }, 0);
    setSubtotal(newSubtotal);
  };
  const handleDelete = (index: number) => {
    const newItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newItems);
    calculateSubtotal(newItems);
  };
  const handleCountChange = (index: number, newCount: number) => {
    const newItems = [...cartItems];
    newItems[index].count = newCount;
    calculateSubtotal(newItems);
  };

  useEffect(() => {
    calculateSubtotal(cartItems);
  }, [cartItems]);

  const shippingCost = 16;
  const total = subtotal + shippingCost;

  return (
    <div>
      <NavBar />
      <div className="flex mt-5 justify-around">
        <div className=" flex flex-col gap-y-3 w-[48rem]">
          <div className="flex  justify-around ">
            <p>Products</p>
            <p className="pl-32">Price</p>
            <p>Quantity</p>
            <p>Total</p>
          </div>
          <div className="w-full h-[0.3px] bg-[#46A35880] border-solid self-center "></div>
          {cartItems.map((item, index) => (
            <CartCard
              key={index}
              imagePath={item.imagePath}
              name={item.name}
              refrence={item.refrence}
              price={item.price}
              onDelete={() => handleDelete(index)}
              onCountChange={(newCount) => handleCountChange(index, newCount)}
            />
          ))}
        </div>

        <div className="flex flex-col justify-start  w-1/5">
          <p className=" text-lg font-semibold text-[#3D3D3D] leading-7">
            Cart Totals
          </p>
          <div className="w-full h-[0.3px] bg-[#46A35880] border-solid self-center"></div>
          <p className="text-[#3D3D3D] text-base leading-9">Coupon Apply</p>
          <div className="relative flex">
            <input
              type="text"
              name="mail"
              id="mail"
              placeholder="Enter Coupon code here..."
              className="p-2 rounded-l placeholder:text-sm border border-[#46A358] placeholder:text-[#ACACAC] w-64"
            />
            <button className="bg-[#46A358] p-2 w-20 text-white rounded-r-md font-semibold">
              Apply
            </button>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="">Subtotal</p>
            <p className="font-bold text-[#3D3D3D]">${subtotal.toFixed(2)}</p>
          </div>
          <div className="flex items-center  justify-between mt-2">
            <p className=" whitespace-nowrap">Coupon Discount</p>
            <p className=" text-[#3D3D3D]">00.00</p>
          </div>
          <div className="flex items-center  justify-between mt-2">
            <p className="">Shipping</p>
            <p className="font-bold text-[#3D3D3D]">${shippingCost}.00</p>
          </div>
          <br />

          <div className="flex items-center  justify-between mt-2">
            <p className="font-bold">Total</p>
            <p className="font-bold text-[#46A358] ">${total.toFixed(2)}</p>
          </div>
          <br />
          <div className="flex flex-col  items-center ">
            <button className="bg-[#46A358] text-white p-2 rounded w-full">
              <Link to="/checkout"> Proceed To Checkout</Link>
            </button>
            <p className="pt-2 text-[#46A358] cursor-pointer">
              <Link to="/home">Continue Shopping</Link>
            </p>
          </div>
        </div>
      </div>
      <br />
      <SliderPlants />
      <br />
      <Footer />
    </div>
  );
}

export default ShoppingCart;
