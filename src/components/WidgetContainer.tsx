
interface WidgetContainerProps {
  mainContent: any;
  bottom: any;
  icon: any;
  title: string;
}

const WidgetContainer: React.FC<WidgetContainerProps> = ({ mainContent, bottom, title, icon }) => {
  return (
    <div className="bg-light-blue w-full  flex h-40 flex-col items-stretch overflow-hidden rounded-md p-4 shadow-md dark:bg-neutral-800">
      <div className="flex flex-row gap-1 items-center sm:justify-start justify-between">
        {icon}

        <div className="text-xs font-semibold uppercase ">{title}</div>
      </div>
      <div className="mt-2 h-full">
        <div className="text-2xl font-semibold text-dark-blue">{mainContent}</div>
      </div>
      <div className="text-xs text-zinc-600">{bottom}</div>
    </div>
  );
};

export default WidgetContainer;
