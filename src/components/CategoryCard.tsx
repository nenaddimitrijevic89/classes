import Link from "next/link";

import { TCategory } from "../types";
import { VIDEOS } from "../constants/videos";
import { DiagonalArrow } from "./DiagonalArrow";

interface Props {
  category: TCategory;
  index: number;
}

export const CategoryCard = ({ category, index }: Props) => {
  const justify = index % 2 === 0 ? "justify-self-end" : "justify-self-start";
  const translate =
    index % 2 === 0 ? "translate-y-[20%]" : "-translate-y-[20%]";

  const numberOfClasses =
    category.classes.length > 1
      ? `${category.classes.length} classes`
      : `${category.classes.length} class`;

  return (
    <Link href={`/search/${category.slug}`}>
      <div className={`${justify} transform ${translate} mx-[15%]`}>
        <div className="relative group w-fit cursor-pointer">
          <div className="absolute z-10 flex flex-col gap-4 font-bold transform translate-y-[100%] -translate-x-[50%]">
            <h1 className="text-white text-4xl uppercase transition-colors duration-300 ease-in-out group-hover:text-orange">
              {category.title}
            </h1>
            <div className="flex flex-col gap-2">
              <p className="text-[#BDBDBD]">{numberOfClasses}</p>
              <DiagonalArrow className="transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100" />
            </div>
          </div>
          <div className="overflow-hidden w-[400px] h-[400px] min-[1800px]:h-[600px] min-[1800px]:w-[600px] group-hover:scale-105 transition-transform duration-300 ease-in-out">
            <video
              className="w-full h-full object-cover"
              src={VIDEOS[category.slug as keyof typeof VIDEOS]}
              loop
              autoPlay
              muted
            />
          </div>
        </div>
      </div>
    </Link>
  );
};
