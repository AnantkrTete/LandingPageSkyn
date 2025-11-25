import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Instagram, Twitter, Facebook } from "lucide-react";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <footer className="relative bg-[#2C2C2C] text-white">
      {/* Grid overlay for footer */}
      <div className="absolute inset-0 pointer-events-none opacity-100">
        <div className="absolute inset-0 grid grid-cols-[repeat(20,1fr)]">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={`v-${i}`} className="border-r border-white/[0.03]" />
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-[repeat(6,1fr)]">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={`h-${i}`} className="border-b border-white/[0.03]" />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-12 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          
            <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <img
                    src={logo}
                    alt="LesSkyn Logo"
                    className="w-12 h-12 object-contain"
                  />

                  <span className="font-garamond text-4xl font-normal leading-none">
                    LesSkyn
                  </span>
                </div>

                <p className="text-base font-medium text-white/50 leading-relaxed">
                  AI-powered skincare assistant creating clarity in skincare chaos for Indian consumers.
                </p>

                <div className="flex gap-6">
                  <Instagram className="w-6 h-6 text-white hover:text-white/70 cursor-pointer transition-colors" />
                  <Twitter className="w-6 h-6 text-white hover:text-white/70 cursor-pointer transition-colors" />
                  <Facebook className="w-6 h-6 text-white hover:text-white/70 cursor-pointer transition-colors" />
                </div>
              </div>


          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="font-garamond text-2xl font-normal">Quick Links</h3>
            <nav className="flex flex-col gap-3 text-base font-medium text-white/60">
              <a href="#" className="hover:text-white transition-colors">Home</a>
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Features</a>
              <a href="#community" className="hover:text-white transition-colors">Community</a>
            </nav>
          </div>

          {/* Resources */}
          <div className="space-y-5">
            <h3 className="font-garamond text-2xl font-normal">Resources</h3>
            <nav className="flex flex-col gap-3 text-base font-medium text-white/60">
              <a href="#" className="hover:text-white transition-colors">Take the quiz</a>
              <a href="#" className="hover:text-white transition-colors">Blog</a>
              <a href="#" className="hover:text-white transition-colors">Sign-up</a>
              <a href="#" className="hover:text-white transition-colors">Contact Us</a>
            </nav>
          </div>

          {/* Newsletter */}
          <div className="space-y-5">
            <h3 className="font-garamond text-2xl font-normal">Stay Updated</h3>
            <p className="text-base font-medium text-white/50">
              Get skincare tips and updates delivered to your inbox.
            </p>
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="h-12 px-5 bg-secondary text-foreground border-foreground/50 rounded-2xl text-sm"
              />
              <Button
                className="w-full bg-coral hover:bg-coral/90 text-foreground border border-foreground/50 rounded-2xl h-12 font-normal text-sm"
              >
                Get Early Access
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
