import { NavItemProps } from "./types";

export const NavItem = ({ label, isActive = false }: NavItemProps) => {
  return (
    <div
      className={`${
        isActive ? "font-semibold" : ""
      } text-sm leading-loose text-center text-gray-900`}
    >
      {label}
    </div>
  );
};
