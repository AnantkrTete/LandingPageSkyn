// src/components/StarBurst.tsx
interface StarBurstProps {
  size?: number;
  color?: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function StarBurst({
  size = 90,
  color = "#FDE67B",
  className = "",
}: StarBurstProps) {
  return (
    <div
      className={`
        ${className}
        starburst
      `}
      style={{
        width: size,
        height: size,
        backgroundColor: color,
      }}
    ></div>
  );
}
