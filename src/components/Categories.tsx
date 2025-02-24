import { TCategory } from "../types";
import { CategoryCard } from "./CategoryCard";

interface Props {
  categories: TCategory[];
}

export const Categories = ({ categories }: Props) => {
  return (
    <div className="pt-20 grid">
      {categories.map((category, index) => (
        <CategoryCard key={`${category.id}-${index}`} category={category} index={index} />
        ))}
    </div>
  );
};
