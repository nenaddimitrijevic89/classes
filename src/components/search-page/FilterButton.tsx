import filter from "@/@@/assets/filter.svg";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface Props {
  onClick: () => void;
  className?: string;
}

export const FilterButton = ({ onClick, className }: Props) => {
  return (
    <div
      className={twMerge(
        "flex gap-3 px-3 py-2 cursor-pointer bg-white hover:bg-orange transition duration-300 ease-in-out",
        className
      )}
      onClick={onClick}
    >
      <span className="font-medium">Filter</span>
      <Image src={filter} alt="filter icon" />
    </div>
  );
};
