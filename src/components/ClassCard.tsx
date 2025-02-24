import Link from "next/link";

import { TClass } from "../types";
import { CATEGORY_COLORS } from "../constants/categoryColors";
import { DiagonalArrow } from "./DiagonalArrow";

interface Props {
  classItem: TClass;
}

export const ClassCard = ({ classItem }: Props) => {
  const categorySlug = classItem?.categories?.[0]
    ?.slug as keyof typeof CATEGORY_COLORS;
  const backgroundColor = CATEGORY_COLORS[categorySlug];

  return (
    <Link href={`/${classItem.slug}`} key={classItem.id}>
      <div className="flex justify-between py-5 border-t border-[#2d2d2d]">
        <div className="flex gap-3">
          <div
            className="w-[14px] h-[14px] rounded-full mt-2"
            style={{ backgroundColor: backgroundColor }}
          />
          <div className="flex flex-col gap-1 w-[60%]">
            <h1 className="text-white text-2xl uppercase font-bold">
              {classItem.title}
            </h1>
            <p className="text-[#BDBDBD] text-lg line-clamp-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
        <DiagonalArrow />
      </div>
    </Link>
  );
};
