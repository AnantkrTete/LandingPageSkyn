import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeatureSection from "@/components/FeatureSection";
import SkynBible from "@/components/SkynBible";
import Community from "@/components/Community";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";
import GridOverlay from "@/components/GridOverlay";


import videoConsultationImg from "@/assets/video-consult.png";
import productAnalysisImg from "@/assets/product.png";
import dashboardImg from "@/assets/dashboard.png";

import pinkStar from "@/assets/Star 16.svg";





const Index = () => {
  
  

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* HEADER */}
      <Header mode = "dark" mobileDark={true} hideLogoTextDesktop={true}/>

      <main className="relative z-10">

        {/* HERO + TOP STARS */}
        <section className="relative overflow-hidden">
          <GridOverlay />
          <Hero />

        

        </section>


        {/* HOW IT WORKS */}
        <HowItWorks />

     
        {/* MASTER WRAPPER FOR ALL FEATURE SECTIONS */}
          <section className="relative overflow-hidden">

            {/* BACKGROUND BARS (FULL WIDTH) */}
            {/* BACKGROUND BARS (FULL WIDTH) */}
          <div
            className="
              absolute inset-x-0
              top-[180px]        /* mobile top */
              sm:top-[260px]     /* small screens */
              md:top-[320px]     /* tablet */
              lg:top-[380px]     /* desktop (your original value) */
              h-[560px] sm:h-[260px] md:h-[320px] lg:h-[360px]
              bg-[#DABCFC]
            "
          />


          <div
            className="
              absolute inset-x-0
              top-[1280px]       /* mobile top (calibrated) */
              sm:top-[1360px]
              md:top-[1450px]
              lg:top-[1520px]    /* desktop (your original value) */
              h-[331px] sm:h-[240px] md:h-[260px] lg:h-[280px]
              bg-[#FDE67B]
            "
          />



          {/* MASTER WRAPPER — controls alignment */}
          <div className="max-w-[1528px] mx-auto px-6 space-y- relative">

            {/* 1. Expert Consultations (right-aligned text) */}
            <FeatureSection
              title="Expert Video Consultations"
              description="Connect with trusted skincare influencers and certified dermatologists through video calls for personalized guidance when you need it most."
              imageSrc={videoConsultationImg}
              imageAlt="1"
              reverse={true}
              starSrc={pinkStar}
            />

            {/* 2. Know Your Product (left-aligned text) */}
            <FeatureSection
              title="Know your Product"
              description="Understand what's actually in your products. We break down ingredients, explain what they do, and flag potential irritants for your skin type."
              imageSrc={productAnalysisImg}
              reverse={false}
              imageAlt="2"
              starSrc={pinkStar}
              hideStarOnMobile = {true}
            />

            {/* 3. Dashboard (right-aligned text) */}
            <FeatureSection
              title="Dashboard"
              description="Find your routine in one place and get daily analysis of the progress your skin made"
              imageSrc={dashboardImg}
              reverse={true}
              imageAlt="3"
              starSrc={pinkStar}
              hideStarOnMobile = {true}
            />

          </div>
        </section>


        {/* SKYN BIBLE + TOP STAR */}
        <section className="relative overflow-hidden">

          <div className="absolute inset-x-0 top-0 h-[40vw] sm:h-[36vw] lg:h-[360px] 
            bg-[#FDE67B]/100 pointer-events-none" />

          

          <SkynBible />
        </section>


        {/* COMMUNITY BLOCK + STAR REMOVED (was breaking layout) */}
        <section className="px-0 md:px-6 pt-24 pb-4 flex justify-center overflow-hidden">

          <div className="w-full max-w-[1528px] relative">
            <div className="absolute  inset-x-0 top-4 sm:top-0 w-[92%] mx-auto h-[398px] rounded-3xl sm:w-full sm:h-[70vw] lg:h-[780px] bg-[#DABCFC]  lg:rounded-[40px]" />

              <div className="relative px-6 md:px-8 pt-16 pb-4 space-y-12">

                <Community />
              </div>
            </div>

        </section>


       <div className="mt-24 sm:-mt-8 mb-28 sm:mb-42">
        <EarlyAccess />
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Index;
