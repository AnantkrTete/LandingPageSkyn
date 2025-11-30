import { HelpCircle } from "lucide-react";

const SkinTypeCard = ({
  title,
  img,
  selected,
  onSelect,
  mobileWidth,
  mobileTextSize,
}: {
  title: string;
  img: string;
  selected: boolean;
  onSelect: () => void;
  mobileWidth?: string;
  mobileTextSize?: string;
}) => {
  return (
    <div
        onClick={onSelect}
        className={`
           ${mobileWidth ? mobileWidth : "w-[100px]"}  md:w-[250px] 
          min-h-170px] md:h-auto
          rounded-2xl overflow-hidden shadow-md border cursor-pointer transition-all
          ${selected ? "border-black scale-105" : "border-neutral-200"}
        `}
      >
        {/* TOP SECTION */}
        <div className="relative bg-white pt-3 md:pt-10 pb-2 md:pb-6 flex flex-col items-center">
          <HelpCircle className="absolute top-2 right-2 md:top-3 md:right-3 w-4 h-4 md:w-5 md:h-5 text-black/50" />

          <div className="p-2 md:p-4 rounded-md">
            <img 
              src={img} 
              alt={title} 
              className="w-[50px] h-[50px] md:w-[145px] md:h-[145px] object-contain" 
            />
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className={`
            h-[33px] md:h-[70px] 
            flex items-center justify-center text-center
            ${selected ? "bg-yellow-400" : "bg-yellow-200"}
          `}
        >
          <p className={`font-montserrat ${mobileTextSize ? mobileTextSize : "text-[13px]"} md:text-[22px] font-medium text-black px-2`}>
            {title}
          </p>
        </div>
      </div>

  );
};

export default SkinTypeCard;
