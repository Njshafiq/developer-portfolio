export function Ticker() {
  const items = [
    "FULL-STACK DEVELOPER",
    "CHENNAI, INDIA",
    "OPEN TO NEW ROLES",
    "JAVA & SPRING BOOT",
    "PYTHON & OPENCV",
    "REST APIS & POSTGRESQL",
    "SHAFIQ AHAMED",
  ];

  return (
    <div className="w-full overflow-hidden border-y-2 border-stone-900 dark:border-stone-700 bg-[#fde047] dark:bg-amber-950/80 py-2.5 text-stone-950 dark:text-amber-200 font-mono text-xs font-black tracking-widest uppercase select-none">
      <div className="ticker-track flex gap-8">
        {[...items, ...items, ...items].map((text, idx) => (
          <span key={idx} className="flex items-center gap-8 whitespace-nowrap">
            <span>{text}</span>
            <span className="text-stone-900 dark:text-amber-400 font-black">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

