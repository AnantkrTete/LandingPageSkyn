import { Button } from "./ui/button";
import { Input } from "./ui/input";
import starSrc from "../assets/Star 16.svg"


const EarlyAccess = () => {
  return (
    <section className="relative py-24 px-6">
      
      <div className="container mx-auto w-full text-center space-y-12">
        <div className="space-y-6">

          <h2 className="relative font-garamond text-4xl md:text-5xl font-normal leading-tight text-center inline-block mx-auto">

              {/* LEFT STAR */}
              <img
                src={starSrc}
                alt=""
                className="
                  absolute
                  left-[-20px]       
                  top-[10px]
                  w-8 sm:w-10 lg:w-12
                  z-0
                  pointer-events-none
                "
              />

              {/* TITLE TEXT */}
              <span className="relative z-10 block">
                Be the first to Experience India’s 
                smartest Skincare App
              </span>

              {/* RIGHT STAR */}
              <img
                src={starSrc}
                alt=""
                className="
                  absolute
                  right-[-20px]
                  top-[10px]
                  w-8 sm:w-10 lg:w-12
                  z-0
                  pointer-events-none
                "
              />
            </h2>



          <p className="text-lg md:text-xl font-medium text-muted-foreground max-w-3xl mx-auto">
            Join our exclusive early access list and get personalized skincare routine before anyone else
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 max-w-2xl mx-auto">
          <Input
            type="email"
            placeholder="Enter your email address"
            className="flex-1 h-14 px-6 text-base border-foreground/20 rounded-2xl bg-secondary"
          />
          <Button
            size="lg"
            className="bg-[#FFAD71] hover:bg-coral/90 text-foreground border border-foreground/50 rounded-2xl px-10 h-14 text-base font-normal"
          >
            Get Early Access
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EarlyAccess;
