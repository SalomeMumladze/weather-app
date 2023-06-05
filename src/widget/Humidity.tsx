import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WidgetContainer from "components/WidgetContainer";

interface HumidityProps {
  humidity: number;
}

const Humidity: React.FC<HumidityProps> = ({ humidity }) => {
  function getHumidityMessage(humidity: number) {
    switch (true) {
      case humidity < 30:
        return "The air is dry.";
      case humidity < 60:
        return "The humidity is at a comfortable level.";
      default:
        return "It's very humid. It might feel uncomfortable.";
    }
  }

  return (
    <WidgetContainer
      icon={<WaterDropIcon className="!w-5 text-dark-blue" />}
      title="HUMIDITY"
      mainContent={`${humidity}°`}
      bottom={getHumidityMessage(humidity)}
    />
  );
};

export default Humidity;
