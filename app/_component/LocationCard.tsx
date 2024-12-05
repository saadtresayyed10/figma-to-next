import { LocationCardProps } from "./types";

export const LocationCard = ({ city, listings, image }: LocationCardProps) => {
  return (
    <div
      className="flex flex-col flex-1 shrink px-6 pt-96 pb-6 rounded-md basis-0 max-w-[370px] min-h-[426px] min-w-[355px] max-md:px-5 max-md:pt-24"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="flex gap-8 justify-center items-end w-full min-h-[24px]">
        <div className="flex gap-2 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f82e3d0cb817864c68b2f059b6bfe9fb3123a205ebd4f8d84a349a7102abe8d?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4"
            alt=""
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div>{city}</div>
        </div>
        <div className="flex gap-2 items-start">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c788f905d4194debb334b970d3651e419e9d562ab483898b978179479d19bf9?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4"
            alt=""
            className="object-contain shrink-0 w-6 aspect-square"
          />
          <div>{listings}</div>
        </div>
      </div>
    </div>
  );
};
