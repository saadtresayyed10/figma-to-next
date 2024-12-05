import * as React from "react";
import { NavItem } from "./NavItem";
import { PropertyCard } from "./PropertyCard";
import { LocationCard } from "./LocationCard";
import { ServiceCard } from "./ServiceCard";

const navItems = [
  { label: "HOME" },
  { label: "ABOUT US" },
  { label: "OUR AGENTS" },
  { label: "PROPERTIES", isActive: true },
  { label: "GALLERY" },
  { label: "BLOG" },
  { label: "CONTACT US" },
  { label: "SEARCH" },
];

const properties = [
  {
    address: "92 ALLIUM PLACE, ORLANDO FL 32827",
    price: "$ 590,693",
    beds: 4,
    baths: 4,
    sqft: "2,096.00 ft",
    agentName: "Jenny Wilson",
    agentImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/7238a61bd1076d1dd128bba2de08f4c5b36f02b26547e3d47577eafe93f0c744?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4",
    propertyImage:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/9c13f0939d02431c9597dc48b44e3c4e159fa550e73edb7fb54033a86077a231?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4",
  },
  // Repeat for other properties with their specific data
];

const locations = [
  {
    city: "Washington",
    listings: 12000,
    image: "location1.jpg",
  },
  // Repeat for other locations
];

const services = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2d339d5510d64ded07719f59af22437c94113a4d581910faba18ed48b8a14b9e?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4",
    title: "Sell your home",
    description:
      "We do a free evaluation to be sure you want to start selling.",
  },
  // Repeat for other services
];

