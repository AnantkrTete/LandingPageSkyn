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
import pinkStar from "../assets/pinkStar.svg";
import blueStar from "../assets/Star 14.svg";
import skyStar from "../assets/Star 16.svg"

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Header />

      
      <main className="relative z-10">
      
      
         <section className="relative">
          <GridOverlay />        {/* grid + radial glow */}
          <Hero />               {/* top section content */}
          <img
        src={pinkStar}
        alt="pink star"
        className="absolute"
        style={{
          width: "136px",
          height: "136px",
          left: "73px",
          top: "73px",
        }}
      />
      <img
        src={blueStar}
        alt="pink star"
        className="absolute"
        style={{
          width: "153px",
          height: "165px",
          left: "1798px",
          top: "72px",
        }}
      />
          </section>
        <HowItWorks />
        
        <img
        src={skyStar}
        alt="pink star"
        className="absolute"
        style={{
          width: "136px",
          height: "136px",
          left: "1463px",
          top: "1840px",
        }}
      />
    

        <section className="relative">
             {/* PURPLE TOP BLOCK */}
            <div className="absolute inset-x-0 bottom-0 h-[190px] bg-[#DABCFC]/100 pointer-events-none" />

          <FeatureSection
          title="Expert Video Consultations"
          
          description="Connect with trusted skincare influencers and certified dermatologists through video calls for personalized guidance when you need it most."
          imageSrc={videoConsultationImg}
          imageAlt="Video consultation with skincare expert"
          reverse={true}
        />
        </section>


        <img
        src={skyStar}
        alt="pink star"
        className="absolute"
        style={{
          width: "86px",
          height: "86px",
          left: "703px",
          top: "2530px",
        }}
      />
        
        <section className="relative">
             {/* PURPLE TOP BLOCK */}
            <div className="absolute inset-x-0 top-0 h-[250px] bg-[#DABCFC]/100 pointer-events-none" />

          <FeatureSection
           title="Know your Product"
           description="Understand what's actually in your products. We break down ingredients, explain what they do, and flag potential irritants for your skin type."
           imageSrc={productAnalysisImg}
           imageAlt="Product ingredient analysis"
             reverse={false}
             titleOffset="mt-[80px]"
            />
        </section>

        <img
        src={skyStar}
        alt="pink star"
        className="absolute"
        style={{
          width: "86px",
          height: "86px",
          left: "1160px",
          top: "3030px",
        }}
      />


        <section className="relative">
          <div className="absolute inset-x-0 bottom-0 h-[250px] bg-[#FDE67B]/100" />

            <FeatureSection
            title="Dashboard"
            description="Find your routine in one place and get daily analysis of the progress your skin made"
            imageSrc={dashboardImg}
            imageAlt="Dashboard section"
            reverse={true}
            titleOffset="mt-[-180px]"
          />
        </section>

        
        <section className="relative">
        
     <div className="absolute inset-x-0 top-0 h-[360px] bg-[#FDE67B]/100" />
     <img
        src={skyStar}
        alt="pink star"
        className="relative"
        style={{
          width: "86px",
          height: "86px",
          top: "170px",
          left: "785px"
        }}
      />
          <SkynBible />
          </section>

       <section className="px-6 pt-24 pb-4 flex justify-center">

  {/* WRAPPER that grows with content */}
  <div className="w-full max-w-[1528px] relative ">

    {/* PURPLE BACKGROUND — FIXED HEIGHT */}
    <div className="absolute inset-x-0 top-0 h-[780px] bg-[#DABCFC] rounded-[40px]"></div>

    {/* WHITE BOX + CONTENT — NATURAL HEIGHT */}
    <div className="relative px-8 pt-16 pb-4 space-y-16">

      <div className="bg-white rounded-[32px] w-full max-w-[1406px] h-[300px] mx-auto"></div>
      
      <Community />  {/* content overflows visually past purple height */}

    </div>
  </div>

</section>





        <EarlyAccess />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
