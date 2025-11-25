import { Button } from "./ui/button";
import { Input } from "./ui/input";



const EarlyAccess = () => {
  return (
    <section className="relative py-24 px-6">
      
      <div className="container mx-auto max-w-4xl text-center space-y-12">
        <div className="space-y-6">
          <h2 className="font-garamond text-4xl md:text-5xl font-normal leading-tight">
            Be the first to Experience India's smartest Skincare App
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
