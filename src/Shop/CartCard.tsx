import { useState, useEffect } from "react";

interface Props {
  imagePath: string;
  name: string;
  refrence: string;
  price: string;
  onDelete: () => void;
  onCountChange: (newCount: number) => void;
}

function CartCard({
  imagePath,
  name,
  refrence,
  price,
  onDelete,
  onCountChange,
}: Props) {
  const [count, setCount] = useState(1);
  const [total, setTotal] = useState(parseFloat(price) || 0);

  const increment = () => {
    setCount((prevCount) => {
      const newCount = prevCount + 1;
      setTotal(newCount * parseFloat(price));
      onCountChange(newCount);
      return newCount;
    });
  };

  const decrement = () => {
    setCount((prevCount) => {
      const newCount = prevCount > 1 ? prevCount - 1 : prevCount;
      setTotal(newCount * parseFloat(price));
      onCountChange(newCount);
      return newCount;
    });
  };

  useEffect(() => {
    setTotal(count * parseFloat(price));
  }, [count, price]);

  return (
    <div className="bg-[#FBFBFB] h-24 flex justify-around w-[54rem] items-center">
      <div className="flex items-center gap-x-3">
        <img src={imagePath} className="w-24" alt={name} />
        <div className="flex flex-col">
          <p className="text-[#3D3D3D] font-medium">{name}</p>
          <p className="text-[#A5A5A5]">{refrence}</p>
        </div>
      </div>
      <p>${price}</p>
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
      <p className="font-bold text-[#46A358]">${total.toFixed(2)}</p>
      <img
        src="./Delete.svg"
        alt="delete"
        onClick={onDelete}
        className="cursor-pointer"
      />
    </div>
  );
}

export default CartCard;
