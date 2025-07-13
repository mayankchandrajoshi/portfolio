import React from 'react';

type EmploymentType = {
  desc: {
    company: string;
    place: string;
    from: string;
    to: string | null;
    isCurrent: boolean;
    tasks: string[];
  };
};

const EmploymentDetailsCard: React.FC<EmploymentType> = ({ desc }) => {

  const formatDate = (date: string | null) => {
    if (!date) return 'Present';
    return new Date(date).toLocaleString('default', {
      month: 'short',
      year: 'numeric',
    });
  };

  const fromFormatted = formatDate(desc.from);
  const toFormatted = formatDate(desc.to);

  const duration = `${fromFormatted} - ${toFormatted}`;

  return (
    <div className='max-w-3xl mx-auto flex flex-row gap-3 mb-3 sm:mb-2'>
      <div className="text-neutral-400 text-xs w-[135px] hidden sm:flex sm:flex-col items-end mt-[2px]">
        <div>{duration}</div>
      </div>

      <div className="flex flex-col items-center gap-3">
        <div className="w-[11px] h-[11px] shrink-0 rounded-full bg-lime-500 mt-1"></div>
        <div className="h-full w-[2px] bg-white"></div>
      </div>

      <div className="flex flex-col gap-1">
        <div className="text-neutral-400 text-xs w-[135px] flex flex-col sm:hidden items-start mt-[2px]">
          <div>{duration}</div>
        </div>
        <h2 className="text-lime-500 font-medium">{desc.company}</h2>
        <h2 className="text-white text-xs sm:text-sm">{desc.place}</h2>
        <ul className="list-disc pl-5 text-xs text-neutral-400 mt-2">
          {desc.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default EmploymentDetailsCard;
