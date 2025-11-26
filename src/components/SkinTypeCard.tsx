import { HelpCircle } from "lucide-react";

const SkinTypeCard = ({
  title,
  img,
  selected,
  onSelect,
}: {
  title: string;
  img: string;
  selected: boolean;
  onSelect: () => void;
}) => {
  return (
    <div
      onClick={onSelect}
      className={`
        w-[250px] rounded-2xl overflow-hidden shadow-md border cursor-pointer transition-all
        ${selected ? "border-black scale-105" : "border-neutral-200"}
      `}
    >
      {/* TOP SECTION */}
      <div className="relative bg-white pt-10 pb-6 flex flex-col items-center">
        <HelpCircle className="absolute top-3 right-3 w-5 h-5 text-black/50" />

        <div className="p-4 rounded-md">
          <img src={img} alt={title} className="w-[145px] h-[145px] object-contain" />
        </div>
      </div>

      {/* BOTTOM */}
<div
  className={`
    h-[70px] flex items-center justify-center text-center
    ${selected ? "bg-yellow-400" : "bg-yellow-200"}
  `}
>
  <p className="font-montserrat text-[22px] font-medium text-black px-2">
    {title}
  </p>
</div>

    </div>
  );
};

export default SkinTypeCard;
