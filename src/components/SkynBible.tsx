import decoderImg from "@/assets/Skyn Decoder.png"
import productImg from "@/assets/Skyn Decoder.png"
import routineImg from "@/assets/Skyn Decoder.png"
import expertImg from "@/assets/Skyn Decoder.png"

const bibleCards = [
  {
    title: "Skyn Decoder",
    description: "All skin conditions listed, what is it, and how you can take care of it",
    image: decoderImg,
  },
  {
    title: "Product Guide",
    description: "Comprehensive database of ingredients and their effects on different skin types",
    image: productImg,
  },
  {
    title: "Routine Builder",
    description: "Step-by-step guides for creating perfect morning and evening skincare routines",
    image: routineImg,
  },
  {
    title: "Expert Tips",
    description: "Professional advice from dermatologists and skincare specialists",
    image: expertImg,
  },
];

const SkynBible = () => {
  return (
    <section id="bible" className="relative bg-yellow py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-garamond text-5xl md:text-6xl font-normal text-center mb-16 flex items-center justify-center gap-3">
        
         Skyn Bible
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {bibleCards.map((card, index) => (
  <div
    key={index}
    className="rounded-3xl overflow-hidden bg-secondary hover:shadow-md transition-shadow"
  >
    {/* IMAGE */}
    <div className="w-full aspect-[1.63] overflow-hidden">
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* ONLY FIRST CARD GETS TEXT */}
    {index === 0 && (
      <div className="text-center p-6 space-y-3">
        <h3 className="font-garamond text-2xl font-normal">
          {card.title}
        </h3>

        <p className="text-base font-medium text-muted-foreground leading-relaxed">
          {card.description}
        </p>
      </div>
    )}
  </div>
))}


        </div>
      </div>
    </section>
  );
};

export default SkynBible;