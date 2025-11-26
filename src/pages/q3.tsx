import { useState } from "react";
import Header from "../components/Header";
import SkinTypeCard from "../components/SkinTypeCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { saveAnswer } from "../utils/saveResponse";

import img1 from "../assets/organic.png";
import img2 from "../assets/budget.png";

import PinkStar from "../assets/star pink q1.svg";
import blueBottle from "../assets/blueBottle.svg";
import Purplebottle from "../assets/purple top left.svg";
import yellowtop from "../assets/yellow top right.svg";
import yellowbottle from "../assets/yellowbottom.svg";
import GreenStar from "../assets/greenBottomRight.svg";
import purpleright from "../assets/Purpleright.svg";

const FiveCardPage = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen text-white bg-gradient-to-r from-[#0A0433] via-[#47126B] to-[#FE639C] relative">
      <Header mode="light" />

      {/* decorations untouched */}
      {/* ➤ DECORATIVE SIDES */}
          <div className="pointer-events-none absolute inset-0 flex justify-between px-10">

            {/* LEFT DECORATIONS */}
            <div className="flex flex-col gap-10">
              <img src={PinkStar} className="w-20 md:w-18 transform translate-y-10 translate-x-69" />
              <img src={blueBottle} className="w-20 md:w-18 transform translate-y-127 -translate-x-10" />
              <img src={Purplebottle} className="w-20 md:w-18 transform -translate-y-30 -translate-x-10" />
            </div>

            {/* RIGHT DECORATIONS */}
            <div className="flex flex-col gap-10 items-end">
              <img src={GreenStar} className="w-20 md:w-18 transform translate-y-171 translate-x-10" />
              <img src={yellowtop} className="w-20 md:w-13 transform -translate-y-13 translate-x-10" />
              <img src={yellowbottle} className="w-20 md:w-18 transform translate-y-124 -translate-x-100" />
              <img src={purpleright} className="w-20 md:w-18 transform translate-y-5 translate-x-10" />
            </div>

          </div>

      <div className="pt-28 px-6 max-w-7xl mx-auto relative z-10">
        <h1 className="font-garamond text-[54px] leading-[54px] text-center whitespace-nowrap">
          Product Preferences
        </h1>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 gap-20 justify-items-center">
          <SkinTypeCard
            title="Organic"
            img={img1}
            selected={selected === "Organic"}
            onSelect={() => setSelected("Organic")}
          />

          <SkinTypeCard
            title="Budget Friendly"
            img={img2}
            selected={selected === "Budget Friendly"}
            onSelect={() => setSelected("Budget Friendly")}
          />
        </div>

        <div className="mt-20 flex justify-center gap-32 pb-20">
          <button
            onClick={() => navigate("/q2")}
            className="font-crimson font-semibold text-[20px] border border-black/50 bg-white text-black px-6 py-3 rounded-xl flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Previous
          </button>

          <button
            onClick={async () => {
              if (!selected) {
                alert("Please select an option!");
                return;
              }

              const userId = localStorage.getItem("quiz_user_id");
              await saveAnswer(userId!, "q3_preference", selected);

              navigate("/q4");
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

export default FiveCardPage;