export const RealEstateHome = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Navigation */}
      <nav className="flex gap-2.5 justify-center items-center px-20 py-7 w-full bg-white min-h-[98px] max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-center self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
          {/* Logo */}
          <div className="flex gap-2 justify-center items-center self-stretch my-auto text-center text-slate-500">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c921e35bd61ca2b4899a5a75918c8120ae966aaa055c86bae82a25378fa1e06?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4"
              alt="REIS Real Estate Logo"
              className="object-contain shrink-0 self-stretch my-auto w-11 aspect-square"
            />
            <div className="flex flex-col items-start self-stretch my-auto">
              <div className="text-2xl font-semibold tracking-normal leading-none">
                REIS
              </div>
              <div className="text-sm font-medium leading-none">Real State</div>
            </div>
          </div>

          {/* Navigation Items */}
          <div className="flex flex-wrap gap-9 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
            <div className="flex flex-wrap gap-8 items-start self-stretch my-auto min-w-[240px] max-md:max-w-full">
              {navItems.map((item, index) => (
                <NavItem key={index} {...item} />
              ))}
            </div>
            <button
              className="flex gap-3 justify-center items-center self-stretch my-auto w-6"
              aria-label="Menu"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/51ad222b1580f57cd8ac870732f4127804d497cbaf8dfc4a303f576033170a21?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4"
                alt=""
                className="object-contain self-stretch my-auto w-6 aspect-square"
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col justify-center px-8 py-32 w-full bg-sky-950 bg-opacity-60 max-md:px-5 max-md:py-24 max-md:max-w-full">
        {/* Hero content */}
        <div className="flex flex-col justify-center w-full max-md:max-w-full">
          <div className="flex flex-col w-full text-center max-md:max-w-full">
            <h1 className="text-5xl font-semibold leading-none text-white max-md:max-w-full max-md:text-4xl">
              Find Your Dream Home
            </h1>
            <p className="mt-6 text-xl leading-snug text-slate-100 max-md:max-w-full">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </p>
          </div>

          {/* Search Form */}
          <form className="flex flex-col mt-16 w-full text-base max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-2.5 items-start self-center font-medium text-center whitespace-nowrap">
              <button
                type="button"
                className="overflow-hidden gap-2.5 px-6 py-3 text-white rounded bg-slate-500 max-md:px-5"
              >
                Rent
              </button>
              <button
                type="button"
                className="overflow-hidden gap-2.5 px-6 py-3 bg-white rounded text-slate-500 max-md:px-5"
              >
                Sale
              </button>
            </div>

            <div className="flex flex-wrap gap-2.5 justify-center items-start mt-4 w-full max-md:max-w-full">
              <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-center px-16 py-8 w-full bg-white rounded-lg basis-0 max-w-[1400px] min-w-[240px] max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col self-stretch my-auto w-[137px]">
                  <label
                    htmlFor="location"
                    className="self-start font-semibold text-center capitalize text-slate-700"
                  >
                    Locations
                  </label>
                  <select
                    id="location"
                    className="flex gap-1 items-center mt-4 text-neutral-400 bg-transparent border-none"
                    aria-label="Select your city"
                  >
                    <option value="">Select your city</option>
                  </select>
                </div>

                <div className="flex flex-col self-stretch my-auto w-[177px]">
                  <label
                    htmlFor="propertyType"
                    className="font-semibold capitalize text-slate-700"
                  >
                    Property Type
                  </label>
                  <select
                    id="propertyType"
                    className="flex gap-1.5 items-center mt-4 w-full text-neutral-400 bg-transparent border-none"
                    aria-label="Select property type"
                  >
                    <option value="">Select property type</option>
                  </select>
                </div>

                <div className="flex flex-col self-stretch my-auto w-[155px]">
                  <label
                    htmlFor="rentRange"
                    className="font-semibold capitalize text-slate-700"
                  >
                    Rent Range
                  </label>
                  <select
                    id="rentRange"
                    className="flex gap-1.5 items-center mt-4 w-full text-neutral-400 bg-transparent border-none"
                    aria-label="Select rent range"
                  >
                    <option value="">Select rent range</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="gap-2.5 self-stretch px-6 py-3 my-auto font-medium text-center text-white whitespace-nowrap rounded bg-slate-500 w-[102px] max-md:px-5"
                >
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* Properties Section */}
      <section className="flex flex-col py-20 w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex flex-col self-center max-w-full text-center w-[688px]">
            <h2 className="text-4xl font-semibold leading-tight text-slate-800 max-md:max-w-full">
              Latest Properties of Rent
            </h2>
            <p className="mt-6 text-xl leading-7 text-neutral-400 max-md:max-w-full">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 justify-center items-center px-2.5 mt-10 w-full max-md:max-w-full">
            {properties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>

        <button className="gap-2.5 self-center px-6 py-3 mt-10 text-base font-medium text-center text-white rounded bg-slate-500 max-md:px-5">
          Load more listing
        </button>
      </section>

      {/* Locations Section */}
      <section className="flex flex-col py-20 w-full max-md:max-w-full">
        <div className="flex flex-col w-full max-md:max-w-full">
          <div className="flex flex-col self-center max-w-full text-center w-[688px]">
            <h2 className="text-4xl font-semibold leading-tight text-slate-800 max-md:max-w-full">
              Properties by Area
            </h2>
            <p className="mt-6 text-xl leading-7 text-neutral-400 max-md:max-w-full">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </p>
          </div>

          <div className="flex flex-wrap gap-10 justify-center items-start mt-10 w-full text-base font-medium text-white whitespace-nowrap max-md:max-w-full">
            {locations.map((location, index) => (
              <LocationCard key={index} {...location} />
            ))}
          </div>
        </div>

        <button className="gap-2.5 self-center px-6 py-3 mt-10 text-base font-medium text-center text-white rounded bg-slate-500 max-md:px-5">
          Load more listing
        </button>
      </section>

      {/* Services Section */}
      <section className="flex flex-wrap gap-20 justify-center items-center mt-14 w-full text-base max-md:mt-10 max-md:max-w-full">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </section>

      {/* Contact Form Section */}
      <section className="flex flex-wrap gap-10 justify-center items-start px-1.5 py-20 w-full bg-slate-100 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink px-2.5 basis-0 max-w-[900px] min-w-[240px] w-[900px] max-md:max-w-full">
          <div className="flex flex-col self-center max-w-full text-center w-[688px]">
            <h2 className="text-4xl font-semibold leading-tight text-slate-800 max-md:max-w-full">
              Contact us
            </h2>
            <p className="mt-6 text-xl leading-7 text-neutral-400 max-md:max-w-full">
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </p>
          </div>

          <form className="flex flex-col px-8 py-7 mt-10 w-full bg-white rounded-xl shadow-[0px_0px_24px_rgba(0,0,0,0.03)] max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col w-full max-md:max-w-full">
              <h3 className="text-2xl font-bold text-neutral-700 max-md:max-w-full">
                Enquiry Form
              </h3>
              <p className="mt-1.5 text-lg leading-loose text-slate-600 max-md:max-w-full">
                Are you looking for details about a certain property? Ask us a
                question using the form below.
              </p>
            </div>

            <div className="flex flex-col mt-4 w-full text-base text-neutral-400 max-md:max-w-full">
              <div className="flex flex-wrap gap-2.5 justify-center w-full tracking-normal max-md:max-w-full">
                <input
                  type="text"
                  placeholder="First name"
                  aria-label="First name"
                  className="flex-1 shrink px-3 py-4 rounded border border-solid border-black border-opacity-50 min-w-[240px]"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  aria-label="Last name"
                  className="flex-1 shrink px-3 py-4 rounded border border-solid border-black border-opacity-50 min-w-[240px]"
                />
              </div>

              <input
                type="email"
                placeholder="Email id"
                aria-label="Email address"
                className="px-3 py-4 mt-2.5 w-full tracking-normal rounded border border-solid border-black border-opacity-50 max-md:max-w-full"
              />

              <textarea
                placeholder="Comments or questions"
                aria-label="Comments or questions"
                className="px-3 pt-3 pb-16 mt-2.5 w-full tracking-normal rounded border border-solid border-black border-opacity-50 min-h-[105px] max-md:max-w-full"
              />

              <button
                type="submit"
                className="self-center mt-2.5 max-w-full text-center text-white whitespace-nowrap rounded bg-slate-500 min-h-[46px] w-[222px]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="flex items-start p-12 w-full max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-start w-full basis-0 min-w-[240px] max-md:max-w-full">
          {/* Footer content */}
          {/* Company Info */}
          <div className="flex flex-col min-h-[300px] min-w-[240px] w-[312px]">
            <div className="flex gap-2 justify-center items-center self-start text-center text-slate-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d75cabc50f1261610ad71cc03b5e8823cd8460baebf50a26262f43a606b9dc4?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4"
                alt="REIS Real Estate Logo"
                className="object-contain shrink-0 self-stretch my-auto w-11 aspect-square"
              />
              <div className="flex flex-col items-start self-stretch my-auto">
                <div className="text-2xl font-semibold tracking-normal leading-none">
                  REIS
                </div>
                <div className="text-sm font-medium leading-none">
                  Real State
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-5 w-full text-base min-h-[168px] text-zinc-500">
              <h3 className="text-2xl font-semibold tracking-normal leading-none text-zinc-900">
                Contact Us
              </h3>
              <div className="mt-3.5">Call : +123 400 123</div>
              <p className="mt-3.5 leading-6">
                Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
                auctor felis.
              </p>
              <div className="mt-3.5 text-neutral-700">
                Email: example@mail.com
              </div>
            </div>

            <div className="flex gap-4 justify-between items-center mt-5 max-w-full w-[304px]">
              {/* Social Media Links */}
              <a
                href="#"
                className="flex flex-col justify-center items-center self-stretch px-3.5 my-auto w-12 h-12 rounded bg-slate-100"
                aria-label="Facebook"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/fd3c3e1e55457d78e4ac406d9ab8aa83467ef5fe376fd0fc15068b4b7b7501d7?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4"
                  alt=""
                  className="object-contain w-5 aspect-square"
                />
              </a>
              <a
                href="#"
                className="flex flex-col justify-center items-center self-stretch px-3.5 my-auto w-12 h-12 rounded bg-slate-100"
                aria-label="Twitter"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d50a05fa9ec3357c1ce74c6ae067347b1d56b618d16ff68f0916cb7fc3b5cd16?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4"
                  alt=""
                  className="object-contain w-5 aspect-square"
                />
              </a>
              <a
                href="#"
                className="flex flex-col justify-center items-center self-stretch px-3.5 my-auto w-12 h-12 rounded bg-slate-100"
                aria-label="Instagram"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ec8092bd97760572932345cf63069dbc3128e1db5eadf8e3c7f8f8320ffc469?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4"
                  alt=""
                  className="object-contain w-5 aspect-square"
                />
              </a>
              <a
                href="#"
                className="flex flex-col justify-center items-center self-stretch px-3.5 my-auto w-12 h-12 rounded bg-slate-100"
                aria-label="LinkedIn"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/4b2b38956a83ff091be72de1ddfa2af29f741f48b1b955d0c7631f7a5f06a1e9?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4"
                  alt=""
                  className="object-contain w-5 aspect-square"
                />
              </a>
              <a
                href="#"
                className="flex flex-col justify-center items-center self-stretch px-3.5 my-auto w-12 h-12 rounded bg-slate-100"
                aria-label="YouTube"
              >
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f5c48027193175c4112ec4d485ae952389c2e1ba5d7ce0fb02e4392110a818c?placeholderIfAbsent=true&apiKey=77c4962a7256418a974468f0e8ddfab4"
                  alt=""
                  className="object-contain w-5 aspect-square"
                />
              </a>
            </div>
          </div>

          {/* Features */}
          <div className="flex flex-col min-h-[248px] w-[173px]">
            <h3 className="text-2xl font-semibold tracking-normal leading-none text-zinc-900">
              Features
            </h3>
            <nav className="flex flex-col mt-8 w-full text-base min-h-[184px] text-zinc-500">
              <a href="#" className="hover:text-zinc-700">
                Home
              </a>
              <a href="#" className="mt-4 hover:text-zinc-700">
                Become a Host
              </a>
              <a href="#" className="mt-4 hover:text-zinc-700">
                Pricing
              </a>
              <a href="#" className="mt-4 hover:text-zinc-700">
                Blog
              </a>
              <a href="#" className="mt-4 hover:text-zinc-700">
                Contact
              </a>
            </nav>
          </div>

          {/* Company */}
          <div className="flex flex-col min-h-[248px] w-[173px]">
            <h3 className="text-2xl font-semibold tracking-normal leading-none text-zinc-900">
              Company
            </h3>
            <nav className="flex flex-col mt-8 w-full text-base min-h-[184px] text-zinc-500">
              <a href="#" className="hover:text-zinc-700">
                About Us
              </a>
              <a href="#" className="mt-4 hover:text-zinc-700">
                Press
              </a>
              <a href="#" className="mt-4 hover:text-zinc-700">
                Contact
              </a>
              <a href="#" className="mt-4 hover:text-zinc-700">
                Careers
              </a>
              <a href="#" className="mt-4 hover:text-zinc-700">
                Blog
              </a>
            </nav>
          </div>

          {/* Team and Policies */}
          <div className="flex flex-col min-h-[168px] w-[203px]">
            <h3 className="text-2xl font-semibold tracking-normal leading-none text-zinc-900">
              Team and policies
            </h3>
            <nav className="flex flex-col mt-8 w-full text-base min-h-[104px] text-zinc-500">
              <a href="#" className="hover:text-zinc-700">
                Terms of servies
              </a>
              <a href="#" className="mt-4 hover:text-zinc-700">
                Privacy Policy
              </a>
              <a href="#" className="mt-4 hover:text-zinc-700">
                Security
              </a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
};
