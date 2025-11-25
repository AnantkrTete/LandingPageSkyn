import GridOverlay from "./GridOverlay";
import yellowStar from "../assets/Star 13.svg"
import tealStar from "../assets/Star 21.svg"
import orangeStar from "../assets/Star 26.svg"
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative w-full min-h-[900px] flex items-center justify-center overflow-hidden bg-[#F9F7F2]">
      
      {/* GRID BACKGROUND */}
      <GridOverlay />
     
      <img
        src={tealStar}
        alt="pink star"
        className="absolute"
        style={{
          width: "153px",
          height: "165px",
          top:"564px",
          left: "-50px",
        }}
      />

      <img
        src={orangeStar}
        alt="pink star"
        className="absolute"
        style={{
          width: "153px",
          height: "165px",
          top:"694px",
          left: "1770px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4">

        {/* Title with mini-side stars */}
        <div className="relative flex items-center justify-center mb-6">

         
        <img
        src={yellowStar}
        alt="pink star"
        className="relative"
        style={{
          width: "86px",
          height: "86px",
          padding: "10px",
        }}
      />



          <h1 className="font-[Garamond] text-[80px] leading-[90px] text-black">
            Clarity in <span className="text-[#BA99FF]">Skincare</span> Chaos
          </h1>
          <img
        src={yellowStar}
        alt="pink star"
        className="relative"
        style={{
          width: "86px",
          height: "86px",
          padding: "10px",
        }}
      />

         

         
        </div>

        {/* Subtitle */}
        <p className="max-w-[900px] text-[32px] font-[Montserrat] font-medium leading-[39px] text-black/50">
          AI-powered skincare assistant that helps you understand your skin,
          build personalized AM/PM routines, and connect with skincare experts.
        </p>

        {/* CTA Button */}
        <button
          onClick={()=>navigate("/q1")}
          className="
            mt-10 px-10 py-4 text-[20px] font-medium font-[Montserrat]
            bg-[#FFAD71] border border-black rounded-full
            hover:scale-105 transition
          "
        >
          Take quiz now
        </button>
      </div>
    </section>
  );
}
