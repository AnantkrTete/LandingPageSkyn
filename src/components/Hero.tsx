import GridOverlay from "./GridOverlay";
import yellowStar from "../assets/Star 13.svg";
import pinkstar from "../assets/pinkStar.svg"
import bluestar from "../assets/Star 14.svg"
import orangestar from "../assets/Star 26.svg"
import tealstar from "../assets/Star 21.svg"
import { useNavigate } from "react-router-dom";
import {useEffect} from "react";
export default function Hero() {
  const navigate = useNavigate();
  useEffect(() => {
  let userId = localStorage.getItem("quiz_user_id");

  if (!userId) {
    userId = crypto.randomUUID();
    localStorage.setItem("quiz_user_id", userId);
  }
}, []);

  return (
    <section className="relative w-full min-h-[700px] sm:min-h-[800px] lg:min-h-[900px] flex items-center justify-center overflow-hidden bg-[#F9F7F2]">
      {/* GRID BACKGROUND */}
      <GridOverlay />

      {/* DECORATIVE STARS – responsive, Figma-like */}
                <img
              src={pinkstar}
              alt=""
              className="
                absolute
                top-[4%] left-[4%]
                w-10 sm:w-14 lg:w-20
                pointer-events-none
              "
            />

            <img
              src={bluestar}
              alt=""
              className="
                absolute
                top-[8%] right-[0%]
                w-10 sm:w-14 lg:w-20
                pointer-events-none
              "
            />

            <img
              src={orangestar}
              alt=""
              className="
                absolute
                bottom-[12%] right-0
                w-12 sm:w-16 lg:w-24
                pointer-events-none
              "
            />

            <img
              src={tealstar}
              alt=""
              className="
                absolute
                bottom-[18%] left-0
                w-12 sm:w-16 lg:w-24
                pointer-events-none
              "
            />

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        {/* Title with side stars */}
        <div className="relative flex items-center justify-center mb-6 gap-2 sm:gap-4">
          <img
            src={yellowStar}
            alt=""
            className="hidden sm:block w-10 sm:w-12 lg:w-[86px]"
          />

          <h1
            className="
              font-[Garamond]
              text-[36px] leading-[40px]
              sm:text-[52px] sm:leading-[58px]
              lg:text-[80px] lg:leading-[90px]
              text-black
            "
          >
            Clarity in <span className="text-[#BA99FF]">Skincare</span> Chaos
          </h1>

          <img
            src={yellowStar}
            alt=""
            className="hidden sm:block w-10 sm:w-12 lg:w-[86px]"
          />
        </div>

        {/* Subtitle */}
        <p
          className="
            max-w-[90%] sm:max-w-[720px] lg:max-w-[900px]
            text-[16px] sm:text-[20px] lg:text-[24px]
            font-[Montserrat] font-medium
            leading-relaxed
            text-black/50
          "
        >
          AI-powered skincare assistant that helps you understand your skin,
          build personalized AM/PM routines, and connect with skincare experts.
        </p>

        {/* CTA Button */}
        <button
          onClick={() => navigate("/q1")}
          className="
            mt-8 sm:mt-10
            px-8 sm:px-10
            py-3 sm:py-4
            text-[16px] sm:text-[18px] lg:text-[20px]
            font-medium font-[Montserrat]
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
