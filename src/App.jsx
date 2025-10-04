import StudyTimer from "./components/CountdownTimer";
import React, { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-fixed text-white"
      style={{
        backgroundImage:
          "url('https://app.flocus.com/resources/images/themes/115716ff2673a42650ae.jpg')",
      }}
    >
      {/* Top bar: Time left, Hey Mansi right */}
      <div className="absolute top-6 left-6 right-6 text-2xl flex font-space-grotesk justify-between items-center px-6">
        <div className="font-medium">{time.toLocaleTimeString()}</div>
        <div className="font-semibold">
          Hey Mansi Patel!
        </div>
      </div>

      {/* Centered container for StudyTimer */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-1/4 p-8 rounded-2xl text-center">
          <StudyTimer />
        </div>
      </div>
    </div>
  );
}

export default App;
