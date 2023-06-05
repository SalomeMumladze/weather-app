import DeviceThermostatOutlinedIcon from "@mui/icons-material/DeviceThermostatOutlined";
import WidgetContainer from "components/WidgetContainer";

interface FeelsLikeProps {
  feels_like: number;
  temp: number;
}

const FeelsLike: React.FC<FeelsLikeProps> = ({ temp, feels_like }) => {
  function getFeelsLikeMsg(temp: number, feels_like: number) {
    let result;
    switch (true) {
      case temp > feels_like:
        result = "Wind is making it feel colder.";
        break;
      case temp === feels_like:
        result = "Similar to the actual temperature.";
        break;
      default:
        result = "Invalid temperature value";
        break;
    }
    return result;
  }

  return (
    <WidgetContainer
      icon={<DeviceThermostatOutlinedIcon className="!w-5 text-dark-blue" />}
      title="FEELS LIKE"
      mainContent={`${feels_like}°`}
      bottom={getFeelsLikeMsg(Math.round(temp), Math.round(feels_like))}
    />
  );
};

export default FeelsLike;
