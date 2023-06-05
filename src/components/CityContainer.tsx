import WeatherIcon from "components/WeatherIcon";

interface CityProps {
  city: string;
  country: string;
  data: {
    weather: {
      description: string;
      icon: string;
      id: number;
    }[];
    main: {
      temp: number;
    };
  };
}

const City: React.FC<CityProps> = ({ city, country, data }) => {
  function capitalizeFirstLetter(str: string) {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
  }

  return (
    <>
      {data && (
        <div className="sm:flex w-full transform justify-between overflow-hidden rounded-3xl bg-white p-6 shadow-md hover:scale-105 hover:transition dark:bg-neutral-800">
          <div className="flex flex-col justify-between items-center sm:items-start sm:text-left text-center">
            <div>
              <div className="text-xs text-zinc-600">{country}</div>
              <div className="text-md font-bold text-dark-blue">{city}</div>
            </div>
            <div className="text-sm font-medium text-zinc-600">
              {capitalizeFirstLetter(data.weather[0].description)}
            </div>
          </div>

          <div className="flex flex-col items-center justify-between overflow-hidden">
            <WeatherIcon size="w-16" iconType={data.weather[0].icon} id={data.weather[0].id} />
            <div className="text-lg font-semibold">{Math.round(data.main.temp)}&deg;</div>
          </div>
        </div>
      )}
    </>
  );
};

export default City;
