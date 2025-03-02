import { twMerge } from "tailwind-merge";
import { CATEGORY_COLORS } from "../constants/categoryColors";
import { ECategorySlug } from "../types";

interface Props {
  categorySlug: ECategorySlug;
  className?: string;
}

export const CategoryColorBullet = ({ categorySlug, className }: Props) => {
  const backgroundColor = CATEGORY_COLORS[categorySlug];
  return (
    <div
      className={twMerge("w-[14px] h-[14px] rounded-full", className)}
      style={{ backgroundColor: backgroundColor }}
    />
  );
};
