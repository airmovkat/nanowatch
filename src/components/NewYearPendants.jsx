export default function NewYearPendants() {
  return (
    <div className="absolute left-0 right-0 top-full mt-1 flex justify-center gap-3 pointer-events-none">
      {["2", "0", "2", "6"].map((digit, i) => (
        <div key={i} className="relative flex flex-col items-center">
          {/* String */}
          <div className="w-px h-6 bg-gray-400/70" />

          {/* Pendant */}
          <div className="pendant animate-pendant no-text-jump transform-fix">
            {digit}

            {/* Sparkles */}
            <span className="sparkle sparkle-1" />
            <span className="sparkle sparkle-2" />
            <span className="sparkle sparkle-3" />
          </div>
        </div>
      ))}
    </div>
  );
}
