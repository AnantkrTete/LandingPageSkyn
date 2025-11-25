import logo from "@/assets/logo.png"
const Header = ({ mode = "dark" }) => {
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 
      ${mode === "dark"
        ? "bg-neutral-900/90 backdrop-blur-sm"
        : "bg-white"}`
      }
    >
      <div className="container mx-auto px-8 md:px-12 py-5 flex items-center justify-between">

        {/* LOGO */}
        
        <div className="logo-container flex items-center gap-3">

         {/* Show logo image ONLY in dark mode */}
          {mode === "dark" && (
          <img
            src={logo}   /* ← replace with your actual file */
            alt="LesSkyn Logo"
           className="w-10 h-12 object-contain"
          />
        )}

          {/* Always show the text, color changes with mode */}
          <span
           className={`font-garamond text-2xl md:text-3xl font-normal
            ${mode === "dark" ? "text-white" : "text-black"}
          `}
           >
          LesSkyn
        </span>
        </div>

        {/* NAV LINKS */}
        <nav
          className={`hidden md:flex items-center gap-8 font-medium text-base
            ${mode === "dark" ? "text-white/60" : "text-black/70"}
          `}
        >
          <a
            href="#dashboard"
            className={`${mode === "dark" ? "hover:text-white" : "hover:text-black"} transition-colors`}
          >
            Dashboard
          </a>

          <a
            href="#bible"
            className={`${mode === "dark" ? "hover:text-white" : "hover:text-black"} transition-colors`}
          >
            LesSkyn Bible
          </a>

          <a
            href="#community"
            className={`${mode === "dark" ? "hover:text-white" : "hover:text-black"} transition-colors`}
          >
            Community
          </a>

          <a
            href="#product"
            className={`${mode === "dark" ? "hover:text-white" : "hover:text-black"} transition-colors`}
          >
            Know your product
          </a>
        </nav>

      </div>
    </header>
  );
};

export default Header;
