import { TCategory } from "../types";
import { CategoriesBgAnimation } from "./CategoriesBgAnimation";
import { CategoryCard } from "./CategoryCard";

interface Props {
  categories: TCategory[];
}

export const Categories = ({ categories }: Props) => {
  return (
    <div className="pt-20 grid bg-gradient-to-t from-black to-transparent from-50%">
      {categories.map((category, index) => (
        <CategoryCard
          key={`${category.id}-${index}`}
          category={category}
          index={index}
        />
      ))}
      <CategoriesBgAnimation />
    </div>
  );
};
