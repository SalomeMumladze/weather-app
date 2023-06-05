import WidgetContainer from "components/WidgetContainer";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";

interface timezoneProps {
  timezone: number;
  sunrise: number;
  sunset: number;
  dt: number;
}

const SunsetSunrise: React.FC<timezoneProps> = ({ timezone, sunrise, sunset, dt }) => {
  function getLocalTime(timezone: number, dt: number, boolean: boolean) {
    let utc_time = new Date(dt * 1000);
    let local_time = new Date(utc_time.getTime() + timezone * 1000);
    let local_time_format = local_time.toLocaleTimeString("en-US", {
      timeZone: "UTC",
      hour12: boolean,
      hour: "numeric",
      minute: "numeric",
    });
    return local_time_format;
  }

  return (
    <WidgetContainer
      icon={<WbTwilightIcon className="!w-5 text-dark-blue" />}
      title="Sunset"
      mainContent={getLocalTime(timezone, sunset, true)}
      bottom={`Sunrises ${getLocalTime(timezone, sunrise, true)}`}
    />
  );
};

export default SunsetSunrise;
