import { PropertyCardProps } from "./types";

export const PropertyCard = ({
  address,
  price,
  beds,
  baths,
  sqft,
  agentName,
  agentImage,
  propertyImage,
}: PropertyCardProps) => {
  return (
    <div className="flex flex-col flex-1 shrink self-stretch px-3.5 pt-4 pb-9 my-auto bg-white rounded-xl border border-gray-200 border-solid basis-0 max-w-[400px] min-h-[467px] min-w-[355px]">
      <img
        loading="lazy"
        src={propertyImage}
        alt={`Property at ${address}`}
        className="object-contain w-full rounded-xl aspect-[1.87]"
      />
      <div className="flex-1 shrink gap-2.5 p-2.5 mt-6 w-full text-base font-medium leading-snug text-neutral-700">
        {address}
      </div>
      <div className="gap-2.5 p-2.5 mt-6 w-full text-sm font-semibold leading-snug text-slate-500">
        {price}
      </div>
      <div className="flex gap-4 items-start px-2.5 mt-6 w-full text-xs font-medium text-zinc-500">
        <div className="flex gap-1 items-center whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/188e881b3af51b710b4228c6b2578f96f4cb3bad2af550a1b72609972e350e47?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4"
            alt="Bedrooms"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[17px]"
          />
          <div className="self-stretch my-auto">{beds}</div>
        </div>
        <div className="flex gap-1 items-center whitespace-nowrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc62dd65ec5824cb38649947a9bad7241b9cf1c8a0a09c15453f1843906e7c8f?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4"
            alt="Bathrooms"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[17px]"
          />
          <div className="self-stretch my-auto">{baths}</div>
        </div>
        <div className="flex gap-1 items-center">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d22fe2a605a45eb9bab2c7b85ae386bb6355498c54d8906b3ff71d53b803ac5f?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4"
            alt="Square footage"
            className="object-contain shrink-0 self-stretch my-auto aspect-square w-[17px]"
          />
          <div className="self-stretch my-auto">{sqft}</div>
        </div>
      </div>
      <div className="flex gap-10 justify-between items-center mt-6 w-full">
        <div className="flex gap-1.5 items-center self-stretch my-auto text-xs font-medium text-center text-neutral-700">
          <img
            loading="lazy"
            src={agentImage}
            alt={agentName}
            className="object-contain shrink-0 self-stretch my-auto w-7 rounded-full aspect-square"
          />
          <div className="self-stretch my-auto">{agentName}</div>
        </div>
        <div className="flex gap-2.5 items-start self-stretch my-auto">
          <button
            className="flex gap-2 items-center p-1 w-5 h-5 rounded-sm bg-slate-100"
            aria-label="Share"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/36d2837336d9b53b16fbd5baf168bca397c6424ab24d4834a928d2a22c161079?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4"
              alt=""
              className="object-contain w-3.5 aspect-square"
            />
          </button>
          <button
            className="flex gap-2 items-center p-1 w-5 h-5 rounded-sm bg-slate-100"
            aria-label="Save"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e03f25faea5e5d18e64b6ca1762b9bc774fbbba23072c9c7aed477f005b51a7c?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4"
              alt=""
              className="object-contain w-3.5 aspect-square"
            />
          </button>
          <button
            className="flex gap-2 items-center p-1 w-5 h-5 rounded-sm bg-slate-100"
            aria-label="More options"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e60742296560da5f3adddcd01c26ae994c2c8328d3f727106e58cb1c2899e69?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4"
              alt=""
              className="object-contain w-3.5 aspect-square"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
