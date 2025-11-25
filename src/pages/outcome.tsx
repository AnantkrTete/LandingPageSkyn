import Header from "../components/Header";
import img1 from "../assets/Group 17.svg";
import img2 from "../assets/cleanser.svg";
import img3 from "../assets/Serum.svg";
import img4 from "../assets/Moisturizer.svg";
import img5 from "../assets/Lip Balm.svg";
import img6 from "../assets/Sunscreen.svg";
import img7 from "../assets/Night Cream.svg";
import img8 from "../assets/Micellar Water.svg";
import img9 from "../assets/Face Oil.svg";
import img10 from "../assets/Exfoliant.svg";
import img11 from "../assets/Body Lotion.svg";
import img12 from "../assets/night.svg";
import imgClean from "../assets/Cetaphil.svg";
import imgSerum from "../assets/salicilic.svg";
import imgSunscreen from "../assets/AntiAcne Sunscreen.svg";
import img13 from "../assets/mini salicilic cleanser.svg";
import img14 from "../assets/Nicinamide.svg";
import img15 from "../assets/oil control.svg";
import ProductCard from "../components/ProductCard";

const OutcomePage = () => {
  return (
   

    <div className="min-h-screen bg-[linear-gradient(180deg,#E5D4FA_0%,#F0E4FF_12%,#FFFFFF_28%,#F3EAFF_48%,#FFFFFF_100%)]">


  

      {/* DARK HEADER (same as dashboard screenshot) */}
      <Header mode="dark" />

      {/* MAIN CONTENT */}
      <div className="pt-32 px-6 max-w-7xl mx-auto">

        {/* TITLE */}
        <h1 className="font-garamond  text-[54px] mt-25 leading-[54px] text-center">
          Your Skincare Portfolio
        </h1>

        {/* SUBTITLE */}
        <p className="font-montserrat text-[20px] text-black/60 text-center mt-3 tracking-wider">
          Curated products for your skin type & goals
        </p>

      </div>
                <div className="bg-[#FCFCA2] border border-black/30 rounded-[32px] mt-50 w-full max-w-[1406px] h-[256px] mx-auto 
                    flex items-center px-14 gap-10">

                        {/* LEFT ICON (replace src later) */}
                         <img
                              src={img1}
                                       alt="Morning Routine Icon"
                              className="w-[160px] h-auto object-contain"
                            />

                            {/* TEXT BLOCK */}
                            <div>
                             <h2 className="font-garamond text-[32px] leading-[32px] text-black tracking-wider">
                              Morning Routine
                                 </h2>
                             <p className="font-montserrat text-[18px] text-black/60 mt-2 tracking-wider">
                            Start your day with protection & glow
                          </p>
                     </div>

                </div>
                {/* SHARED WRAPPER FOR STRIP + CARDS */}
                <div className="w-full max-w-[1406px] mx-auto">

                {/* PRODUCT STRIP BOX */}
                <div className="relative bg-white border border-black/30 mt-16 h-[200px] rounded-xl">
                <div className="flex items-end justify-center gap-8 h-full px-10 pt-8">
                    <img src={img2} className="h-[187px] object-contain" />
                    <img src={img3} className="h-[134px] object-contain" />
                    <img src={img4} className="h-[92px]  object-contain" />
                    <img src={img5} className="h-[130px] object-contain" />
                    <img src={img6} className="h-[164px] object-contain" />
                    <img src={img7} className="h-[85px]  object-contain" />
                    <img src={img8} className="h-[170px] object-contain" />
                    <img src={img9} className="h-[152px] object-contain" />
                    <img src={img10} className="h-[104px] object-contain" />
                    <img src={img11} className="h-[187px] object-contain" />
                </div>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black"></div>
                </div>

                {/* PRODUCT CARDS */}
                <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
                <ProductCard
                    img={imgClean}
                    name="Hydrating Foaming Oil Cleanser"
                    brand="Cetaphil"
                    prices={{ amazon: "Rs. 190", flipkart: "Rs. 200", nykaa: "Rs. 210" }}
                />

                <ProductCard
                    img={imgSerum}
                    name="2% Salicylic Acid Serum"
                    brand="Minimalist"
                    prices={{ amazon: "Rs. 299", flipkart: "Rs. 200", nykaa: "Rs. 289" }}
                />

                <ProductCard
                    img={imgSunscreen}
                    name="Super Cica & Salicylic Anti Acne Sunscreen"
                    brand="Dot & Key"
                    prices={{ amazon: "Rs. 190", flipkart: "Rs. 200", nykaa: "Rs. 210" }}
                />
                </div>

                </div>


        <div className="bg-[#21103E80]/50 border border-black/30 rounded-[32px] mt-30 w-full max-w-[1406px] h-[256px] mx-auto 
                    flex items-center px-14 gap-10">

                        {/* LEFT ICON (replace src later) */}
                         <img
                              src={img12}
                                       alt="Night Routine Icon"
                              className="w-[160px] h-auto object-contain"
                            />

                            {/* TEXT BLOCK */}
                            <div>
                             <h2 className="font-garamond text-[32px] leading-[32px] text-black tracking-wider">
                              Night Routine
                                 </h2>
                             <p className="font-montserrat text-[18px] text-black/60 mt-2 tracking-wider">
                             Repair & renew while you sleep
                          </p>
                     </div>

                </div>

                                            {/* SHARED WRAPPER FOR STRIP + CARDS */}
                    <div className="w-full max-w-[1406px] mx-auto">

                        {/* PRODUCT STRIP BOX */}
                        <div className="relative bg-white border border-black/30 mt-16 h-[200px] rounded-xl">
                        <div className="flex items-end justify-center gap-8 h-full px-10 pt-8">
                            <img src={img2} className="h-[187px] object-contain" />
                            <img src={img3} className="h-[134px] object-contain" />
                            <img src={img4} className="h-[92px]  object-contain" />
                            <img src={img5} className="h-[130px] object-contain" />
                            <img src={img6} className="h-[164px] object-contain" />
                            <img src={img7} className="h-[85px]  object-contain" />
                            <img src={img8} className="h-[170px] object-contain" />
                            <img src={img9} className="h-[152px] object-contain" />
                            <img src={img10} className="h-[104px] object-contain" />
                            <img src={img11} className="h-[187px] object-contain" />
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-[3px] bg-black"></div>
                        </div>

                        {/* PRODUCT CARDS */}
                        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
                        <ProductCard
                            img={img13}
                            name="Hydrating Foaming Oil Cleanser"
                            brand="Cetaphil"
                            prices={{ amazon: "Rs. 190", flipkart: "Rs. 200", nykaa: "Rs. 210" }}
                        />

                        <ProductCard
                            img={img14}
                            name="2% Salicylic Acid Serum"
                            brand="Minimalist"
                            prices={{ amazon: "Rs. 299", flipkart: "Rs. 200", nykaa: "Rs. 289" }}
                        />

                        <ProductCard
                            img={img15}
                            name="Super Cica & Salicylic Anti Acne Sunscreen"
                            brand="Dot & Key"
                            prices={{ amazon: "Rs. 190", flipkart: "Rs. 200", nykaa: "Rs. 210" }}
                        />
                        </div>

                        </div>

                        <div className="relative bg-white  mt-16 h-[150px] rounded-xl"/>

                    </div>
  );
};

export default OutcomePage;
