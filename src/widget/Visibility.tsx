import WidgetContainer from "components/WidgetContainer";
import VisibilityIcon from "@mui/icons-material/Visibility";

interface VisibilityProps {
  visibility: number;
}

const Visibility: React.FC<VisibilityProps> = ({ visibility }) => {
  function distanceFormating(distance: number) {
    if (distance >= 1000) {
      const distanceValue = distance / 1000;
      return distanceValue + " km";
    } else {
      return distance + " m";
    }
  }

  function getVisibilityMessage(visibilityValue: number) {
    let visibility = visibilityValue / 1000;
    let result;
    switch (true) {
      case visibility === 10:
        result = "It's perfectly clear right now.";
        break;
      case visibility < 10:
        result = "Light haze is affecting visibility.";
        break;
      default:
        result = "Invalid visibility value";
        break;
    }
    return result;
  }

  return (
    <WidgetContainer
      icon={<VisibilityIcon className="!w-5 text-dark-blue" />}
      title="Visibility"
      mainContent={distanceFormating(visibility)}
      bottom={getVisibilityMessage(visibility)}
    />
  );
};

export default Visibility;
