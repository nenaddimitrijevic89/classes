import { getClassBySlug } from "@/@@/lib/api";
import { TClass } from "@/@@/types";
import { BookClass } from "@/@@/components/class/BookClass";

export default async function ClassPage({
  params,
}: {
  params: Promise<{ classId: string }>;
}) {
  const { classId } = await params;
  const { data } = await getClassBySlug(classId);

  const classItem: TClass = data[0];
  const timetables = classItem.timetables;
  const locations = [...new Set(timetables.map((timetable) => timetable.gym))];

  return (
    <div className="grid grid-cols-2 gap-10">
      <div className="flex flex-col gap-12">
        <h1 className="text-white text-3xl uppercase font-extrabold text-center">
          {classItem.title}
        </h1>
        <div className="flex gap-10 py-3 border-y border-[#2D2D2D]">
          <div className="text-[#BDBDBD] font-medium">Locations:</div>
          <div className="flex flex-col gap-1">
            {locations.map((location, i) => (
              <div key={`${location}-${i}`} className="text-white font-medium">
                {location}
              </div>
            ))}
          </div>
        </div>
        <BookClass classItem={classItem} />
      </div>
      <div
        className="fixed top-0 right-0 w-[50%] h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${classItem.featuredImage.url})` }}
      />
    </div>
  );
}
