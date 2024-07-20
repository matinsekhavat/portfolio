interface ExperienceContentProps {
  year: string;
  activity: string;
  title: string;
  description: string;
}

const ExperienceContent: React.FC<ExperienceContentProps> = ({
  year,
  activity,
  title,
  description,
}) => {
  return (
    <div className="flex gap-2">
      {/* Year */}
      <div className="w-[130px]">
        <h1 className="text-base">{year}</h1>
        <p className="text-sm">{activity}</p>
      </div>
      {/* After content */}

      <div className="flex flex-col justify-start items-center">
        <div className="size-4 mb-[3px] p-1 bg-accent-800 rounded-full"></div>
        <div className="h-full w-[1px] bg-accent-200"></div>
      </div>

      {/* Main content */}
      <div className="flex-1">
        <h1>{title}</h1>
        <p className="pb-8 mt-4">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceContent;
