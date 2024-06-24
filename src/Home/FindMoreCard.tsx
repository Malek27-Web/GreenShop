interface Props {
  imagePath: string;
  title: string;
  description: string;
}

function FindMoreCard({ imagePath, title, description }: Props) {
  return (
    <div className="h-68 md:visible  flex-row shadow-lg  lg:flex  w-7/12 md:w-5/12 items-center justify-center pb-4 md:pb-1 rounded md:rounded-none bg-[#FBFBFB] relative">
      {" "}
      <img src={imagePath} alt="" />
      <div className="flex flex-col whitespace-normal items-center md:items-end md:pr-5  gap-y-4 ">
        <p className=" text-lg   font-extrabold  text-center md:text-right text-[#3D3D3D]">
          {title}
        </p>
        <p className=" text-center md:text-right text-base  text-[#727272]   rounded ">
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
