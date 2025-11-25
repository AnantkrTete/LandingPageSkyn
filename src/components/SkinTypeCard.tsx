import { HelpCircle } from "lucide-react"; // icon library (already included in shadcn)

// Example image — replace with your actual import


const SkinTypeCard = ({ title, img }: { title: string; img: string }) => {
  return (
    <div className="w-[250px] rounded-2xl overflow-hidden shadow-md bg-white border border-neutral-200">
      
      {/* TOP SECTION */}
      <div className="relative bg-white pt-10 pb-6 flex flex-col items-center">

        
        {/* Help icon */}
        <HelpCircle className="absolute top-3 right-3 w-5 h-5 text-black/50" />

        {/* Image container with blue border */}
        <div className=" p-4 rounded-md">
          <img
            src={img}
            alt={title}
            className="w-[145px] h-[145px] object-contain"
          />
        </div>
      </div>

      {/* BOTTOM SECTION — Yellow */}
      <div className="bg-yellow-200 py-4 text-center">
        <p className="font-montserrat text-[22px] font-medium text-black">
          {title}
        </p>
      </div>

    </div>
  );
};

export default SkinTypeCard;
