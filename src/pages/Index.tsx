import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeatureSection from "@/components/FeatureSection";
import SkynBible from "@/components/SkynBible";
import Community from "@/components/Community";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";
import GridOverlay from "@/components/GridOverlay";
import { useNavigate } from "react-router-dom";

import videoConsultationImg from "@/assets/video-consult.png";
import productAnalysisImg from "@/assets/product.png";
import dashboardImg from "@/assets/dashboard.png";

import pinkStar from "@/assets/Star 16.svg";





const Index = () => {
  const navigate = useNavigate();
  

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* HEADER */}
      <Header />

      <main className="relative z-10">

        {/* HERO + TOP STARS */}
        <section className="relative overflow-hidden">
          <GridOverlay />
          <Hero />

        

        </section>


        {/* HOW IT WORKS */}
        <HowItWorks />

     
        


        {/* VIDEO CONSULTATION SECTION */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-x-0 bottom-0 h-[25vw] sm:h-[22vw] lg:h-[190px] 
            bg-[#DABCFC]/100 pointer-events-none" />

          <FeatureSection
              title="Expert Video Consultations"
              description="Connect with trusted skincare influencers and certified dermatologists through video calls for personalized guidance when you need it most."
              imageSrc={videoConsultationImg}
              imageAlt="video"
              reverse={true}
              starSrc={pinkStar}

              // ⭐ custom star position
              starTop="-top-[10%]"
              starRight="-right-[5%]"
            />


        </section>

        


        {/* KNOW YOUR PRODUCT */}
        <section className="relative overflow-hidden">

          <div className="absolute inset-x-0 top-0 h-[30vw] sm:h-[26vw] lg:h-[250px] 
            bg-[#DABCFC]/100 pointer-events-none" />

             <FeatureSection
             title="Know your Product"
              description="Understand what's actually in your products. We break down ingredients, explain what they do, and flag potential irritants for your skin type."
               imageSrc={productAnalysisImg}
              imageAlt="Know the poducts"
              reverse={false}
             titleOffset="mt-[8vw] sm:mt-[6vw] lg:mt-[80px]"
              starSrc={pinkStar}

            // ⭐ custom star position
              starTop="top-full translate-y-[-105%]"
              starRight="right-[-6%]"

              />


        </section>


        {/* STAR NEAR DASHBOARD */}
        


        {/* DASHBOARD SECTION */}
        <section className="relative overflow-hidden">

          <div className="absolute inset-x-0 bottom-0 h-[35vw] sm:h-[30vw] lg:h-[250px] 
            bg-[#FDE67B]/100 pointer-events-none" />
            <FeatureSection
              title="Dashboard"
              description="Find your routine in one place and get daily analysis of the progress your skin made"
              imageAlt="Dashboard"
              imageSrc={dashboardImg}
              reverse={true}
              starSrc={pinkStar}

              // ⭐ SHIFT ENTIRE TEXT BLOCK UP (title + star + description)
              contentOffset="mt-[-18vw] sm:mt-[-12vw] lg:mt-[-160px]"

              // ⭐ anchor star under title exactly
              starTop="top-full translate-y-[-100%]"
              starRight="right-[-12%]"
            />



        </section>


        {/* SKYN BIBLE + TOP STAR */}
        <section className="relative overflow-hidden">

          <div className="absolute inset-x-0 top-0 h-[40vw] sm:h-[36vw] lg:h-[360px] 
            bg-[#FDE67B]/100 pointer-events-none" />

          

          <SkynBible />
        </section>


        {/* COMMUNITY BLOCK + STAR REMOVED (was breaking layout) */}
        <section className="px-6 pt-24 pb-4 flex justify-center overflow-hidden">

          <div className="w-full max-w-[1528px] relative">
            <div className="absolute inset-x-0 top-0 h-[80vw] sm:h-[70vw] lg:h-[780px] bg-[#DABCFC] rounded-[40px]" />

            <div className="relative px-8 pt-16 pb-4 space-y-16">
              <div className="bg-white rounded-[32px] w-full max-w-[1406px] h-[300px] mx-auto"></div>

              <Community />
            </div>
          </div>

        </section>


       <div className="mb-42">
        <EarlyAccess />
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Index;
