const ProductCard = ({
    img,
    name,
    brand,
    prices,
  }: {
    img: string;
    name: string;
    brand: string;
    prices: {
      amazon: string;
      flipkart: string;
      nykaa: string;
    };
  }) => {
    return (
      <div className="w-[330px] bg-white rounded-2xl shadow-md border border-[#E0E0E0] p-6 flex flex-col gap-6">
        
        {/* Product Image */}
        <img
          src={img}
          alt={name}
          className="w-full h-[200px] object-contain mx-auto"
        />
  
        {/* TEXT */}
        <div>
        <p className="font-montserrat text-[18px] text-black font-medium leading-[26px] tracking-wider h-[52px]">
  {name}
</p>

          
          <p className="font-montserrat text-[16px] text-black/60 mt-4 tracking-wider">{brand}</p>
        </div>
  
        {/* PRICES */}
        <div className="flex flex-col gap-3">
  
          {/* Amazon + Flipkart Row */}
          <div className="flex gap-3">
            <div className="flex items-center gap-2 border border-black/20 rounded-lg px-4 py-2">
              <span>🛒</span>
              <span>{prices.amazon}</span>
            </div>
  
            <div className="flex items-center gap-2 border border-black/20 rounded-lg px-4 py-2">
              <span>🟡</span>
              <span>{prices.flipkart}</span>
            </div>
          </div>
  
          {/* Nykaa */}
          <div className="flex items-center gap-2 border border-black/20 rounded-lg px-4 py-2 w-fit">
            <span>💄</span>
            <span>{prices.nykaa}</span>
          </div>
  
        </div>
      </div>
    );
  };
  
  export default ProductCard;
  