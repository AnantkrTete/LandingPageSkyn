import { useState } from "react";
import Header from "../components/Header";
import SkinTypeCard from "../components/SkinTypeCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { saveAnswer } from "../utils/saveResponse";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

import PinkStar from "../assets/star pink q1.svg";
import blueBottle from "../assets/blueBottle.svg";
import Purplebottle from "../assets/purple top left.svg";
import yellowtop from "../assets/yellow top right.svg";
import yellowbottle from "../assets/yellowbottom.svg";
import GreenStar from "../assets/greenBottomRight.svg";
import purpleright from "../assets/Purpleright.svg";

const FiveCardPage = () => {
  const navigate = useNavigate();

  // ⭐ STATE FOR SELECTED CARD
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="min-h-screen text-white bg-gradient-to-r from-[#0A0433] via-[#47126B] to-[#FE639C] relative">
      <Header mode="light" />

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

      {/* PAGE CONTENT */}
      <div className="pt-28 px-6 max-w-7xl mx-auto relative z-10">
        <h1 className="font-garamond text-[64px] leading-[64px] text-center whitespace-nowrap">
          What is your skin type?
        </h1>

        {/* ⭐ PASS SELECT + ONSELECT HERE */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 justify-items-center">

          <SkinTypeCard
            title="Normal Skin"
            img={img1}
            selected={selected === "Normal Skin"}
            onSelect={() => setSelected("Normal Skin")}
          />

          <SkinTypeCard
            title="Oily Skin"
            img={img2}
            selected={selected === "Oily Skin"}
            onSelect={() => setSelected("Oily Skin")}
          />

          <SkinTypeCard
            title="Dry Skin"
            img={img3}
            selected={selected === "Dry Skin"}
            onSelect={() => setSelected("Dry Skin")}
          />

          <SkinTypeCard
            title="Combination Skin"
            img={img4}
            selected={selected === "Combination Skin"}
            onSelect={() => setSelected("Combination Skin")}
          />

          <SkinTypeCard
            title="Sensitive Skin"
            img={img5}
            selected={selected === "Sensitive Skin"}
            onSelect={() => setSelected("Sensitive Skin")}
          />
        </div>

        <div className="mt-20 flex justify-center gap-32 pb-20">
          <button
            onClick={() => navigate("/")}
            className="font-crimson font-semibold text-[20px] border border-black/50 bg-white text-black px-6 py-3 rounded-xl flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" /> Previous
          </button>

          {/* ⭐ NEXT BUTTON WITH FIREBASE SAVE */}
          <button
            onClick={async () => {
              if (!selected) {
                alert("Please select an option!");
                return;
              }

              const userId = localStorage.getItem("quiz_user_id");

              await saveAnswer(userId!, "q1_skinType", selected);

              navigate("/q2");
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
