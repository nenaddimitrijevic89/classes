"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";

import { ECategorySlug, TCategory, TClass, TGym } from "@/@@/types";
import close from "@/@@/assets/close.svg";
import { ClassCard } from "../ClassCard";
import { CategoryColorBullet } from "../CategoryColorBullet";
import { FilterList } from "./FilterList";
import { FilterButton } from "./FilterButton";
import { LoadingSpinner } from "../LoadingSpinner";

interface Props {
  classes: TClass[];
  gyms: TGym[];
  categories: TCategory[];
}

export const Search = ({ classes, gyms, categories }: Props) => {
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedGyms, setSelectedGyms] = useState<TGym["slug"][]>([]);
  const [selectedCategories, setSelectedCategories] = useState<ECategorySlug[]>(
    []
  );

  const router = useRouter();
  const searchParams = useSearchParams();
  const gym = searchParams.get("gym");
  const category = searchParams.get("category");

  useEffect(() => {
    if (gym) {
      setSelectedGyms(gym.split(" "));
    }
    if (category) {
      setSelectedCategories(category.split(" ") as ECategorySlug[]);
    }
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateURLWithFilters = useCallback(() => {
    const newParams = new URLSearchParams();
    if (selectedGyms.length > 0) {
      newParams.set("gym", selectedGyms.join(" "));
    }
    if (selectedCategories.length > 0) {
      newParams.set("category", selectedCategories.join(" "));
    }
    router.push(`?${newParams.toString()}`);
  }, [selectedGyms, selectedCategories, router]);

  useEffect(() => {
    updateURLWithFilters();
  }, [updateURLWithFilters, selectedCategories, selectedGyms]);

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
        selectedCategories.includes(category.slug)
      );

    const matchesGym =
      selectedGyms.length === 0 ||
      cls.timetables.some((timetable) =>
        selectedGyms.includes(timetable.gym.toLowerCase().replace(" ", "-"))
      );

    return matchesCategory && matchesGym;
  });

  const isGymActive = (gymSlug: string) => selectedGyms.includes(gymSlug);
  const isCategoryActive = (categorySlug: ECategorySlug) =>
    selectedCategories.includes(categorySlug);

  if (loading) {
    return <LoadingSpinner />;
  }

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
