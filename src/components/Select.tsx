"use client";

import { HTMLProps, useState } from "react";
import Image from "next/image";

import dropdownArrow from "../assets/dropdown-arrow.svg";
import { twMerge } from "tailwind-merge";
import { TOption } from "../types";

interface Props extends HTMLProps<HTMLSelectElement> {
  options: TOption[];
  className?: string;
}

export const Select = ({
  options,
  placeholder,
  className,
  ...props
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full">
      <select
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
        className={twMerge(
          "w-full bg-black text-white text-sm font-bold py-[14px] px-4 border border-[#2D2D2D] appearance-none focus:outline-none hover:bg-[#2D2D2D] focus:bg-[#2D2D2D]",
          className
        )}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option, i) => (
          <option
            key={`${option.value}-${i}`}
            value={option.value}
            disabled={option?.disabled}
          >
            {option.label}
          </option>
        ))}
      </select>
      <Image
        src={dropdownArrow}
        alt=""
        className={`${
          isOpen ? "rotate-180 transform transition-translate ease-in-out" : ""
        } absolute right-4 top-1/2 transform -translate-y-1/2 transition-transform duration-300 ease-in-out`}
      />
    </div>
  );
};
