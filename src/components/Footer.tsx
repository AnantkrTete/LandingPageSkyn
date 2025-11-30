import {
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <section className="relative">

      {/* ⭐ CUSTOM GRID OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-11 opacity-100">
        <div className="absolute inset-0 grid grid-cols-[repeat(10,1fr)]     
      sm:grid-cols-[repeat(20,1fr)] ">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={`v-${i}`} className="border-r border-white/[0.03]" />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-[repeat(10,1fr)]    
      sm:grid-rows-[repeat(6,1fr)] ">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`h-${i}`} className="border-b border-white/[0.03]" />
          ))}
        </div>
      </div>


      {/* ⭐ FOOTER CONTENT */}
      <footer className="relative z-10 bg-[#2C2C2C] text-white px-6 py-12 sm:py-16">

        <div
          className="
            grid
            grid-cols-1 gap-12
            sm:grid-cols-4 sm:gap-12
            max-w-7xl mx-auto
          "
        >

          {/* ------------------------------------------------ */}
          {/* BRAND SECTION */}
          {/* ------------------------------------------------ */}
          <div className="space-y-5">

        {/* Logo + Title + Icons (MOBILE GRID) */}
        <div className="flex sm:flex-col justify-between items-center sm:items-start">

          {/* Logo + Title */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="LesSkyn" className="h-12 w-10" />
            <h3 className="font-garamond text-3xl font-medium">
              LesSkyn
            </h3>
          </div>

          {/* Icons move to the right on mobile */}
          <div className="flex items-center gap-5 sm:mt-4">
            <Instagram className="h-5 w-5" />
            <Twitter className="h-5 w-5" />
            <Facebook className="h-5 w-5" />
          </div>
        </div>

        {/* Company description — tighter width on mobile */}
        <p className="text-sm leading-relaxed text-white/50 max-w-[85%] sm:max-w-xs mt-2">
          AI-powered skincare assistant creating clarity in skincare chaos for Indian consumers.
        </p>

      </div>


          {/* ------------------------------------------------ */}
          {/* QUICK LINKS + RESOURCES (2-COLUMN MOBILE) */}
          {/* ------------------------------------------------ */}
          <div className="grid grid-cols-2 ml-14 sm:ml-0 gap-10 sm:contents">

            {/* QUICK LINKS */}
            <div className="space-y-5">
              <h4 className="font-garamond text-xl font-medium">
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm text-white/50">
                <li>Home</li>
                <li>About Us</li>
                <li>Features</li>
                <li>Community</li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div className="space-y-5">
              <h4 className="font-garamond text-xl font-medium">
                Resources
              </h4>
              <ul className="space-y-3 text-sm text-white/50">
                <li>Take the quiz</li>
                <li>Blog</li>
                <li>Sign-up</li>
                <li>Contact Us</li>
              </ul>
            </div>

          </div>

          {/* ------------------------------------------------ */}
          {/* NEWSLETTER */}
          {/* ------------------------------------------------ */}
          <div className="space-y-6">
            <h4 className="font-garamond text-xl font-medium">
              Stay Updated
            </h4>

            <p className="text-sm text-white/50 max-w-xs leading-relaxed">
              Get skincare tips and updates delivered to your inbox.
            </p>

            <div className="flex flex-col gap-3 max-w-2xl mx-auto">

              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-12 px-4 text-sm rounded-2xl border-border bg-white"
              />
              <Button
                size="lg"
                className="
                  bg-[#FFAD71] hover:bg-[#ff9a4d]
                  text-black border border-border
                  rounded-xl px-6 h-11 text-sm font-normal
                  
                  w-[170px] ml-0                /* MOBILE: push left */
    sm:w-auto sm:ml-0 sm:mr-0   
                "
              >
                Get Early Access
              </Button>
            </div>
          </div>

        </div>

      </footer>
    </section>
  );
};

export default Footer;
