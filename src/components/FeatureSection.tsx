interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
  titleOffset?: string;
  starSrc?: string;

  // ⭐ NEW prop: moves entire text block (title + star + description)
  contentOffset?: string;

  // ⭐ existing star adjustment props
  starTop?: string;
  starRight?: string;
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
}: FeatureSectionProps) => {
  return (
    <div
      className={`relative flex flex-col lg:flex-row items-center gap-12 lg:gap-24 px-6 lg:px-24 py-20 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      {/* LEFT TEXT BLOCK */}
      <div className={`relative z-10 max-w-xl ${contentOffset}`}>
        
        {/* TITLE + STAR WRAPPER */}
        <div className="relative inline-block">
          <h2
            className={`${titleOffset} relative font-garamond z-10 text-4xl md:text-5xl font-normal leading-tight`}
          >
            {title}
          </h2>

          {/* STAR (anchored to title) */}
          {starSrc && (
            <img
              src={starSrc}
              alt=""
              className={`
                absolute
                ${starTop}
                ${starRight}
                w-8 sm:w-12 lg:w-16
                pointer-events-none
              `}
            />
          )}
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-600 text-lg mt-6 leading-relaxed">
          {description}
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative z-10 w-full max-w-2xl">
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
