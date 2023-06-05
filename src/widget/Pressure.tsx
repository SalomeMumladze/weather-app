import TireRepairIcon from "@mui/icons-material/TireRepair";
import WidgetContainer from "components/WidgetContainer";

interface PressureProps {
  pressure: number;
}

const Pressure: React.FC<PressureProps> = ({ pressure }) => {
  function getPressureMessage(pressure: number) {
    switch (true) {
      case pressure <= 1000:
        return "Low pressure";
      case pressure <= 1013:
        return "Normal pressure";
      case pressure <= 1020:
        return "High pressure";
      default:
        return "Very high pressure";
    }
  }

  return (
    <WidgetContainer
      icon={<TireRepairIcon className="!w-5 text-dark-blue" />}
      title="FEELS LIKE"
      mainContent={`${pressure} hPa`}
      bottom={getPressureMessage(pressure)}
    />
  );
};

export default Pressure;
