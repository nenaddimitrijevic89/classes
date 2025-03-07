"use client";

import Image from "next/image";

import close from "@/@@/assets/close.svg";
import { ECategorySlug, TCategory, TGym } from "@/@@/types";
import { CategoryColorBullet } from "../CategoryColorBullet";
import { FilterButton } from "./FilterButton";
import { FilterList } from "./FilterList";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  selectedGyms: TGym["slug"][];
  selectedCategories: ECategorySlug[];
  gyms: TGym[];
  categories: TCategory[];
  handleGymFilters: (gymSlug: TGym["slug"]) => void;
  handleCategoryFilters: (categorySlug: ECategorySlug) => void;
}

export const FilterDropdown = ({
  isOpen,
  onClose,
  selectedGyms,
  selectedCategories,
  gyms,
  categories,
  handleGymFilters,
  handleCategoryFilters,
}: Props) => {
  const isGymActive = (gymSlug: string) => selectedGyms.includes(gymSlug);
  const isCategoryActive = (categorySlug: ECategorySlug) =>
    selectedCategories.includes(categorySlug);

  return (
    <div
      onClick={onClose}
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-10 transition-all duration-300 ease-in-out ${
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="flex flex-col gap-5 pt-10 pb-7 z-20 w-full bg-[#131313] px-5 sm:px-10 lg:px-[136px]"
      >
        <div className="flex flex-wrap gap-2">
          <FilterButton
            onClick={onClose}
            className={`${isOpen ? "bg-orange" : "bg-white"}`}
          />
          <FilterList
            gymFilters={selectedGyms}
            categoryFilters={selectedCategories}
            gyms={gyms}
            categories={categories}
            onGymClick={handleGymFilters}
            onCategoryClick={handleCategoryFilters}
          />
        </div>
        <div className="flex gap-10">
          <div className="flex flex-col gap-5">
            <span className="text-white font-semibold">Locations</span>
            <div className="flex flex-col gap-1">
              {gyms.map((gym) => (
                <div
                  key={gym.id}
                  className={`flex gap-2 py-1 cursor-pointer transition duration-300 ease-in-out
                    ${
                      isGymActive(gym.slug)
                        ? "bg-white text-black w-fit px-2 hover:bg-orange"
                        : "text-white hover:text-orange"
                    }`}
                  onClick={() => handleGymFilters(gym.slug)}
                >
                  <span>{gym.title}</span>
                  {isGymActive(gym.slug) && (
                    <Image src={close} className="w-2" alt="close icon" />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="text-white font-semibold">Category</span>
            <div className="flex flex-col gap-1">
              {categories.map((category) => (
                <div
                  key={category.id}
                  className={`flex gap-2 items-center py-1 cursor-pointer transition duration-300 ease-in-out
                  ${
                    isCategoryActive(category.slug)
                      ? "bg-white text-black w-fit px-2 hover:bg-orange"
                      : "text-white hover:text-orange"
                  }`}
                  onClick={() => handleCategoryFilters(category.slug)}
                >
                  <CategoryColorBullet
                    categorySlug={category.slug}
                    className="w-3 h-3"
                  />
                  <span>{category.title}</span>
                  {isCategoryActive(category.slug) && (
                    <Image src={close} className="w-2" alt="close icon" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
