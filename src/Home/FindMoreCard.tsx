interface Props {
  imagePath: string;
  title: string;
  description: string;
}

function FindMoreCard({ imagePath, title, description }: Props) {
  return (
    <div className="h-68 md:visible    flex-row invisible md:flex   w-2/5 items-center justify-center  bg-[#FBFBFB] relative">
      {" "}
      <img src={imagePath} alt="" className="w-3/5" />
      <div className="flex flex-col whitespace-normal items-end pr-6  gap-y-4 ">
        <p className=" text-lg leading-10  font-extrabold  text-right text-[#3D3D3D]">
          {title}
        </p>
        <p className="text-right text-base leading-7 text-[#727272]   rounded ">
          {description}
        </p>
        <button className="text-white  w-32 font-semibold rounded p-2  whitespace-nowrap bg-[#46A358]">
          Find More →
        </button>
      </div>
      <img src="./Decoration.png" className="absolute left-0 bottom-0" alt="" />
    </div>
  );
}

export default FindMoreCard;
