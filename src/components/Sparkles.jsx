import { useState } from "react";

export default function Sparkles({ children }) {
  const [sparks, setSparks] = useState([]);

  const handleMouseEnter = () => {
    const newSparks = Array.from({ length: 10 }).map(() => ({
      id: Math.random(),
      x: `${Math.random() * 40 - 20}px`,
      y: `${Math.random() * 40 - 20}px`,
    }));

    setSparks(newSparks);
    setTimeout(() => setSparks([]), 800);
  };

  return (
    <div className="relative inline-block" onMouseEnter={handleMouseEnter}>
      {children}
      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="sparkle"
          style={{ "--x": spark.x, "--y": spark.y }}
        />
      ))}
    </div>
  );
}
