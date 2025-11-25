import Header from "../components/Header";
import SkinTypeCard from "../components/SkinTypeCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Images you will add later:
import img1 from "../assets/clearAcne.png";
import img2 from "../assets/reduceOily.png";
import img3 from "../assets/hydrateDrySkin.png";
import img4 from "../assets/evenOutSkin.png";
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
  return (
    <div className="relative min-h-[2000px] w-full text-white bg-gradient-to-r from-[#0A0433] via-[#47126B] to-[#FE639C]">



      {/* Light Header */}
      <Header mode="light" />

       {/* Pink star placed exactly at Figma's position */}
       <img
        src={PinkStar}
        alt="pink star"
        className="absolute"
        style={{
          width: "100px",
          height: "100px",
          left: "418px",
          top: "32px",
        }}
      />
      <img
        src={purpleright}
        alt="pink star"
        className="absolute"
        style={{
          width: "105.13px",
          height: "90px",
          left: "1820px",
          top: "540px",
        }}
      />
      <img
        src={GreenStar}
        alt="pink star"
        className="absolute"
        style={{
          width: "100px",
          height: "100px",
          left: "1840px",
          top: "856px",
          transform: "rotate(320deg)"

        }}
      />
      <img
        src={blueBottle}
        alt="bluestar"
        className="absolute"
        style={{
          width: "58.68px",
          height: "144px",
          left: "-15px",
          top: "786px",
        }}
      />
        <img
        src={yellowtop}
        alt="bluestar"
        className="absolute"
        style={{
          width: "84.28px",
          height: "58px",
          left: "1658px",
          top: "76px",
        }}
      />
      <img
        src={yellowbottle}
        alt="bluestar"
        className="absolute"
        style={{
          width: "102.02x",
          height: "200.93px",
          left: "917px",
          top: "1484px",
        }}
      />
      <img
        src={Purplebottle}
        alt="purple"
        className="absolute"
        style={{
          width: "65px",
          height: "133px",
          left: "-27px",
          top: "124px",
        }}
      />

      <div className="pt-28 px-6 max-w-7xl mx-auto">

        {/* TITLE */}
        <h1 className="font-garamond text-[54px] leading-[54px] text-center">
          What’s Your Skincare Concern?
        </h1>

        {/* GRID — 3 items per row, centered, equal spacing */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 justify-items-center">

          <SkinTypeCard title="Clear Acne & Breakouts" img={img1} />
          <SkinTypeCard title="Reduce Oiliness & Shine" img={img2} />
          <SkinTypeCard title="Hydrate Dry Skin" img={img3} />

          <SkinTypeCard title="Even Out Skin Tone & Reduce Dark Spots" img={img4} />
          <SkinTypeCard title="Minimize Pores & Blackheads" img={img5} />
          <SkinTypeCard title="Reduce Redness & Sensitivity" img={img6} />

          <SkinTypeCard title="Achieve a Natural Glow" img={img7} />
          <SkinTypeCard title="Achieve a Natural Glow" img={img8} />
          <SkinTypeCard title="Anti-Aging: Reduce Wrinkles & Fine Lines" img={img9} />

        </div>

        {/* BUTTONS — SAME AS PREVIOUS PAGE */}
        <div className="mt-20 flex justify-center gap-200 pb-20">

          {/* Previous Button */}
          <button onClick={()=>navigate("/q3")} className="font-crimson font-semibold text-[20px] border border-black/50 bg-white text-black px-6 py-3 rounded-xl flex items-center gap-2">
            <ArrowLeft className="w-5 h-5" />
            Previous
          </button>

          {/* Next Button */}
          <button onClick={()=>navigate("/outcome")} className="font-crimson font-semibold text-[20px] border border-black/50 bg-white text-black px-6 py-3 rounded-xl flex items-center gap-2">
            Next
            <ArrowRight className="w-5 h-5" />
          </button>

        </div>
      </div>
    </div>
  );
};

export default SkincareConcernPage;
