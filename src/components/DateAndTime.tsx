import React, { useState, useEffect } from "react";

function Clock() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [weekday, setWeekday] = useState<string | null>(null);

  useEffect(() => {
    const day = currentDateTime.toLocaleDateString("en-US", { weekday: "long" });
    setWeekday(day);

    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatTwoDigits = (value: number) => {
    return value.toString().padStart(2, "0");
  };

  const formatTime = (date: Date) => {
    const hours = formatTwoDigits(date.getHours());
    const minutes = formatTwoDigits(date.getMinutes());
    return `${hours}:${minutes}`;
  };

  return (
    <div className="flex items-center gap-2 text-dark-blue">
      <span>{weekday}</span>
      <h2 className="ml-1">{formatTime(currentDateTime)}</h2>
    </div>
  );
}

export default Clock;
