"use client";

import { useState } from "react";
import Image from "next/image";

import { ECategorySlug, TCategory, TClass, TGym } from "@/@@/types";
import close from "@/@@/assets/close.svg";
import { ClassCard } from "../ClassCard";
import { CategoryColorBullet } from "../CategoryColorBullet";
import { FilterList } from "./FilterList";
import { FilterButton } from "./FilterButton";

interface Props {
  classes: TClass[];
  gyms: TGym[];
  categories: TCategory[];
}

export const Search = ({ classes, gyms, categories }: Props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<ECategorySlug[]>(
    []
  );
  const [selectedGyms, setSelectedGyms] = useState<TGym["slug"][]>([]);

  const handleGymFilters = (gymSlug: string) => {
    if (selectedGyms.includes(gymSlug)) {
      const filtered = selectedGyms.filter((slug) => slug !== gymSlug);
      setSelectedGyms(filtered);
      return;
    }

    setSelectedGyms([...selectedGyms, gymSlug]);
  };

  const handleCategoryFilters = (categorySlug: ECategorySlug) => {
    if (selectedCategories.includes(categorySlug)) {
      const filtered = selectedCategories.filter(
        (slug) => slug !== categorySlug
      );
      setSelectedCategories(filtered);
      return;
    }

    setSelectedCategories([...selectedCategories, categorySlug]);
  };

  const filteredClasses = classes.filter((cls) => {
    const matchesCategory =
      selectedCategories.length === 0 ||
      cls.categories.some((category) =>
        selectedCategories.includes(category.slug as ECategorySlug)
      );

    const matchesGym =
      selectedGyms.length === 0 ||
      cls.timetables.some((timetable) =>
        selectedGyms.includes(timetable.gym.toLowerCase())
      );

    return matchesCategory && matchesGym;
  });

  console.log(filteredClasses, "filteredClasses");

  const isGymActive = (gymSlug: string) => selectedGyms.includes(gymSlug);
  const isCategoryActive = (categorySlug: ECategorySlug) =>
    selectedCategories.includes(categorySlug);

  return (
    <div className="px-0 lg:px-24">
      <div className="fixed top-10 pl-14 lg:pl-0 z-10">
        <FilterButton
          onClick={() => setDropdownOpen(true)}
          className={`${dropdownOpen ? "hidden" : "flex"}`}
        />
      </div>

      {filteredClasses.map((cls: TClass, index: number) => (
        <ClassCard key={`${cls.id}-${index}`} classItem={cls} />
      ))}

      <div
        className={`flex flex-col gap-5 fixed top-0 left-0 pt-10 pb-7 z-10 w-full bg-[#131313] px-5 sm:px-10 lg:px-[136px] transition-all duration-300 ease-in-out transform ${
          dropdownOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full"
        }`}
      >
        <div className="flex flex-wrap gap-2">
          <FilterButton
            onClick={() => setDropdownOpen(false)}
            className={`${dropdownOpen ? "bg-orange" : "bg-white"}`}
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
                  <Image src={close} className="w-2" alt="close icon" />
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
                  <Image src={close} className="w-2" alt="close icon" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
