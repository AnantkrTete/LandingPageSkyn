import Header from "../components/Header";
import SkinTypeCard from "../components/SkinTypeCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
// Replace these with your real images later
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
  return (
    <div className="min-h-screen text-white bg-gradient-to-r from-[#0A0433] via-[#47126B] to-[#FE639C]">

          
     <Header mode = "light"/>

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
          left: "1820px",
          top: "856px",
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
          top: "784px",
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

        {/* Title */}
        <h1 className="font-garamond text-[54px] mt-25 leading-[54px] text-center">
        Skincare Routine Commitment Level
        </h1>

        {/* CARD GRID */}
        <div className="mt-20 grid grid-cols-[auto_auto] gap-x-16 justify-center">


          <SkinTypeCard title="Organic" img={img1} />
          <SkinTypeCard title="Budget Friendly" img={img2} />
          
          

        </div>

        {/* BUTTONS */}
        {/* BUTTONS */}
<div className="mt-20 flex justify-center gap-200 pb-20">

{/* Previous Button */}
<button onClick={()=>navigate("/q2")} className=" font-crimson font-semibold text-[20px] border border-black/50 bg-white text-black px-6 py-3 rounded-xl flex items-center gap-2">
  <ArrowLeft className="w-5 h-5" />
  Previous
</button>

{/* Next Button */}
<button onClick={()=>navigate("/q4")} className="font-crimson font-semibold text-[20px] border border-black/50 bg-white text-black px-6 py-3 rounded-xl flex items-center gap-2">
  Next
  <ArrowRight className="w-5 h-5" />
</button>

</div>


      </div>
    </div>
  );
  
};

export default FiveCardPage;
