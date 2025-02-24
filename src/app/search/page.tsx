import { ClassCard } from "@/@@/components/ClassCard";
import { getAllClasses } from "@/@@/lib/api";
import { TClass } from "@/@@/types";

export default async function SearchPage() {
  const classes = await getAllClasses();
  console.log(classes, 'classes')
  return (
    <div className="px-0 lg:px-24">
      {classes.data.map((cls: TClass, index: number) => (
        <ClassCard key={`${cls.id}-${index}`} classItem={cls} />
      ))}
    </div>
  );
}
