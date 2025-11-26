interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  titleOffset?: string;
  starSrc?: string;
  contentOffset?: string;
  starTop?: string;
  starRight?: string;

  // ⭐ NEW — shift image left or right
  imageOffset?: string;
}

const FeatureSection = ({
  title,
  description,
  imageSrc,
  imageAlt,
  reverse = false,
  titleOffset = "",
  starSrc,
  contentOffset = "",
  starTop = "-top-2",
  starRight = "-right-8",

  // new default
  imageOffset = "",
}: FeatureSectionProps) => {
  return (
    <div
      className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 px-6 lg:px-24 py-20 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* LEFT TEXT BLOCK */}
      <div className={`relative z-10 max-w-xl ${contentOffset}`}>
        <div className="relative inline-block">
          <h2
            className={`${titleOffset} relative font-garamond z-10 text-4xl md:text-5xl font-normal leading-tight`}
          >
            {title}
          </h2>

          {starSrc && (
            <img
              src={starSrc}
              alt=""
              className={`absolute ${starTop} ${starRight} w-8 sm:w-12 lg:w-16 pointer-events-none`}
            />
          )}
        </div>

        <p className="text-gray-600 text-lg mt-6 leading-relaxed">
          {description}
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className={`relative z-10 w-full max-w-2xl ${imageOffset}`}>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full rounded-3xl shadow-lg"
        />
      </div>
    </div>
  );
};

export default FeatureSection;
