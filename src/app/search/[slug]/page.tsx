import { ClassCard } from "@/@@/components/ClassCard";
import { getClassesByCategory } from "@/@@/lib/api";
import { TClass } from "@/@@/types";

export default async function FilterSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const classes = await getClassesByCategory(slug);

  return (
    <div className="px-0 lg:px-24">
      {classes.data.map((cls: TClass, index: number) => (
        <ClassCard key={`${cls.id}-${index}`} classItem={cls} />
      ))}
    </div>
  );
}
