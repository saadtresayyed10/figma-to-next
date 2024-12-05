import { ServiceCardProps } from "./types";

export const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center self-stretch px-6 my-auto bg-white rounded aspect-square max-w-[340px] min-w-[300px] shadow-[0px_24px_68px_rgba(59,77,129,0.08)] w-[312px] max-md:px-5">
      <div className="flex flex-col max-w-full w-[268px]">
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="object-contain aspect-square w-[78px]"
        />
        <div className="flex flex-col mt-6 w-full">
          <div className="self-start text-2xl font-semibold tracking-normal leading-none text-center text-neutral-700">
            {title}
          </div>
          <div className="mt-6 leading-6 text-neutral-400">{description}</div>
          <button className="mt-6 text-slate-500">Read more</button>
        </div>
      </div>
    </div>
  );
};
