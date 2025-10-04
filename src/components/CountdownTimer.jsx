import { useEffect, useState } from "react";

export default function StudyTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, seconds]);

  const formatTime = (sec) => {
    const h = String(Math.floor(sec / 3600)).padStart(2, "0");
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${h}:${m}:${s}`;
  };

  const reset = () => {
    setIsActive(false);
    setSeconds(0);
  };

  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      {/* Timer display with glow */}
      <div className="text-9xl font-space-grotesk font-semibold text-white">
        {formatTime(seconds)}
      </div>

      {/* Buttons container */}
      <div className="w-full flex justify-between items-center mt-10 px-4">
        <button
          onClick={() => setIsActive(!isActive)}
          className={`flex-1 mx-2 px-6 py-3 rounded-2xl font-semibold text-lg text-white transition-transform duration-300 transform hover:scale-105 shadow-lg ${
            isActive
              ? "bg-[#1A1847] hover:bg-[#2a2760] shadow-[0_0_20px_#1A1847]"
              : "bg-[#1A1847] hover:bg-[#2a2760] shadow-[0_0_20px_#1A1847]"
          }`}
        >
          {isActive ? "Pause" : "Start"}
        </button>

        <button
          onClick={reset}
          className="flex-1 mx-2 px-6 py-3 rounded-2xl font-semibold text-lg text-white bg-[#1A1847] hover:bg-[#2a2760] shadow-[0_0_20px_#1A1847] transition-transform duration-300 transform hover:scale-105"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
