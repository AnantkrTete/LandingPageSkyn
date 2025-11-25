
export default function GridOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Ellipse Glow + Fade */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              ellipse 95% 85% at center,
              rgba(186,153,255,0.25) 0%,
              rgba(186,153,255,0.20) 25%,
              rgba(249,247,242,0.8) 60%,
              rgba(249,247,242,1) 100%
            )
          `,
          maskImage: `
            radial-gradient(
              ellipse 95% 85% at center,
              black 40%,
              transparent 100%
            )
          `,
          WebkitMaskImage: `
            radial-gradient(
              ellipse 95% 85% at center,
              black 40%,
              transparent 100%
            )
          `,
        }}
      />

      {/* Grid Lines */}
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: "80px 80px",
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px)
          `,
          maskImage: `
            radial-gradient(
              ellipse 80% 50% at center,
              black 40%,
              transparent 95%
            )
          `,
          WebkitMaskImage: `
            radial-gradient(
              ellipse 80% 50% at center,
              black 40%,
              transparent 95%
            )
          `,
        }}
      />
    </div>
  );
}
