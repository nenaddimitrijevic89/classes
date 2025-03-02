import Image from "next/image";
import close from "@/@@/assets/close.svg";
import { twMerge } from "tailwind-merge";

interface Props {
  filter: string;
  onClick: () => void;
  className?: string;
}

export const FilterItem = ({ filter, onClick, className }: Props) => {
  return (
    <div
      onClick={onClick}
      className={twMerge(
        "bg-white text-black py-2 px-3 flex gap-2 cursor-pointer hover:bg-orange transition duration-300 ease-in-out",
        className
      )}
    >
      <span className="font-medium">{filter}</span>
      <Image src={close} className="w-2" alt="close icon" />
    </div>
  );
};
