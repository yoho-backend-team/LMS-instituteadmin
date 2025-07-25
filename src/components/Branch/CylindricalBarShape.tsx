const CylindricalBarShape = ({ x, y, width, height, fill }: any) => {
  const radiusX = width / 2;
  const radiusY = 10;

  return (
    <g>
      {/* Top Ellipse */}
      <ellipse
        cx={x + width / 2}
        cy={y}
        rx={radiusX}
        ry={radiusY}
        fill={shadeColor(fill, -10)}
      />
      {/* Main Rect Body */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={0}
        ry={0}
      />
    </g>
  );
};

// Optional: Light shading helper
function shadeColor(color: string, percent: number) {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = Math.min(255, Math.max(0, R + (R * percent) / 100));
  G = Math.min(255, Math.max(0, G + (G * percent) / 100));
  B = Math.min(255, Math.max(0, B + (B * percent) / 100));

  const RR = R.toString(16).padStart(2, "0");
  const GG = G.toString(16).padStart(2, "0");
  const BB = B.toString(16).padStart(2, "0");

  return `#${RR}${GG}${BB}`;
}

export default CylindricalBarShape
