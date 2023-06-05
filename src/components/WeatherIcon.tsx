import { useEffect, useState } from "react";
import { weatherCodes } from "assets/weatherCodes";

interface WeatherData {
  iconType: string;
  id: number;
  size: string;
}

interface WeatherCodeDay {
  [key: number]: string;
}

const WeatherIcon: React.FC<WeatherData> = ({ iconType, id, size }) => {
  const [path, setPath] = useState<string | boolean>(false);
  const [iconCode, setIconCode] = useState("");

  function getIconName(iconType: string, id: number): string {
    let iconName = "";
    switch (true) {
      case iconType.includes("d"):
        iconName = (weatherCodes.day as WeatherCodeDay)[id];
        break;
      case iconType.includes("n"):
        iconName = (weatherCodes.night as WeatherCodeDay)[id];
        break;
      default:
        console.log("Invalid icon type");
        iconName = "default-icon";
        break;
    }
    return iconName;
  }

  useEffect(() => {
    const icon = getIconName(iconType, id);

    setIconCode(icon);
    const importIcon = async () => {
      try {
        const { default: _path } = await import(`../assets/icons/wi_${icon}.svg`);
        setPath(_path);
      } catch (err) {
        console.error(err);
      }
    };
    importIcon();
  }, [iconType, id]);

  return (
    <>
      {path && (
        <img
          src={`${process.env.PUBLIC_URL}${path}`}
          alt={iconCode}
          className={`${size} will-change-auto`}
          loading="lazy"
        />
      )}
    </>
  );
};

export default WeatherIcon;
