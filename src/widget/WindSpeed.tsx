import SpeedIcon from "@mui/icons-material/Speed";
import WidgetContainer from "components/WidgetContainer";

interface WindSpeed {
  speed: number;
  deg: number;
}

const Visibility: React.FC<WindSpeed> = ({ speed, deg }) => {
  return (
    <WidgetContainer
      icon={<SpeedIcon className="!w-5 text-dark-blue" />}
      title="Wind speed"
      mainContent={`${speed}m/s`}
      bottom={`${deg}deg`}
    />
  );
};

export default Visibility;
