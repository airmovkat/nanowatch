import { useEffect, useState } from "react";

export default function Sparkles({ children, count = 18 }) {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const makeParticle = (id) => {
      const left = Math.random() * 100; // percent
      const top = 55 + Math.random() * 30; // keep around lower part of logo
      const size = 3 + Math.random() * 6; // px
      const delay = Math.random() * 2; // s
      const dur = 2 + Math.random() * 2.5; // s
      const dx = (Math.random() - 0.5) * 30; // px horizontal drift
      return { id, left, top, size, delay, dur, dx };
    };

    // initialize
    const initial = Array.from({ length: count }, (_, i) => makeParticle(i));
    setTimeout(() => setParticles(initial), 0);

    // periodically respawn a random particle to keep motion varied
    const iv = setInterval(() => {
      setParticles((prev) => {
        const next = prev.slice();
        const idx = Math.floor(Math.random() * next.length);
        next[idx] = makeParticle(next[idx]?.id ?? Date.now());
        return next;
      });
    }, 900);

    return () => clearInterval(iv);
  }, [count]);

  return (
    <div className="relative inline-block">
      {children}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((p) => (
          <span
            key={p.id}
            className="dust-particle"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.dur}s`,
              transform: `translateX(${p.dx}px)`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

