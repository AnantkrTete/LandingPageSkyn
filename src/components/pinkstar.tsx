type PinkBlobProps = {
  size: number;
  className?: string;
  style?: React.CSSProperties;
};

export default function PinkBlob({ size, className }: PinkBlobProps) {
  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        background: "#EB818B",
        clipPath:
          "path('M56 5 C78 10 93 30 88 52 C83 74 60 90 40 88 C20 86 6 70 4 50 C2 30 18 10 38 5 C48 2 50 2 56 5 Z')",
      }}
    />
  );
}
