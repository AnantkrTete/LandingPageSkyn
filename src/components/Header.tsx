import logo from "@/assets/logo.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ mode = "dark" }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50
        ${mode === "dark" ? "bg-[#2C2C2C]" : "bg-white/95"}
        backdrop-blur-sm
      `}
    >
      <div className="w-full px-4 sm:px-6 md:px-10 py-3 flex items-center justify-between">

        {/* LOGO + BRAND */}
       
            <div
              onClick={() => navigate("/")}
              className="flex items-center gap-2 cursor-pointer shrink-0"
            >
              {mode === "dark" && (
                <img
                  src={logo}
                  alt="LesSkyn Logo"
                  className="w-8 h-10 sm:w-10 sm:h-12 object-contain"
                />
              )}

              <span
                className={`font-garamond text-xl sm:text-2xl ${
                  mode === "dark" ? "text-white" : "text-black"
                }`}
              >
                LesSkyn
              </span>
            </div>


        {/* DESKTOP NAV */}
        <nav
            className={`
              hidden md:flex items-center gap-6 text-sm font-medium
              ${mode === "dark" ? "text-white/80" : "text-black/70"}
            `}
          >
            <a
              href="#dashboard"
              className={`
                transition-colors
                ${mode === "dark" ? "hover:text-white" : "hover:text-black"}
              `}
            >
              Dashboard
            </a>

            <a
              href="#bible"
              className={`
                transition-colors
                ${mode === "dark" ? "hover:text-white" : "hover:text-black"}
              `}
            >
              LesSkyn Bible
            </a>

            <a
              href="#community"
              className={`
                transition-colors
                ${mode === "dark" ? "hover:text-white" : "hover:text-black"}
              `}
            >
              Community
            </a>

            <a
              href="#product"
              className={`
                whitespace-nowrap transition-colors
                ${mode === "dark" ? "hover:text-white" : "hover:text-black"}
              `}
            >
              Know your product
            </a>
          </nav>


        {/* MOBILE MENU BUTTON */}
        <button
          className={`md:hidden ${mode === "dark" ? "text-white/80" : "text-black/70"} text-2xl`}
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </div>

     {/* MOBILE DROPDOWN MENU */}
          {open && (
            <>
              {/* CLICK OUTSIDE TO CLOSE (transparent overlay) */}
              <div
                className="fixed inset-0 z-40"
                onClick={() => setOpen(false)}
              />

              {/* THE DROPDOWN ITSELF */}
              <div className="absolute top-full right-4 mt-2 z-50">
                <div
                    className={`
                      w-52 rounded-xl shadow-lg p-4
                      ${mode === "dark" ? "bg-[#2C2C2C] text-white" : "bg-white text-black"}
                    `}
                  >

                  <nav className="flex flex-col gap-4 text-base">
                    <a href="#dashboard" onClick={() => setOpen(false)}>Dashboard</a>
                    <a href="#bible" onClick={() => setOpen(false)}>LesSkyn Bible</a>
                    <a href="#community" onClick={() => setOpen(false)}>Community</a>
                    <a href="#product" onClick={() => setOpen(false)}>Know your product</a>
                  </nav>
                </div>
              </div>
            </>
          )}



    </header>
  );
};

export default Header;
