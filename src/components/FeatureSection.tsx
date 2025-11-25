
interface FeatureSectionProps {
  title: string;
  titleOffset?: string; // e.g., "mt-10"
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const FeatureSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  titleOffset = "", 
}: FeatureSectionProps) => {
  return (
    <section className="relative py-28 px-6">
      <div className="container mx-auto max-w-6xl">
        <div
          className={`grid md:grid-cols-2 gap-16 items-center ${
            reverse ? "md:grid-flow-dense" : ""
          }`}
        >
          {/* TEXT */}
          <div className={`${reverse ? "md:col-start-2" : ""} space-y-6`}>
            <h2 className={`${titleOffset} font-garamond text-4xl md:text-5xl font-normal leading-tight`}>
              {title}
            </h2>
            
            <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed max-w-[480px]">
              {description}
            </p>
          </div>

          {/* IMAGE */}
          <div className={`${reverse ? "md:col-start-1" : ""}`}>
            <div className="relative aspect-[4/3] rounded-3xl border border-black/20 overflow-hidden shadow-md bg-white">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
