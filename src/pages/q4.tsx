import { useState } from "react";
import Header from "../components/Header";
import SkinTypeCard from "../components/SkinTypeCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { saveAnswer } from "../utils/saveResponse";

import img1 from "../assets/clearAcne.png";
import img2 from "../assets/reduceOily.png";
import img3 from "../assets/hydrateDrySkin.png";
import img4 from "../assets/evenOutskin.png";
import img5 from "../assets/MinimizePores.png";
import img6 from "../assets/reduceRed.png";
import img7 from "../assets/NaturalGlow.png";
import img8 from "../assets/Group 11.png";
import img9 from "../assets/AntiAging.png";

import PinkStar from "../assets/star pink q1.svg";
import blueBottle from "../assets/blueBottle.svg";
import Purplebottle from "../assets/purple top left.svg";
import yellowtop from "../assets/yellow top right.svg";
import yellowbottle from "../assets/yellowbottom.svg";
import GreenStar from "../assets/greenBottomRight.svg";
import purpleright from "../assets/Purpleright.svg";

const SkincareConcernPage = () => {
  const navigate = useNavigate();

  // ⭐ MULTI SELECT ARRAY
  const [selected, setSelected] = useState<string[]>([]);

  // ⭐ Click to toggle card
  const toggleSelect = (value: string) => {
    if (selected.includes(value)) {
      setSelected(selected.filter((item) => item !== value));
    } else {
      setSelected([...selected, value]);
    }
  };

  return (
    <div className="relative min-h-[1550px] w-full text-white bg-gradient-to-r from-[#0A0433] via-[#47126B] to-[#FE639C]">
      <Header mode="light" />

      {/* decorations untouched */}
            <div className="pointer-events-none absolute top-0 left-0 right-0 flex justify-between px-10">
              <div className="flex flex-col gap-10">
                <img src={PinkStar} className="w-20 md:w-18 transform translate-y-10 translate-x-69" />
                <img src={blueBottle} className="w-20 md:w-18 transform translate-y-227 -translate-x-10" />
                <img src={Purplebottle} className="w-20 md:w-18 transform translate-y-40 -translate-x-10" />
              </div>

              <div className="flex flex-col gap-10 items-end">
                <img src={GreenStar} className="w-20 md:w-18 transform translate-y-364 translate-x-10" />
                <img src={yellowtop} className="w-20 md:w-13 transform -translate-y-13 translate-x-10" />
                <img src={yellowbottle} className="w-20 md:w-18 transform translate-y-303 -translate-x-100" />
                <img src={purpleright} className="w-20 md:w-18 transform translate-y-80 translate-x-10" />
              </div>
            </div>

      <div className="pt-28 px-6 max-w-7xl mx-auto">
        <h1 className="font-garamond text-[54px] leading-[54px] text-center">
          What’s Your Skincare Concern?
        </h1>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 justify-items-center">

          {/* Each card now uses ARRAY LOGIC */}
          <SkinTypeCard
            title="Clear Acne & Breakouts"
            img={img1}
            selected={selected.includes("Clear Acne & Breakouts")}
            onSelect={() => toggleSelect("Clear Acne & Breakouts")}
          />

          <SkinTypeCard
            title="Reduce Oiliness & Shine"
            img={img2}
            selected={selected.includes("Reduce Oiliness & Shine")}
            onSelect={() => toggleSelect("Reduce Oiliness & Shine")}
          />

          <SkinTypeCard
            title="Hydrate Dry Skin"
            img={img3}
            selected={selected.includes("Hydrate Dry Skin")}
            onSelect={() => toggleSelect("Hydrate Dry Skin")}
          />

          <SkinTypeCard
            title="Even Out Skin Tone & Reduce Dark Spots"
            img={img4}
            selected={selected.includes("Even Out Skin Tone & Reduce Dark Spots")}
            onSelect={() => toggleSelect("Even Out Skin Tone & Reduce Dark Spots")}
          />

          <SkinTypeCard
            title="Minimize Pores & Blackheads"
            img={img5}
            selected={selected.includes("Minimize Pores & Blackheads")}
            onSelect={() => toggleSelect("Minimize Pores & Blackheads")}
          />

          <SkinTypeCard
            title="Reduce Redness & Sensitivity"
            img={img6}
            selected={selected.includes("Reduce Redness & Sensitivity")}
            onSelect={() => toggleSelect("Reduce Redness & Sensitivity")}
          />

          <SkinTypeCard
            title="Achieve a Natural Glow"
            img={img7}
            selected={selected.includes("Achieve a Natural Glow")}
            onSelect={() => toggleSelect("Achieve a Natural Glow")}
          />

          <SkinTypeCard
            title="Achieve a Natural Glow"
            img={img8}
            selected={selected.includes("Achieve a Natural Glow")}
            onSelect={() => toggleSelect("Achieve a Natural Glow")}
          />

          <SkinTypeCard
            title="Anti-Aging: Reduce Wrinkles & Fine Lines"
            img={img9}
            selected={selected.includes("Anti-Aging: Reduce Wrinkles & Fine Lines")}
            onSelect={() => toggleSelect("Anti-Aging: Reduce Wrinkles & Fine Lines")}
          />
        </div>

        <div className="mt-20 flex justify-center gap-200 pb-20">
          <button
            onClick={() => navigate("/q3")}
            className="font-crimson font-semibold text-[20px] border border-black/50 bg-white text-black px-6 py-3 rounded-xl flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> Previous
          </button>

          <button
            onClick={async () => {
              if (selected.length === 0) {
                alert("Please select at least one concern!");
                return;
              }

              const userId = localStorage.getItem("quiz_user_id");
              await saveAnswer(userId!, "q4_concern", selected);

              navigate("/summary");
            }}
            className="font-crimson font-semibold text-[20px] border border-black/50 bg-white text-black px-6 py-3 rounded-xl flex items-center gap-2"
          >
            Next <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkincareConcernPage;
