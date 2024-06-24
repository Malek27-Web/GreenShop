import { useState } from "react";

interface Props {
  imgLink: string;
  dateBlog: string;
  title: string;
  description: string;
}
function BlogCard({ imgLink, dateBlog, title, description }: Props) {
  const [isReadMoreClicked, setIsReadMoreClicked] = useState(false);

  const handleReadMoreClick = () => {
    setIsReadMoreClicked(!isReadMoreClicked);
  };
  return (
    <div className="bg-[#FBFBFB]  rounded md:rounded-none w-4/5 md:w-1/5 ">
      <img src={imgLink} className="w-full" />
      <div className="flex flex-col justify-center gap-y-2 p-2 ">
        <p className="text-[#46A358] font-semibold">{dateBlog}</p>
        <p className=" font-bold text-lg">{title}</p>

        <p className="text-[#727272]">{description}</p>
        <p
          className={`capitalize ${isReadMoreClicked ? "text-[#46A358]" : ""}`}
          onClick={handleReadMoreClick}
          style={{ cursor: "pointer" }}
        >
          read more →
        </p>
      </div>
    </div>
  );
}

export default BlogCard;
