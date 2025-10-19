import React from "react";

interface DottedGradientProps {
  size?: number; // tamanho do círculo em pixels
  top?: number; // posição top
  left?: string; // posição left (ex: "50%")
  colors?: [string, string]; // gradiente do centro e borda
  maskSize?: number; // espaçamento das bolinhas
  className?: string; // classes adicionais
}

const DottedGradient: React.FC<DottedGradientProps> = ({
  size = 900,
  top = 100,
  left = "50%",
  colors = ["#ff500f", "transparent"],
  maskSize = 10,
  className = "",
}) => {
  return (
    <div
      className={`
        absolute 
        [mask-image:radial-gradient(circle,_black_1px,transparent_1px)]
        [mask-size:${maskSize}px_${maskSize}px]
        [mask-repeat:repeat]
        [mask-composite:intersect]
        pointer-events-none
        z-[-1]
        ${className}
      `}
      style={{
        width: size,
        height: size,
        top: top,
        left: left,
        transform: "translateX(-50%)",
        background: `radial-gradient(circle at center, ${colors[0]}, ${colors[1]} 60%)`,
      }}
    />
  );
};

export default DottedGradient;
