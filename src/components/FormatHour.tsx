import React from "react";

interface Props {
  datetimeString: string;
}

const FormatHour: React.FC<Props> = ({ datetimeString }) => {
  const formattedHour = new Date(datetimeString).toLocaleTimeString([], {
    hour: "2-digit",
    hour12: false,
  });

  return <div className="text-xs font-medium text-dark-blue">{formattedHour}:00</div>;
};

export default FormatHour;
